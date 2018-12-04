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
     count={this.state.saleCount}
     label="Sales" />
     </Grid.Col>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="green"
     icon="dollar-sign"
     count="132$"
     label="total revenue" />
     </Grid.Col>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="indigo"
     icon="layers"
     count="40"
     label="cash payments" />
     </Grid.Col>
     <Grid.Col>
     <NetworkStampCard
     loading={this.state.loading}
     color="teal"
     icon="credit-card"
     count="40"
     label="card payments" />
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