import React from "react";
import popupImage from "../../fontimage.js";

export default class Website extends React.Component {
  constructor(props){
    super(props);
    this.state={
      render: false,
      website_color: null,
      website_text_color: null,
      website_content: "",
      website_icon_one: "",
      website_icon_one_name: "",
      website_icon_two: "",
      website_icon_two_name: "",
      website_icon_three: "",
      website_icon_three_name: "",
      website_icon_four: "",
      website_icon_four_name: "",
      website_icon_five: "",
      website_icon_five_name: "",
      website_icon_six: "",
      website_icon_six_name: "",
      website_main_image: "",
      website_mobile_one: "",
      website_mobile_two: "",
      website_mobile_three: "",
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.client){
      console.log(nextProps.client);
      const client = nextProps.client;
      this.setState({
        render: client.website,
        website_color: client.website_color,
        website_text_color: client.website_text_color,
        website_content: client.website_content,
        website_main_image: client.website_main_image,
        website_icon_one: client.website_icon_one,
        website_icon_one_name: client.website_icon_one_name,
        website_icon_two: client.website_icon_two,
        website_icon_two_name: client.website_icon_two_name,
        website_icon_three: client.website_icon_three,
        website_icon_three_name: client.website_icon_three_name,
        website_icon_four: client.website_icon_four,
        website_icon_four_name: client.website_icon_four_name,
        website_icon_five: client.website_icon_five,
        website_icon_five_name: client.website_icon_five_name,
        website_icon_six: client.website_icon_six,
        website_icon_six_name: client.website_icon_six_name,
        website_mobile_one: client.website_mobile_one,
        website_mobile_two: client.website_mobile_two,
        website_mobile_three: client.website_mobile_three,
      })
    }
  }

  componentDidUpdate(){
    popupImage();
  }

  renderIcon(state, stateTitle){
    if(state){
      return (
        <div className="col-xs-2 WebsiteIcon">
          <img className="img-responsive" src={state} />
          <p>{stateTitle}</p>
        </div>
      )
    }
  }

  render(){
    if(!this.state.render) return <div className="row EmptyWebsiteContainer"/>
    return(
      <div id="Website" className="row WebsiteContainer" style={{color: this.state.website_text_color}}>
        <div className="col-sm-8 col-sm-offset-2 WebsiteFrame">
          <img src="/P&P/wp-content/themes/pivot&pilot-react/img/bars/desktop-top.svg"/>
          <div className="BrowserContainer">
            <img className="img-responsive" src={this.state.website_main_image}/>
          </div>
          <img className="scroll-icon" src="/P&P/wp-content/themes/pivot&pilot-react/img/scroll-icon.svg"/>
        </div>
        <div className="col-xs-2"/>
        <div className="col-xs-12 WebsiteContent" style={{backgroundColor: this.state.website_color}}>
          <p className="title">Website</p>
          <p className="content" dangerouslySetInnerHTML={{__html: this.state.website_content}}></p>
          <div className="row WebsiteIconContainers">
            {this.renderIcon(this.state.website_icon_one, this.state.website_icon_one_name)}
            {this.renderIcon(this.state.website_icon_two, this.state.website_icon_two_name)}
            {this.renderIcon(this.state.website_icon_three, this.state.website_icon_three_name)}
            {this.renderIcon(this.state.website_icon_four, this.state.website_icon_four_name)}
            {this.renderIcon(this.state.website_icon_five, this.state.website_icon_five_name)}
            {this.renderIcon(this.state.website_icon_six, this.state.website_icon_six_name)}
          </div>
          <div className="row MobileContainers">
            <div className="MobileContainer col-xs-12 col-sm-4">
              <img src="/P&P/wp-content/themes/pivot&pilot-react/img/bars/mobile-top.svg"/>
              <img class="MobileImage" src={this.state.website_mobile_one}/>
              <img src="/P&P/wp-content/themes/pivot&pilot-react/img/bars/mobile-bottom.svg"/>
            </div>
            <div className="MobileContainer col-xs-12 col-sm-4">
              <img src="/P&P/wp-content/themes/pivot&pilot-react/img/bars/mobile-top.svg"/>
              <img class="MobileImage" src={this.state.website_mobile_two}/>
              <img src="/P&P/wp-content/themes/pivot&pilot-react/img/bars/mobile-bottom.svg"/>
            </div>
            <div className="MobileContainer col-xs-12 col-sm-4">
              <img src="/P&P/wp-content/themes/pivot&pilot-react/img/bars/mobile-top.svg"/>
              <img class="MobileImage" src={this.state.website_mobile_three}/>
              <img src="/P&P/wp-content/themes/pivot&pilot-react/img/bars/mobile-bottom.svg"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}