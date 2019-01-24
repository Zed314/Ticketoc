import React, {Component} from "react";
import AuthHelpers from "./AuthHelpers";
import { NavLink, withRouter, Redirect } from "react-router-dom";

import {
  Site,
  Button,
  RouterContextProvider,
} from "tabler-react";

const navBarItems = [
  { value: "Home", to: "/", icon: "home", LinkComponent: withRouter(NavLink) },
  {
    value: "More",
    icon: "box",
    subItems: [
      {
        value: "Latest receipts",
        to: "/receipts",
        LinkComponent: withRouter(NavLink),
      },
      { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
];


class SiteWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: undefined, tokenInfo: null };
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    this.setState({ loggedIn: token !== null });
    if (token !== null) {
      this.setState({ tokenInfo: AuthHelpers.getInfo(token) });
    }
  }

  render() {
    let redir = null;
    if (this.state.loggedIn === false && !this.props.loggedOut) {
      redir = (<Redirect to='/landing#login_required' />);
    }
    const accountDropdownProps = {
      avatarURL: this.state.tokenInfo ? "https://id.centrallink.de" + this.state.tokenInfo.profile_picture : null,
      name: this.state.tokenInfo ? this.state.tokenInfo.username : "Loading",
      description: "Administrator",
      options: [
        { icon: "log-out", value: "Sign out", to: "/logout" },
      ],
    };


    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Ticketoc",
          imageURL: "/logo.svg",
          accountDropdown: !this.props.loggedOut ? accountDropdownProps : { className: "hidden", name: "Logged out" },
        }}
        navProps={{ itemsObjects: !this.props.loggedOut ? navBarItems : [{ value: "Start", to: "/landing", icon: "log-in", LinkComponent: withRouter(NavLink) }] }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a target="_blank" href="https://insa-lyon.fr/" rel="noopener noreferrer">A INSA Lyon project</a>,
            //<a target="_blank" href="https://www.tu-berlin.de/" rel="noopener noreferrer">TU Berlin</a>            
          ],
          copyright: (
            <React.Fragment><div style={{textAlign: "left"}}>
              By <a href="//www.linkedin.com/in/adrienmoll/" target="_blank" rel="noopener noreferrer">Adrien Moll</a>, Pierrick Chauvet, Faycal Bziou, <a href="//www.linkedin.com/in/ziggy-vergne/">Ziggy Vergne</a>, and&nbsp;
              <a href="//mha.ug" target="_blank" rel="noopener noreferrer">Martin Haug</a>.<br /><small>Based on a theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                codecalm.net
              </a>, {" "}
              project is Apache2 licensed. Ticketoc is not affiliated with the Disney's characters.</small>
            </div></React.Fragment>
          ),
          nav: (
            <React.Fragment>
                <Button
                  href="//github.com/Zed314/Ticketoc"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Go to repository
                </Button>
            </React.Fragment>
          ),
        }}
      >
        {redir}
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
