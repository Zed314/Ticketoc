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
      this.setState({
        saleCount: msg.message.saleCount,
        totalRevenue: msg.message.totalRevenue,
        cashPaymentCount: msg.message.cashPaymentCount,
        cardPaymentCount: msg.message.cardPaymentCount,
        totalCard: msg.message.totalCard,
        totalCash: msg.message.totalCash,
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
     data={[9, 6, 6, 7, 0, 3, 5, 7, 4, 6]}
     label="trees planted" />
     </Grid.Col>
     <Grid.Col>
     <DiagramCard
     color="#7FDBFF"
     data={[0, 8, 2, 7, 8, 7, 9, 9, 1, 7]}
     label="carts ramsacked" />
     </Grid.Col>
     <Grid.Col>
     <DiagramCard
     color="#0074D9"
     data={[5, 1, 0, 4, 7, 4, 2, 2, 9, 8]}
     label="hammoks slept in" />
     </Grid.Col>
     </Grid.Row>
     <Grid.Row>
     <Card>
     <IntelligientTable
      headings={[{'title': 'A thing', 'property': 'thing'}, {'title': 'Signification', 'property': 'signification'}]}
      items={[{'thing': 'Table', 'signification': 'workplace'},{'thing': 'Seesaw', 'signification': <i>children are here</i> },{'thing': 'Bongo', 'signification': 'Music fills the place'}]} />
     </Card>
     </Grid.Row>
     </Page.Content>
     </SiteWrapper>)
  }
}

export default HomePage
