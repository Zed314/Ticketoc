import React, { Component } from 'react';
import SiteWrapper from "../SiteWrapper";
import ReceiptTimeline from "../components/ReceiptTimeline";
import LocalSubscriber from "../LocalSubscriber";
import {
  Page,
} from "tabler-react";

class ReceiptOverview extends Component {
  constructor(props) {
    super(props)
    this.state = { receipts: [] }
  }

  componentDidMount() {
    this.startSockClient()
  }

  startSockClient() {
    this.setState({
      loading: true,
    })
    this.socketClient = new LocalSubscriber()
    this.socketClient.connectAction = () => {
      this.setState({
        connectionError: false,
        restartSeconds: null,
        reconnecting: false,
        loading: false,
      })
    }
    this.socketClient.subscribe("special_tickets", msg => {
      const newArray = this.state.receipts.concat([ JSON.parse(msg.message) ]);
      newArray.splice(0, newArray.length - 20);
      this.setState({
        receipts: newArray
      });
    })
    this.socketClient.socket.onerror = () => {
      this.setState({
        connectionError: true,
        loading: false,
        reconnecting: false,
        restartSeconds: 10,
      })
      const countdown = () => {
        if (this.state.restartSeconds <= 0) {
          this.setState({
            connectionError: false,
            reconnecting: true
          })
          this.startSockClient()
        } else {
          this.setState({
            restartSeconds: this.state.restartSeconds - 1
          })
          setTimeout(countdown, 1000);
        }
      }
      countdown()
    }
  }

  render() {
    return (<SiteWrapper>
     <Page.Content title="Live receipt tracking">
     <ReceiptTimeline receipts={this.state.receipts} />
     </Page.Content>
     </SiteWrapper>)
  }
}

export default ReceiptOverview