import React from "react";

export default class Menu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      client: {},
      clientName: "",
      active: true,
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.client.website_link){
      const parsedURL = nextProps.client.website_link.slice(10);
      this.setState({clientName:parsedURL});
    }
    this.setState({client: nextProps.client})
  }

  changeActive(){
    this.state.active ? this.setState({active: false}) : this.setState({active: true});
  }

  render(){
    return(
      <div className={!this.state.active ? "PortfolioMenu inactive" : "PortfolioMenu"}>
        <div className="PortfolioHeaderContainer">
          <div id="hamburger-menu" onClick={this.changeActive.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="title">Services</p>
        </div>
        <ul> 
          { this.state.client.brand_and_identity ? <li><a href="#BrandAndIdentity">Logo & Identity</a></li> : "" }
          { this.state.client.website ? <li><a href="#Website">Website</a></li> : "" }
          { this.state.client.animation ? <li><a href="#Animation">Animation</a></li> : "" }
          { this.state.client.print ? <li><a href="#Print">Print</a></li> : "" }
        </ul>
        { this.state.client.website_link ? <a href={this.state.client.website_link} type="button" className="btn btn-default">{!this.state.active ? <div><span>w</span><span>w</span><span>w</span><span>{this.state.clientName}</span></div> : "www" + this.state.clientName} </a> : "" }
      </div>
    )
  }
}