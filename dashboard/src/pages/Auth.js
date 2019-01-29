import React, { Component } from 'react';
import SiteWrapper from "../SiteWrapper";
import AuthHelpers from "../AuthHelpers";
import { Redirect } from 'react-router-dom';
import {
  Page,
  Dimmer
} from "tabler-react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { processing: 0 };
  }

  componentDidMount() {
    this.setState({ processing: 0 });
    const w = window;
    const token = AuthHelpers.getToken(w);
    console.log(token);
    if (token === null) {
      this.setState({ processing: -1 });
      console.log("denying")
    } else {
      w.localStorage.setItem('token', token);
      this.setState({ processing: 1 });
      console.log("allowing")
    }
  }

  render() {
    let redir = null;
    if (this.state.processing < 0) {
      redir = (<Redirect to='/landing#failed_login' />);
    } else if (this.state.processing > 0) {
      redir = (<Redirect to='/' />);
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