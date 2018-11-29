import React, { Component } from 'react';
import SiteWrapper from "./SiteWrapper";
import {
  Page,
  Grid,
  StampCard
} from "tabler-react";

class HomePage extends Component {
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
                  132 <small>Sales</small>
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