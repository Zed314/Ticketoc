package fr.insa.ticketoc.ingestion.receipts

import org.bson.Document
import play.api.libs.json._
import com.mongodb.spark._
import org.apache.spark.SparkConf
import org.apache.spark.streaming.{Seconds, StreamingContext}
import org.apache.spark.rdd.RDD
import org.apache.kafka.common.serialization.{StringDeserializer, StringSerializer}
import org.apache.spark.streaming.kafka010.KafkaUtils
import org.apache.spark.streaming.kafka010.LocationStrategies.PreferConsistent
import org.apache.spark.streaming.kafka010.ConsumerStrategies.Subscribe
import org.apache.kafka.clients.producer.{KafkaProducer, ProducerRecord}
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.bson.Document
import scala.collection.JavaConverters._
import play.api.libs.functional.syntax._
import org.apache.log4j.Logger

object StreamingKafka {

  def main(args: Array[String]): Unit = {

    val conf = new SparkConf()
    conf.setAppName("ingestion-input-receipts")
    conf.setMaster("local[*]")
    conf.set("spark.mongodb.output.uri", "mongodb://" + sys.env("DATABASE") + "/ticketoc.receipts")

    val ssc = new StreamingContext(conf, Seconds(sys.env("BATCH_DURATION").toLong))

    val kafkaParams = Map[String, Object](
      "bootstrap.servers"  -> sys.env("KAFKA_CONNECT"),
      "key.deserializer"   -> classOf[StringDeserializer],
      "value.deserializer" -> classOf[StringDeserializer],
      "key.serializer"     -> classOf[StringSerializer],
      "value.serializer"   -> classOf[StringSerializer],
      "group.id"           -> "ingestion-receipts-streaming-kafka",
      "client.id"          -> "ingestion-receipts-streaming-kafka",
      "auto.offset.reset"  -> "earliest",
      "enable.auto.commit" -> (true: java.lang.Boolean)
    )

    @transient lazy val logger = Logger.getLogger(getClass.getName)
    val producer = new KafkaProducer[String, String](kafkaParams.asJava)
    val stream = KafkaUtils.createDirectStream[String, String](
      ssc,
      PreferConsistent,
      Subscribe[String, String](Array("input-receipts"), kafkaParams)
    )

    var totalRevenue     : Double = 0.0
    var totalCard        : Double = 0.0
    var totalCash        : Double = 0.0
    var saleCount        : Long = 0
    var cashPaymentCount : Long = 0
    var cardPaymentCount : Long = 0

    stream.foreachRDD { rdd: RDD[ConsumerRecord[String, String]] =>
      try {

        val receipts = rdd.map(row => Json.parse(row.value()))

        receipts.map(receipt => Document.parse(Json.stringify(receipt))).saveToMongoDB()

        val batchSize = receipts.count()

        val settlements =   receipts.flatMap(receipt    => (receipt    \ "settlements").as[List[JsObject]])
        val card        = settlements.filter(settlement => (settlement \ "paymentMechanism").as[String] == "CB")
        val cash        = settlements.filter(settlement => (settlement \ "paymentMechanism").as[String] == "Especes")

        val batchRevenue: Double = receipts.map(receipt    => (receipt    \ "documentTotal" \ "grossTotal").as[Double]).fold(0.0)(_ + _)
        totalCard            +=        card.map(settlement => (settlement \ "settlementAmount"            ).as[Double]).fold(0.0)(_ + _)
        totalCash            +=        cash.map(settlement => (settlement \ "settlementAmount"            ).as[Double]).fold(0.0)(_ + _)
        totalRevenue         += batchRevenue

        saleCount        += receipts.count()
        cardPaymentCount +=     card.count()
        cashPaymentCount +=     cash.count()

        val stats = Json.obj(
          "totalRevenue"     -> totalRevenue,
          "totalCard"        -> totalCard,
          "totalCash"        -> totalCash,
          "saleCount"        -> saleCount,
          "cardPaymentCount" -> cardPaymentCount,
          "cashPaymentCount" -> cashPaymentCount,
          "batchSize"        -> batchSize,
          "batchRevenue"     -> batchRevenue
        )

        producer.send(new ProducerRecord[String, String]("stats-receipts", Json.stringify(stats)))

        receipts.take(1) match {
          case Array(receipt) => producer.send(new ProducerRecord[String, String]("sample-receipts", Json.stringify(receipt)))
          case _              => Unit
        }

      } catch {
        case e: Throwable => logger.error("Batch failed", e)
      }
    }

    ssc.start()
    ssc.awaitTermination()

    producer.close()
  }
}
