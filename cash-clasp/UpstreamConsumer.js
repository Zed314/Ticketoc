class kafka = require('kafka-node');

class UpstreamConsumer {
	constructor(kafkaClient, notifyFunctions) {
		const Consumer = kafka.Consumer;
		this.consumer = new Consumer(
	        kafkaClient,
	        [
	            { topic: 'input_tickets' },
	        ]
	    );
		this.notifyFunctions = notifyFunctions;

		this.consumer.on('input_tickets', (message) => {
		    console.log(message);
		});
	}

}