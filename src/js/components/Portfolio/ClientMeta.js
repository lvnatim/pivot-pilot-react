import React from "react";
import AdjacentPosts from "./AdjacentPosts";
import Animation from "./Animation";
import BrandAndIdentity from "./BrandAndIdentity";
import Website from "./Website";
import Print from "./Print";
import Menu from "./Menu";

export default class ClientMeta extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "Client Title",
      excerpt: "Client Excerpt",
      content: "Client Content",
      featuredImage: "",
      galleryMainImage: null,
      galleryImageOne: null,
      galleryImageTwo: null,
      galleryImageThree: null,
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.client){
      this.setState({
        title: nextProps.client.title.rendered,
        excerpt: nextProps.client.excerpt.rendered,
        content: nextProps.client.content.rendered,
        featuredImage: nextProps.client.better_featured_image.source_url,
        galleryMainImage: nextProps.client.gallery_main_image,
        galleryImageOne: nextProps.client.gallery_image_one,
        galleryImageTwo: nextProps.client.gallery_image_two,
        galleryImageThree: nextProps.client.gallery_image_three,
        backgroundColor: nextProps.client.background_color,
        textColor: nextProps.client.text_color,
        quote: nextProps.client.quote,
        quoteAuthor: nextProps.client.quote_author,
      })
    }
  }

  galleryImages(){
    if(this.state.galleryMainImage && this.state.galleryImageOne){
      return(
        <div class="row Gallery">
          <div className="col-xs-12 image">
            <img className="img-responsive" src={this.state.galleryMainImage}/>
          </div>
          <div className="col-xs-4 gallery-image">
            <img className="img-responsive" src={this.state.galleryImageOne}/>
          </div>
          <div className="col-xs-4 gallery-image">
            <img className="img-responsive" src={this.state.galleryImageTwo}/>
          </div>
          <div className="col-xs-4 gallery-image">
            <img className="img-responsive" src={this.state.galleryImageThree}/>
          </div>
        </div>
      )
    } else if(this.state.galleryMainImage) {
      return(
        <div class="row Gallery">
          <div className="col-xs-12 image">
            <img className="img-responsive" src={this.state.galleryMainImage}/>
          </div>
        </div>
      )
    } else if(this.state.featuredImage && this.state.galleryImageOne){
      return(
        <div class="row Gallery">
          <div className="col-xs-12 image">
            <img className="img-responsive" src={this.state.featuredImage}/>
          </div>
          <div className="col-xs-4 gallery-image">
            <img className="img-responsive" src={this.state.galleryImageOne}/>
          </div>
          <div className="col-xs-4 gallery-image">
            <img className="img-responsive" src={this.state.galleryImageTwo}/>
          </div>
          <div className="col-xs-4 gallery-image">
            <img className="img-responsive" src={this.state.galleryImageThree}/>
          </div>
        </div>
      )
    } else {
      return(
        <div class="row Gallery">
          <div className="col-xs-12 image">
            <img className="img-responsive" src={this.state.featuredImage}/>
          </div>
        </div>
      )
    }
  }

  renderQuote(){
    if(this.state.quote_option){
      return(
        <div className="row Quote">
          <div className="col-xs-12">
            <div className="Post">
              <blockquote>
                <p className="quote" dangerouslySetInnerHTML={{__html:this.state.quote}} style={{color: this.state.textColor}}></p>
                <p className="title" style={{color: this.state.textColor}}>{this.state.quoteAuthor}</p>
              </blockquote>
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div className="row EmptyQuote">
        </div>
      )
    }
  }

  render(){
    const style = {background: this.state.backgroundColor, color: this.state.textColor};
    return(
      <div style={style} className="container-fluid ClientMetaContainer">
        <div className="row ClientMeta">
          <div className="col-xs-10 col-sm-8">
            <div className="Post">
              <p className="title">{this.state.title}</p>
              <h3>{this.state.excerpt}</h3>
              <div className="content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </div>
          </div>
          <div className="col-xs-2"><Menu client={this.props.client} /></div>
        </div>
        {this.galleryImages()}
        {this.renderQuote()}
        <BrandAndIdentity client={this.props.client} />
        <Website client={this.props.client} />
        <Animation client={this.props.client} />
        <Print client={this.props.client} />
        <AdjacentPosts client={this.props.client} />
      </div>
    )
  }
}