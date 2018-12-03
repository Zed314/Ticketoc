import React, { Component } from 'react';
import SiteWrapper from "./SiteWrapper";
import LocalSubscriber from "./LocalSubscriber";
import NetworkStampCard from "./components/NetworkStampCard";
import {
  Page,
  Grid,
  Alert
} from "tabler-react";

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      saleCount: 0,
      connectionError: false,
      reconnecting: false,
      restartSeconds: null,
      loading: true,
    }
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
    this.socketClient.subscribe("sale-count", msg => {
      this.setState({
        saleCount: msg.message
      })
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

componentWillUnmount() {
  this.socketClient.close()
}

render() {
  const countdownPart = this.state.restartSeconds !== null ? (<strong>Reconnecting in {this.state.restartSeconds}s</strong>) : null
  const alertPart = this.state.connectionError ? <Alert type="danger">Connection to the server failed. {countdownPart}</Alert> : null;
  const reconnectPart = this.state.reconnecting ? <Alert type="info">Reconnecting...</Alert> : null

  return (<SiteWrapper>
   <Page.Content title="Dashboard">
   {alertPart}
   {reconnectPart}
   <Grid.Row cards={true}>
   <Grid.Col>
   <NetworkStampCard
   loading={this.state.loading}
   color="blue"
   icon="shopping-cart"
   header={
    <a href="#">
    {this.state.saleCount} <small>Sales</small>
    </a>
  }/>
  </Grid.Col>
  <Grid.Col>
  <NetworkStampCard
  loading={this.state.loading}
  color="green"
  icon="dollar-sign"
  header={
    <a href="#">
    132$ <small>total revenue</small>
    </a>
  }/>
  </Grid.Col>
  <Grid.Col>
  <NetworkStampCard
  loading={this.state.loading}
  color="indigo"
  icon="layers"
  header={
    <a href="#">
    40 <small>cash payments</small>
    </a>
  }/>
  </Grid.Col>
  <Grid.Col>
  <NetworkStampCard
  loading={this.state.loading}
  color="teal"
  icon="credit-card"
  header={
    <a href="#">
    40 <small>card payments</small>
    </a>
  }/>			</Grid.Col>
  </Grid.Row>
  </Page.Content>
  </SiteWrapper>)
}
}

export default HomePage