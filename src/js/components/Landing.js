import React from "react";
import {Link} from "react-router";
import $ from "jquery";

class ChangeLanding extends React.Component{
  render(){
    return(
      <div onClick={this.props.onClick} className="col-xs-12 landing-change">
        <h1>How Exactly?</h1>
      </div>
    )
  }
}

class DefaultLanding extends React.Component{
  moveGradient(e){
    $('#gradient').css({top: e.clientY, left:e.clientX});
  }
  render(){
    return(
      <div onMouseMove={this.moveGradient} className="row landing">
        <div id="gradient"></div>
        <div className="col-xs-12 tagline">
          <h1>We use strategic design to help our clients grow.</h1>
        </div>
        <ChangeLanding onClick={this.props.onClick}/>
      </div>
    )
  }
}

class Term extends React.Component{
  render(){
    const name = {__html: this.props.name};
    return(
      <li className="landing-term" onMouseEnter={this.props.onMouseEnter}>
        <Link to={"/P&P/services/" + this.props.termId}><span dangerouslySetInnerHTML={name}></span></Link>
      </li>
    )
  }
}

class TermList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      terms: [],
    }
  }
  componentWillMount(){
    const newTerms = [];
    this.props.servicesData.forEach((term, index)=>{
      const name = term.name;
      const mouseEnter = this.props.onMouseEnter.bind(null, index);
      newTerms.push(<Term key={index} name={name} termId={term.id} onMouseEnter={mouseEnter} />);
    });
    this.setState({terms: newTerms});
  }
  render(){
    return(
      <ul>
        {this.state.terms}
      </ul>
    )
  }
}


class AlternateLanding extends React.Component{
  constructor(){
    super();
    this.state = {
      curTermValue: 0,
    };
  }

  changeDescription(index){
    this.setState({curTermValue: index});
  }

  getDescription(){
    return(
      <div className="col-xs-5 landing-term-description">
        <p key={this.state.curTermValue} >{this.props.servicesData[this.state.curTermValue].description}</p>
      </div>
    )
  }

  render(){
    return(
      <div className="row landing-alternate">
        {this.getDescription()}
        <div className="col-xs-6 col-xs-offset-1 landing-terms">
          <TermList servicesData={this.props.servicesData} onMouseEnter={this.changeDescription.bind(this)}/>
        </div>
        <ChangeLanding onClick={this.props.onClick}/>
      </div>
    )
  }
}

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      defaultView: <DefaultLanding onClick={this.changeView.bind(this)}/>,
      alternateView: <AlternateLanding servicesData={this.props.servicesData} onClick={this.changeView.bind(this)}/>,
      viewIndex: 0,
    }
  }
  componentWillReceiveProps(nextProps){
    const servicesData = nextProps.servicesData;
    const newAlternateLanding = <AlternateLanding servicesData={servicesData} onClick={this.changeView.bind(this)}/>;
    this.setState({
      alternateView: newAlternateLanding,
    });
  }
  currentView(){
    return this.state.viewIndex === 0 ? this.state.defaultView : this.state.alternateView;
  }
  changeView(){
    $('.primary-menu').toggleClass('active');
    this.state.viewIndex === 0 ? this.setState({viewIndex: 1}) : this.setState({viewIndex: 0});
  }
  render(){
    return(
      <div className="container-fluid landing-container">
        {this.currentView()}
      </div>
    )
  }
}

export default Landing;