import React, { Component } from 'react';
import SiteWrapper from "../SiteWrapper";
import ReceiptTimeline from "../components/ReceiptTimeline";
import FinancialHelpers from "../FinancialHelpers";
import LocalSubscriber from "../LocalSubscriber";
import {
  Page,
  Icon,
  Alert
} from "tabler-react";

class ReceiptOverview extends Component {
  constructor(props) {
    super(props)
    this.savedReceipts = [];
    this.state = { receipts: [], paused: false, unauthorized: false }
    this.toggleActivation = this.toggleActivation.bind(this);
  }

  toggleActivation(e) {
    e.preventDefault();
    if (this.state.paused) {
      this.setState(state => ({
        paused: false,
        receipts: this.savedReceipts,
      }));
    } else {
      this.setState(state => ({
        paused: true,
      }));
    }
  }


  componentDidMount() {
    this.startSockClient(window.localStorage.getItem('token'))
  }

  startSockClient(token) {
    this.setState({
      loading: true,
    })
    this.socketClient = new LocalSubscriber(token, {unauthorizedAction: () => {
      this.setState({
        unauthorized: true,
      })
    }})
    this.socketClient.connectAction = () => {
      this.setState({
        connectionError: false,
        restartSeconds: null,
        reconnecting: false,
        loading: false,
      })
    }
    this.socketClient.subscribe("sample-receipts", msg => {
      const storeId = parseInt(msg.message.storeID)
      msg.message.storeName = !isNaN(storeId) && storeId !== 61 ? FinancialHelpers.getStoreForId(storeId % (FinancialHelpers.getMaxStoreId() + 1)) : FinancialHelpers.getRandomStore()
      const newArray = this.savedReceipts.concat([ msg.message ]);
      newArray.splice(0, newArray.length - 20);

      this.savedReceipts = newArray;
      if (!this.state.paused) {
        this.setState({
          receipts: this.savedReceipts
        });
      }
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
    const alert = this.state.unauthorized ? (<Alert type="danger" icon="shield-off">Your session has <strong>expired.</strong> <a href="/logout">Log out</a> and sign in again!</Alert>) : null

    return (<SiteWrapper>
     <Page.Content title={<span>Live receipt tracking <Icon link={true} className="heading-playpause" name={this.state.paused ? "play-circle" : "pause-circle"} onClick={this.toggleActivation} /></span>}>
     {alert}
     <ReceiptTimeline receipts={this.state.receipts} />
     </Page.Content>
     </SiteWrapper>)
  }
}

export default ReceiptOverview
