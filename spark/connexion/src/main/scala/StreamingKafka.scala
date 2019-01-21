import Infra.TicketAccumulator
import org.apache.spark._
import org.apache.spark.sql.{ForeachWriter, Row, SparkSession}
import org.apache.spark.streaming._
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types.DataTypes
import org.apache.spark.sql.types.StructType
import org.apache.spark.streaming.kafka010.{HasOffsetRanges, KafkaUtils}


object StreamingKafka
{
  def main(args: Array[String]): Unit =
  {
	
    print("début")

    /*val struct = new StructType()
      .add("id", DataTypes.StringType)
      .add("name", DataTypes.StringType)*/

    val spark = SparkSession.builder()
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
    


    /*** https://spark.apache.org/docs/latest/streaming-kafka-0-10-integration.html ***/



    /*** Traitement data ***/

    var somme = new TicketAccumulator()

    /*
    val stream = KafkaUtils.createDirectStream[String, String](
      spark,
      PreferConsistent,
      Assign[String, String](fromOffsets.keys.toList, kafkaParams, fromOffsets)
    )

    stream.foreachRDD { rdd =>
      val offsetRanges = rdd.asInstanceOf[HasOffsetRanges].offsetRanges

      val results = yourCalculation(rdd)

      // begin your transaction

      // update results
      // update offsets where the end of existing offsets matches the beginning of this batch of offsets
      // assert that offsets were updated correctly

      // end your transaction
    }
*/




    val consoleOutput = inputDf.writeStream
      .outputMode("append")
      .format("console")
      .start().awaitTermination()


    print("fin")

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
