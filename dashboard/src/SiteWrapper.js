import React, {Component} from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Button,
  RouterContextProvider,
} from "tabler-react";

const navBarItems = [
  { value: "Home", to: "/", icon: "home", LinkComponent: withRouter(NavLink) },
  {
    value: "A navigation item",
    icon: "box",
    subItems: [
      {
        value: "Cards Design",
        to: "/cards",
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

const accountDropdownProps = {
  avatarURL: "./logo.svg",
  name: "Reactive Person",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "log-out", value: "Sign out" },
  ],
};

class SiteWrapper extends Component {
  state = {
    unreadCount: 2,
  };

  render() {
    const unreadCount = this.state.unreadCount || 0;
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Ticketock",
          imageURL: "logo.svg",
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a target="_blank" href="https://insa-lyon.fr/">A INSA Lyon project</a>,
          ],
          copyright: (
            <React.Fragment>
              By <a href="//www.linkedin.com/in/adrienmoll/">Adrien Moll</a>, Pierrick Chauvet, Faycal Bziou, <a href="//www.linkedin.com/in/ziggy-vergne/">Ziggy Vergne</a>, and&nbsp;
              <a href="//mha.ug" target="_blank">Martin Haug</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                codecalm.net
              </a>, {" "}
              project is Apache2 licensed
            </React.Fragment>
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
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
