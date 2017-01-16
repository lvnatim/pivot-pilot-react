import React from "react";
import scroll from "../scroll";

class Term extends React.Component{
  render(){
    const name = {__html: this.props.name};
    return(
      <span dangerouslySetInnerHTML={name}></span>
    )
  }
}

class ShowcasePiece extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      terms: [],
      timesMounted: 0,
    }
  }

  componentWillMount(){
    const newTerms = [];
    this.props.services.forEach((term, index)=>{
      const name = term.name;
      newTerms.push(<Term key={index} name={name} />);
    });
    this.setState({terms: newTerms});
  }

  render(){
    return(
      <div id={"PortfolioPiece" + this.props.id} className={"PortfolioPiece " + (this.props.id === 1 ? "active" : "")} style={{backgroundImage: 'url(' + this.props.imageUrl + ')'}}>
        <div className="PortfolioInner">
          <h3><span>{this.props.excerpt}</span></h3>
          <p>{this.state.terms}</p>
          <div className="PortfolioGoTo">
            <a className="PortfolioGoToLink" href={"portfolio/" + this.props.portfolioId}>
              <img class="arrow"  src="/P&P/wp-content/themes/pivot&pilot-react/img/gotoarrow.svg"/>
              <img src="/P&P/wp-content/themes/pivot&pilot-react/img/gotoeyelid.svg"/>
              <img class="iris" src="/P&P/wp-content/themes/pivot&pilot-react/img/gotoiris.svg"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default class Showcase extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showcasePieces: []
    }
  }

  componentDidUpdate(prevProps, prevState){
    scroll();
  }

  componentWillUnmount(){
    this.setState({showcasePieces: []});
  }

  componentWillReceiveProps(nextProps){
    const newShowcasePieces = [];
    nextProps.showcaseData.forEach((showcaseData, index)=>{
      const title = showcaseData.title.rendered;
      const excerpt = showcaseData.excerpt.rendered;
      const services = showcaseData.services_array;
      const imageUrl = showcaseData.better_featured_image.source_url;
      const portfolioId = showcaseData.id;
      newShowcasePieces.push(<ShowcasePiece id={index + 1} key={index} portfolioId={portfolioId} title={title} excerpt={excerpt} imageUrl={imageUrl} services={services}/>);
    });
    this.setState({showcasePieces: newShowcasePieces});
  }

  render(){
    return(
      <div className="container-fluid PortfolioSection">
        <div className="row">
          <div id="PortfolioContainer" className="col-xs-12 PortfolioContainer">
            {this.state.showcasePieces}
          </div>
          <div className="PortfolioGeneralLabel">
            <p className="title">Featured Case Studies</p>
          </div>
          <div className="dots-container">
            <div id="drop" className="dot drop" data-position="0"></div>
            <div className="dot one" data-slide="0"></div>
            <div className="dot two" data-slide="1"></div>
            <div className="dot three" data-slide="2"></div>
          </div>
        </div>
      </div>
    )
  }
}