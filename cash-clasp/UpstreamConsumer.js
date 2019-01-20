const kafka = require('kafka-node');

class UpstreamConsumer {
	constructor(kafkaClient, notifyFunctions) {
		const Consumer = kafka.Consumer;
		let num = 0;
		let argent = 0;
		this.consumer = new Consumer(
	        kafkaClient,
	        [
	            { topic: 'input_tickets' },
	        ]
	    );
		this.notifyFunctions = notifyFunctions;
		console.log("Consumer created");
		
		this.consumer.on('error', (err) => {console.log(err)})
		this.consumer.on('message', (message) => {
			console.log("Got a message");
			notifyFunctions("special_tickets", message.value);
			num++;
			notifyFunctions("sale-count", num);
			argent += JSON.parse(message.value).documentTotal.grossTotal;
			notifyFunctions("gross_totals", argent);
		});
	}

}

module.exports = UpstreamConsumer;