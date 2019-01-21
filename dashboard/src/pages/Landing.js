import React, { Component } from 'react';
import SiteWrapper from "../SiteWrapper";
import PromoCard from "../components/PromoCard";
import {
  Page,
  Grid,
  Button,
} from "tabler-react";

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (<SiteWrapper loggedOut={true}>
      <Page.Content className="landing-page">
        <h2>Wire up your business and get smart<small>Ticketoc helps you to see what is really driving your sales</small></h2>
        <div className="cta">
          <Button color="primary" outline className="login">
            <img src="/cid.svg" alt="Identification using central_id" />Sign in or register
          </Button>
        </div>
        <Grid.Row cards={true}>
          <Grid.Col>
            <PromoCard
              title="Business analytics in real time"
              description="Learn about your purchase trends as they happen. Ticketoc instantly highlights the intresting bits"
              imgSrc="/heartbeat.png"
              imgAlt="A heartbeat clipart"
            />
          </Grid.Col>
          <Grid.Col>
            <PromoCard
              title="Pinpoint the dynamics of your sales"
              description="Whether you are a small business or a have a global presence, Ticketoc helps you in gaining a eagles' view over your sales"
              imgSrc="/hero.png"
              imgAlt="The Ticketoc logo in front of some icons"
            />
          </Grid.Col>
          <Grid.Col>
            <PromoCard
              title="Analyze collaboratively and securely"
              description="We know that your sales can give you and your team valuable information - and that's why we do everything to keep that data secure!"
              imgSrc="/security-feature.png"
              imgAlt="central_id"
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
     </SiteWrapper>)
  }
}

export default Landing