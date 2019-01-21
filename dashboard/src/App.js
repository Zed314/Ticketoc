import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Error404,
  Error500,
  Landing,
  ReceiptOverview,
  Auth,
  Logout,
} from "./pages";

import HomePage from "./HomePage";

import "tabler-react/dist/Tabler.css";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/receipts" component={ReceiptOverview} />
            <Route exact path="/500" component={Error500} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
