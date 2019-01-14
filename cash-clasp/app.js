const WebSocketServer = require('ws').Server,
subscriberMod = require('semaphore')(1),
readline = require('readline'),
fake_news = require('./fake_news'),
UpstreamConsumer = require('./UpstreamConsumer'),
kafka = require('kafka-node');

const client = new kafka.KafkaClient({kafkaHost: 'kafka:9092'});

const Subscriber = require('./Subscriber')

const server = new WebSocketServer({port: 40510}),
subscribers = []

server.on('connection', socket => {
	subscriber = new Subscriber(socket)
	subscribers.push(subscriber)

	socket.on('close', () => {
		subscriber.close()
		subscriberMod.take(() => {
			const subIndex = subscribers.indexOf(subscriber)
			if (subIndex < 0)
				throw "Closed connection not found in subscribers"
			subscribers.splice(subIndex, 1);
			subscriberMod.leave();
		})
		console.log("Added subscriber")
	})
})

function notifySubscribers(topic, message) {
	for (sub of subscribers) {
		sub.sendTopicMessage(topic, message)
	}
}

const upstreamConsumer = new UpstreamConsumer(client, notifySubscribers);

// Debug repl
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function repl() {
	console.log("Please enter topic to publish to: ")
	rl.question('> ', answer => {
		message = fake_news.getHeadline()
		notifySubscribers(answer, message)
		repl();
	});
}

repl()