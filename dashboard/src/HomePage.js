import React, { Component } from 'react';
import SiteWrapper from "./SiteWrapper";
import LocalSubscriber from "./LocalSubscriber";
import IntelligientTable from "./components/IntelligientTable";
import NetworkStampCard from "./components/NetworkStampCard";
import DiagramCard from "./components/DiagramCard";
import {
  Page,
  Grid,
  Alert,
  Card
} from "tabler-react";

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalRevenue: 0,
      saleCount: 0,
      cashPaymentCount: 0,
      cardPaymentCount: 0,
      totalCard: 0,
      totalCash: 0,
      connectionError: false,
      reconnecting: false,
      restartSeconds: null,
      loading: true,
      unauthorized: false,
      lastTotals: [0],
      lastPurchases: [0],
      lastAmountPerPurchase: [0],
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
    this.socketClient.subscribe("stats-receipts", msg => {
      const newPurchases = this.state.lastPurchases.concat([ msg.message.batchSize ]);
      newPurchases.splice(0, newPurchases.length - 20);
      const newBatchRevenue = this.state.lastTotals.concat([ msg.message.batchRevenue ]);
      newBatchRevenue.splice(0, newBatchRevenue.length - 20);
      const ratio = parseInt(msg.message.batchRevenue, 10) / parseInt(msg.message.batchSize, 10);
      const newBatchRatio = this.state.lastAmountPerPurchase.concat([ isNaN(ratio) ? 0 : ratio ]);
      newBatchRatio.splice(0, newBatchRatio.length - 20);

      this.setState({
        saleCount: msg.message.saleCount,
        totalRevenue: msg.message.totalRevenue,
        cashPaymentCount: msg.message.cashPaymentCount,
        cardPaymentCount: msg.message.cardPaymentCount,
        totalCard: msg.message.totalCard,
        totalCash: msg.message.totalCash,
        lastTotals: newBatchRevenue,
        lastPurchases: newPurchases,
        lastAmountPerPurchase: newBatchRatio,
      })
    })
    /*this.socketClient.subscribe("sale-count", msg => {
      this.setState({
        saleCount: msg.message
      })
    })
    this.socketClient.subscribe("gross_totals", msg => {
      this.setState({
        totalRevenue: msg.message
      })
    })*/
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

  componentWillUnmount() {
    this.socketClient.close()
  }

  nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

  render() {
    const countdownPart = this.state.restartSeconds !== null ? (<strong>Reconnecting in {this.state.restartSeconds}s</strong>) : null
    const alertPart = this.state.connectionError ? <Alert type="danger">Connection to the server failed. {countdownPart}</Alert> : null;
    const reconnectPart = this.state.reconnecting ? <Alert type="info">Reconnecting...</Alert> : null
    const loginAlert = this.state.unauthorized ? (<Alert type="danger" icon="shield-off">Your session has <strong>expired.</strong> <a href="/logout">Log out</a> and sign in again!</Alert>) : null


    return (<SiteWrapper>
     <Page.Content title="Dashboard">
     {alertPart}
     {reconnectPart}
     {loginAlert}
     <Grid.Row cards={true}>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="blue"
     icon="shopping-cart"
     count={this.state.saleCount}
     label="Sales" />
     </Grid.Col>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="indigo"
     icon="layers"
     count={this.state.cashPaymentCount}
     label="cash payments" />
     </Grid.Col>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="teal"
     icon="credit-card"
     count={this.state.cardPaymentCount}
     label="card payments" />
     </Grid.Col>
     </Grid.Row>
     <Grid.Row>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="red"
     icon="dollar-sign"
     count={this.nFormatter(this.state.totalRevenue, 2) + " €"}
     label="total revenue" />
     </Grid.Col>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="green"
     icon="dollar-sign"
     count={this.nFormatter(this.state.totalCash, 2) + " €"}
     label="cash revenue" />
     </Grid.Col>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="blue"
     icon="dollar-sign"
     count={this.nFormatter(this.state.totalCard, 2) + " €"}
     label="card revenue" />
     </Grid.Col>
     </Grid.Row>

     <Grid.Row>
     <Grid.Col>
     <DiagramCard
     color="#39CCCC"
     data={this.state.lastPurchases}
     label="Transactions in last batch" />
     </Grid.Col>
     <Grid.Col>
     <DiagramCard
     color="#7FDBFF"
     financial={true}
     data={this.state.lastTotals}
     label="Total of last batch" />
     </Grid.Col>
     <Grid.Col>
     <DiagramCard
     color="#0074D9"
     financial={true}
     data={this.state.lastAmountPerPurchase}
     label="Average purchase total in last batch" />
     </Grid.Col>
     </Grid.Row>
     </Page.Content>
     </SiteWrapper>)
  }
}

export default HomePage
