package ticktoc
import org.apache.spark.streaming.{Seconds, StreamingContext}
import org.apache.spark.SparkConf
import org.apache.spark.sql.SQLContext
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.spark.streaming.kafka010._
import org.apache.spark.sql.functions._
import org.apache.spark.streaming.kafka010.LocationStrategies.PreferConsistent
import org.apache.spark.streaming.kafka010.ConsumerStrategies.Subscribe
import net.liftweb.json._
import net.liftweb.json.JsonDSL._

import play.api.libs.json._
import scala.collection.mutable._
import java.util.Properties

import org.apache.kafka.clients.producer._

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
	  "group.id" -> "consumer_ss",
	  "enable.auto.commit" -> (false: java.lang.Boolean)

	)

	// config for producer
	val  props = new Properties()
        props.put("bootstrap.servers", "kafka:9092")
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer")
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer")
	
	val producer = new KafkaProducer[String, String](props)
   
        val TOPIC="output-tickets"

	//
	val topics = Array("input-tickets")
	val stream = KafkaUtils.createDirectStream[String, String](
	  ssc,
	  PreferConsistent,
	  Subscribe[String, String](topics, kafkaParams)
	)

	

        var nbr_tickets_previous:Long  = 0
	var total_val_previous:Double  = 0.0
	var nbr_espece_previous:Int  = 0
	var nbr_cb_previous:Int  = 0
	var total_espece_previous:Double  = 0.0
	var total_cb_previous:Double  = 0.0

	stream.foreachRDD ( rdd => 
		if (!rdd.isEmpty()) {
				
			// SQL Opérations
        		val sqlContext = SQLContext.getOrCreate(rdd.sparkContext)
			import sqlContext.implicits._
			var topicValueStrings = rdd.map(record => (record.value()).toString)
			var df = sqlContext.read.json(topicValueStrings)
			
			//Calculer le nombre tickets
			val totale_tickets = df.agg("cashReceiptID" -> "count")
			val nbr_tickets = totale_tickets.map{row => row.getLong(0) }.first() + nbr_tickets_previous
			nbr_tickets_previous = nbr_tickets
			
			// s'assurer du totale			
			/*val totale = df.select("documentTotal.grossTotal")
			totale.show()*/
			
			// Calculer Totale tickets
			var totale_sum = df.agg("documentTotal.grossTotal" -> "sum")
			var total_val = totale_sum.map{ row => row.getDouble(0) }.first() + total_val_previous
			total_val_previous = total_val 

			//Specify mode paiment
			df.select("settlements").show()
			val paiments_modes:List[Any] = df.select("settlements").rdd.map( r => r(0) ).collect.toList 
			paiments_modes.foreach 
			{
					
				x => { 
val paiment_modes_string:String =  x.toString().replace("(", "").replace(")", "").replace("WrappedArray","").replace("[","").replace("]","").replace(", "," ") 


/* cas 1 : CB et Especes sont présenté */

if( paiment_modes_string.contains(" ") )
{
	nbr_cb_previous = nbr_cb_previous + 1
	nbr_espece_previous = nbr_espece_previous + 1
	total_espece_previous = total_espece_previous + (((paiment_modes_string.split(" "))(0)).split(",")(1) ).toDouble
	total_cb_previous = total_cb_previous + (((paiment_modes_string.split(" "))(1)).split(",")(1) ).toDouble 	 
        
}
else if ( paiment_modes_string.contains("CB") )
{
	nbr_cb_previous = nbr_cb_previous + 1
	total_cb_previous = total_cb_previous + (paiment_modes_string.split(","))(1).toDouble 
}
else
{
	nbr_espece_previous = nbr_espece_previous + 1
	total_espece_previous = total_espece_previous +  (paiment_modes_string.split(","))(1).toDouble 
}

  }
			}
			
			// afficher nbr tickets
                        println("Nombre Tickets : ",nbr_tickets ,"Totale Tickets: ",total_val ) 
	
			//afficher nbr espece et CB
			println("ESPECES: ",nbr_espece_previous ,"CB: ",nbr_cb_previous )
			println("TOTALE ESPECES: ",total_espece_previous  ,"TOTALE CB: ",total_cb_previous  )
			
			val json =
			    ("data" ->
			      	("nbt_tickets" -> nbr_tickets) ~
			      	("total_tickets" -> total_val ) ~
				("nbr_tickets_cp" -> nbr_cb_previous ) ~
				("nbr_tickets_especes" -> nbr_espece_previous) ~
				("totale_tickets_cp" -> total_cb_previous ) ~
				("totale_tickets_especes" -> total_espece_previous) 
			    )
 			println(pretty(render(json)))
			val record = new ProducerRecord(TOPIC, "key", pretty(render(json))   )
			producer.send(record)
		    }
	  )


	
	


        
	ssc.start()

	// the above code is printing out topic details every 5 seconds
	// until you stop it.
	
	ssc.awaitTermination()

	producer.close

  

  


  }

}
