import React from "react";
import $ from "jquery";

import Landing from "./Landing";
import Statistics from "./Statistics";
import Showcase from "./Showcase";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clients: [],
      services: [],
    };
  }

  componentDidMount(){
    $.get("/P&P/wp-json/wp/v2/services").then((data)=>{
      this.setState({services: data});
    });
    $.get("/P&P/wp-json/wp/v2/clients").then((data)=>{
      this.setState({clients: data});
    });
  }

  render(){
    return(
      <div>
        <Landing servicesData={this.state.services}/>
        <Statistics/>
        <Showcase showcaseData={this.state.clients.slice(0,3)}/>
      </div>
    )
  }
}

export default Home;