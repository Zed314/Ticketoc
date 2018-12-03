import React, { Component } from 'react';
import SiteWrapper from "./SiteWrapper";
import LocalSubscriber from "./LocalSubscriber";
import {
  Page,
  Grid,
  StampCard
} from "tabler-react";

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {saleCount: 0}
  }

  componentDidMount() {
    this.socketClient = new LocalSubscriber()
    this.socketClient.subscribe("sale-count", msg => {
      this.setState({
        saleCount: msg.message
      })
    })
  }

  componentWillUnmount() {
    this.socketClient.close()
  }

	render() {
		return (<SiteWrapper>
			<Page.Content title="Dashboard">
			<Grid.Row cards={true}>
			<Grid.Col>
            <StampCard
              color="blue"
              icon="shopping-cart"
              header={
                <a href="#">
                  {this.state.saleCount} <small>Sales</small>
                </a>
              }/>
			</Grid.Col>
			<Grid.Col>
			<StampCard
              color="green"
              icon="dollar-sign"
              header={
                <a href="#">
                  132$ <small>total revenue</small>
                </a>
              }/>
			</Grid.Col>
			<Grid.Col>
            <StampCard
              color="indigo"
              icon="layers"
              header={
                <a href="#">
                  40 <small>cash payments</small>
                </a>
              }/>
			</Grid.Col>
			<Grid.Col>
            <StampCard
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