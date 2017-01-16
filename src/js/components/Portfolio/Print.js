import React from "react";

export default class Print extends React.Component {
  constructor(props){
    super(props);
    this.state={
      print_content: "",
      print_image_one: "",
      print_image_two: "",
      print_sub_one: "",
      print_sub_two: "",
      print_sub_three: "",
      render: false,
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.client){
      const client = nextProps.client;
      this.setState({
        print_content: client.print_content,
        print_image_one: client.print_image_one,
        print_image_two: client.print_image_two,
        print_sub_one: client.print_sub_one,
        print_sub_two: client.print_sub_two,
        print_sub_three: client.print_sub_three,
        render: client.print,
      })
    }
  }
  renderFullImage(state){
    if(state){
      return <img className="img-responsive" src={state}/>
    } else {
      return <div className="NoPrintImage"></div>
    }
  }
  renderContainedImage(state){
    if(state){
      return <img className="img-responsive" src={state}/>
    } else {
      return <div className="NoPrintImage"></div>
    }
  }
  renderSubImage(state){
    if(state){
      return <img className="img-responsive" src={state}/>
    } else {
      return <div className="NoPrintImage"></div>
    }
  }
  render(){
    if(!this.state.render) return <div className="row EmptyPrintContainer"/>
    return(
      <div id="Print" className="row PrintContainer">
        <div className="col-xs-12">{this.renderFullImage(this.state.print_image_one)}</div>
        <div className="col-xs-12 PrintImageContainer">{this.renderFullImage(this.state.print_sub_one)}</div>
        <div className="col-xs-12">
          <div className="Post">
            <p className="title">Print</p>
            <p className="content">{this.state.print_content}</p>
          </div>
          <div className="col-xs-12 PrintImageContainer">{this.renderContainedImage(this.state.print_image_two)}</div>
          <div className="row PrintImageContainer">
            <div className="col-xs-6 PrintHalfImageContainer">{this.renderSubImage(this.state.print_sub_two)}</div>
            <div className="col-xs-6 PrintHalfImageContainer">{this.renderSubImage(this.state.print_sub_three)}</div>
          </div>
        </div>
      </div>
    )
  }
}