

class LocalSubscriber {
	constructor(token, options) {
		this.token = token
		this.connected = false
		this.commandQueue = []
		this.topicCallbacks = {}
		this.connectAction = () => {}
		this.unauthorizedAction = options.unauthorizedAction
		this.socket = new WebSocket(`ws://${options.host ? options.host : "127.0.0.1"}:${options.port ? options.port : 40510}`)

		// event emmited when connected
		this.socket.onopen = () => {
			console.log("Connected")
			this.connected = true
			this.connectAction()
			for (let i = this.commandQueue.length - 1; i >= 0; i--) {
				(this.commandQueue.pop())()
			}
		}

		this.socket.onmessage = message => {
			message = JSON.parse(message.data)
			if (message.type === "topic_message") {
				if (!this.topicCallbacks.hasOwnProperty(message.topic)) {
					console.warn(`Received a message from ${message.topic} which has not been subscribed to.`)
					return
				}

				for (let i = this.topicCallbacks[message.topic].length - 1; i >= 0; i--) {
					this.topicCallbacks[message.topic][i](message)
				}
			} else if (message.type === "action_answer") {
				if (message.result !== 0) {
					if (message.note.indexOf) {
						if (message.note.indexOf('unauthorized') >= 0 && this.unauthorizedAction) {
							this.unauthorizedAction()
						}
					}
					console.warn(message.note ? message.note : "An error occurred while treating the request")
				} else if (message.result === 0) {
					console.log(message.note ? message.note : "Request confirmed")
				}
			}
		}
	}

	subscribe(topic, action) {
		if (!this.connected) {
			this.commandQueue.push(() => {this.subscribe(topic, action)})
			return
		}

		if (!this.topicCallbacks.hasOwnProperty(topic))
			this.topicCallbacks[topic] = []
		
		this.topicCallbacks[topic].push(action)
		this.socket.send(JSON.stringify({ type:"subscribe", topic, token: this.token }))
		console.log(`Sent subscription request for ${topic}`)
	}

	unsubscribe(topic) {
		if (!this.connected) {
			this.commandQueue.push(() => {this.unsubscribe(topic)})
			return
		}

		delete this.topicCallbacks[topic]
		this.socket.send(JSON.stringify({ type:"unsubscribe", topic, token: this.token }))
	}

	close() {
		this.socket.close()
	}
}

export default LocalSubscriber
