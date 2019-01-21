import React, { Component } from 'react';
import SiteWrapper from "../SiteWrapper";
import PromoCard from "../components/PromoCard";
import AuthHelpers from "../AuthHelpers";
import { Redirect } from 'react-router-dom';
import {
  Page,
  Dimmer
} from "tabler-react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
  }

  componentDidMount() {
    this.setState({ done: false });
    window.localStorage.removeItem('token');
    this.setState({ done: true });
  }

  render() {
    let redir = null;
    if (this.state.done) {
      redir = (<Redirect to='/landing#logged_out' />);
    }
    return (<SiteWrapper loggedOut={true} >
      <Page.Content>
        {redir}
        <Dimmer active={true} loader={true} />
      </Page.Content>
     </SiteWrapper>)
  }
}

export default Auth