import React from "react";
import Filter from "./Filter";
import $ from "jquery";

export default class Services extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      taxonomies:[],
      terms: [],
      clients: [],
    }
  }

  componentWillMount(){
    $.get('/P&P/wp-json/wp/v2/taxonomies?type=clients').then((data)=>{
      const keys = Object
        .keys(data)
        .filter((taxonomy)=>{
          return data[taxonomy].hierarchical;
      })
      this.setState({taxonomies: keys});
    })
    $.get('/P&P/wp-json/wp/v2/all-terms').then((data)=>{
      this.setState({terms: data});
    })
    $.get("/P&P/wp-json/wp/v2/clients").then((data)=>{
      this.setState({clients: data});
    });
  }

  render(){
    return(
      <Filter defaultSubFilter={this.props.params.serviceId} clients={this.state.clients} terms={this.state.terms} taxonomies={this.state.taxonomies} />
    )
  }
}