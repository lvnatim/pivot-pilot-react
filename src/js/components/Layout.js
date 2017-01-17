import React from "react";
import {Router, Route, browserHistory} from "react-router";

import App from "./App";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";

class Layout extends React.Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/P&P" component={App}>
          <Route path="about" component={About}/>
          <Route path="services" component={Services}/>
          <Route path="services/:serviceId" component={Services}/>
          <Route path="portfolio/:clientId" component={Portfolio}/>
        </Route>
      </Router>
    );
  }
}

export default Layout;