import React from "react";

export default class Animation extends React.Component{
  constructor(props){
    super(props);
    this.state={
      render: false,
      content: "",
      gif_one: "",
      gif_two: "",
      gif_three: "",
      gif_four: "",
      gif_five: "",
      gif_six: "",
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.client){
      const client = nextProps.client;
      this.setState({
        render: client.animation,
        content: client.animation_content,
        gif_one: client.gif_one,
        gif_two: client.gif_two,
        gif_three: client.gif_three,
        gif_four: client.gif_four,
        gif_five: client.gif_five,
        gif_six: client.gif_six,
      });
    }
  }
  render(){
    if(this.state.render){
      return(
        <div className="row AnimationContainer">
          <div className="col-xs-6 col-sm-4"><img className="img-responsive" src={this.state.gif_one}/></div>
          <div className="col-xs-6 col-sm-4"><img className="img-responsive" src={this.state.gif_two}/></div>
          <div className="col-xs-6 col-sm-4"><img className="img-responsive" src={this.state.gif_three}/></div>
          <div className="col-xs-6 col-sm-4"><img className="img-responsive" src={this.state.gif_four}/></div>
          <div className="col-xs-6 col-sm-4"><img className="img-responsive" src={this.state.gif_five}/></div>
          <div className="col-xs-6 col-sm-4"><img className="img-responsive" src={this.state.gif_six}/></div>
          <div className="col-xs-12">
            <div className="Post">
              <p className="title">Animation</p>
              <p className="content">{this.state.content}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return(<div className="row EmptyAnimationContainer"></div>)
    }
  }
}