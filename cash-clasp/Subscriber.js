class Subscriber {
	constructor(socket) {
		this.socket = socket
		this.subscribed = []

		socket.on('message', message => {
			message = JSON.parse(message)

			if (message.type = "subscribe") {
				this.subscribe(message.topic)
			} else if (message.type = "unsubscribe") {
				this.unsubscribe(message.topic)
			}
		})
	}

	subscribe(topic) {
		if (this.subscribed.includes(topic)) {
			this.socket.send(JSON.stringify({
				type: "action_answer",
				result: 2,
				note: "Topic " + topic + " already subscribed"
			}))
			return
		}

		this.subscribed.push(topic)

		this.socket.send(JSON.stringify({
			type: "action_answer",
			result: 0,
			note: "Subscribed to " + topic
		}))
	}

	unsubscribe(topic, silent=false) {
		const topicIndex = this.subscribed.indexOf(topic)

		if (topicIndex < 0) {
			this.socket.send(JSON.stringify({
				type: "action_answer",
				result: 2,
				note: "Was not subscribed to topic " + topic
			}))
			return
		}

		this.subscribed.splice(topicIndex, 1);

		if (!silent) {
			this.socket.send(JSON.stringify({
				type: "action_answer",
				result: 0,
				note: "Unsubscribed from " + topic
			}))
		}
	}

	subscribedTo(topic) {
		return this.subscribed.includes(topic)
	}

	sendTopicMessage(topic, message) {
		if (!this.subscribed.includes(topic))
			return

		this.socket.send(JSON.stringify({
			type: "topic_message",
			message
		}))
	}

	close() {
		for (topic of this.subscribed) {
			this.unsubscribe(topic, true)
		}
	}
}

module.exports = Subscriber