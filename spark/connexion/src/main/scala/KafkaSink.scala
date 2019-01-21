package Infra

import org.apache.kafka.clients.producer.{KafkaProducer, ProducerRecord}
import java.util.Map


// https://allegro.tech/2015/08/spark-kafka-integration.html

class KafkaSink(createProducer: () => KafkaProducer[String, String]) extends Serializable {

	lazy val producer = createProducer()

	def send(topic: String, value: String): Unit = producer.send(new ProducerRecord(topic, value))
}

object KafkaSink {
	def apply(config: Map[String, Object]): KafkaSink = {
		val f = () => {
			val producer : KafkaProducer[String, String] = new KafkaProducer[String, String](config)

			sys.addShutdownHook {
				producer.close()
			}

			producer
		}
		new KafkaSink(f)
	}
}
