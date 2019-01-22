import org.apache.spark.streaming.{Seconds, StreamingContext}
import org.apache.spark.SparkConf
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.spark.streaming.kafka010._

import org.apache.spark.streaming.kafka010.LocationStrategies.PreferConsistent
import org.apache.spark.streaming.kafka010.ConsumerStrategies.Subscribe

object StreamingKafka
{
  def main(args: Array[String]): Unit =
  {
	
    
	val conf = new SparkConf().setAppName("App").setMaster("local[2]")
        val ssc = new StreamingContext(conf, Seconds(5))

	val kafkaParams = Map[String, Object](
	  "bootstrap.servers" -> "kafka:9092",
	  "key.deserializer" -> classOf[StringDeserializer],
	  "value.deserializer" -> classOf[StringDeserializer],
	  "enable.auto.commit" -> (false: java.lang.Boolean)

	)

	val topics = Array("input_tickets")
	val stream = KafkaUtils.createDirectStream[String, String](
	  ssc,
	  PreferConsistent,
	  Subscribe[String, String](topics, kafkaParams)
	)

	stream.foreachRDD { rdd =>
	  // Get the offset ranges in the RDD
	  val offsetRanges = rdd.asInstanceOf[HasOffsetRanges].offsetRanges
	  for (o <- offsetRanges) {
	    println(s"${o.topic} ${o.partition} offsets: ${o.fromOffset} to ${o.untilOffset}")
	  }
	}


        
	ssc.start()

	// the above code is printing out topic details every 5 seconds
	// until you stop it.

	ssc.stop(stopSparkContext = false)

    /*val struct = new StructType()
      .add("id", DataTypes.StringType)
      .add("name", DataTypes.StringType)*/

    /*val spark = SparkSession.builder()
      .appName("ticketoc")
      .master("local[*]")
      .getOrCreate()

    import spark.implicits._
	

    val inputDf = spark.readStream
      .format("org.apache.spark.sql.kafka010.KafkaSourceProvider")
      .option("kafka.bootstrap.servers", "kafka:9092")
      .option("subscribe", "input_tickets")
      .load()
      .selectExpr("CAST(value AS STRING)")
      .as[String]
    






    /*** Traitement data ***/

    val consoleOutput = inputDf.writeStream
      .outputMode("append")
      .format("console")
      .start().awaitTermination()


    print("fin")*/

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


  }

}
