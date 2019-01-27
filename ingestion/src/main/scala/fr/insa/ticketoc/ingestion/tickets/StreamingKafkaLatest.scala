package fr.insa.ticketoc.ingestion.tickets

import Infra.TicketAccumulator
import org.apache.avro.Schema
import org.apache.avro.generic.GenericRecord
import org.apache.avro.io.{DatumReader, Decoder, DecoderFactory}
import org.apache.avro.specific.SpecificDatumReader
/* docker cp /home/faissalitto/insa/bigdata/Ticketoc_3/Ticketoc/spark/connexion/src/main/scala/StreamingKafka_latest.scala 92be8f9def99:/Sample.scala */
import org.apache.spark.streaming.{Seconds, StreamingContext}
import org.apache.spark.SparkConf
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.spark.streaming.kafka010._
import org.apache.spark.streaming.kafka010.LocationStrategies.PreferConsistent
import org.apache.spark.streaming.kafka010.ConsumerStrategies.Subscribe
import scalaj.http.Http


object StreamingKafkaLatest
{
  def main(args: Array[String]): Unit =
  {
	  println("Hello world")
    
    val conf = new SparkConf().setAppName("ticketoc").setMaster("local[2]")
    val ssc = new StreamingContext(conf, Seconds(5))

    val kafkaParams = Map[String, Object](
      "bootstrap.servers" -> "kafka:9092",
      "key.deserializer" -> classOf[StringDeserializer],
      "value.deserializer" -> classOf[StringDeserializer],
      "group.id" -> "consumer_ss",
      "enable.auto.commit" -> (false: java.lang.Boolean)

    )

    val topics = Array("input-tickets")
    val stream = KafkaUtils.createDirectStream[Array[Byte], Array[Byte]](
      ssc,
      PreferConsistent,
      Subscribe[Array[Byte], Array[Byte]](topics, kafkaParams)
    )


    // https://www.programcreek.com/scala/org.apache.avro.generic.GenericRecord

    val avroFormat = getProductSchema()
    val schema: Schema = new Schema.Parser().parse(avroFormat)


    val reader: DatumReader[GenericRecord] = new SpecificDatumReader[GenericRecord](schema)


    var somme = new TicketAccumulator()

    stream.foreachRDD { rdd =>
      rdd.foreach(println)

      val pricesRdd = rdd.map(getPrice(_,reader))
      somme.add(pricesRdd.reduce(_+_))

      println("Somme : "+somme)
    }

    ssc.start()

    // the above code is printing out topic details every 5 seconds
    // until you stop it.

    ssc.awaitTermination()
  }






  

    /*

    val conf = new SparkConf().setAppName("App").setMaster("local[*]")
    val ssc = new StreamingContext(conf, Seconds(1))

    // Create a DStream that will connect to hostname:port, like localhost:9999
    val lines = ssc.socketTextStream("localhost", 9999)

    // Split each line into words
    val words = lines.flatMap(_.split(" "))

    // Count each word in each batch
    val pairs = words.map(word => (word, 1))


    // Reduce last 30 seconds of data, every 10 seconds
    val windowedWordCounts = pairs.reduceByKeyAndWindow((a:Int,b:Int) => (a + b), Seconds(30), Seconds(10))



    // Print the first ten elements of each RDD generated in this DStream to the console
    windowedWordCounts.print()

    ssc.start()             // Start the computation
    ssc.awaitTermination()  // Wait for the computation to terminate

    */

  def getPrice(ticket : ConsumerRecord[Array[Byte],Array[Byte]], reader: DatumReader[GenericRecord]) : Float = {
    val decoder: Decoder = DecoderFactory.get().binaryDecoder(ticket.value(), null)
    val parsedData: GenericRecord = reader.read(null, decoder)

    parsedData.get("documentTotal").asInstanceOf[GenericRecord].get("netTotal").asInstanceOf[Float]
  }

  def getProductSchema() : String = {
    val schemaRegistry = sys.env("SCHEMA_REGISTRY")
    Http("http://"+schemaRegistry+"/v1/schemas/product").asString.body
  }

}
