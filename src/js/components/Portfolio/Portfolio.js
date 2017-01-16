import React from "react";
import ClientMeta from "./ClientMeta";
import $ from "jquery";

export default class Portfolio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      client: null,
    }
  }

  componentDidMount(){
    $.get("/P&P/wp-json/wp/v2/clients/" + this.props.params.clientId).then((data)=>{
      this.setState({client: data})
    })
  }

  render(){
    return(
      <div>
        <ClientMeta client={this.state.client}/>
      </div>
    )
  }
}