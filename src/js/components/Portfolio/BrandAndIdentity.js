import React from "react";

export default class BrandAndIdentity extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: "#FFFFFF",
      brand_content: "Brand Content",
      font_one_image: "",
      font_one_name: "",
      font_one_description: "",
      font_two_image:"",
      font_two_name: "",
      font_two_description: "",
      render: false,
      textColor: "",
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.client.brand_and_identity){
      const client = nextProps.client;
      this.setState({
        backgroundColor: client.background_color,
        borderColor: client.text_color,
        brand_content: client.brand_content,
        font_one_description: client.font_one_description,
        font_one_image: client.font_one_image,
        font_one_name: client.font_one_name,
        font_two_image: client.font_two_image,
        font_two_description: client.font_two_description,
        font_two_name: client.font_two_name,
        render: client.brand_and_identity,
        textColor: client.text_color,
      })
    }
  }

  renderFontSection(fontImage, fontName, fontDescription){
    if(fontImage){
      return(
        <div className="col-xs-12 col-sm-6 font-image">
          <img className="img-reponsive" src={fontImage}/>
          <p 
            className="title" 
            style={{backgroundColor: this.state.backgroundColor, borderColor: this.state.textColor }} 
          >
          {fontName}
          </p>
          <p className="LogoText" style={{backgroundColor: this.state.backgroundColor }}>{fontDescription}</p>
        </div>
      )
    }
  }

  render(){
    if(!this.state.render) return <div className="row EmptyBrandAndIdentityContainer"/>
    return(
      <div id="BrandAndIdentity" className="row BrandAndIdentityContainer">
        <div className="col-xs-12">
          <p className="title">Brand & Identity</p>
          <p className="content BrandContent">{this.state.brand_content}</p>
        </div>
        {this.renderFontSection(this.state.font_one_image, this.state.font_one_name, this.state.font_one_description)}
        {this.renderFontSection(this.state.font_two_image, this.state.font_two_name, this.state.font_two_description)}
      </div>
    )
  }
}