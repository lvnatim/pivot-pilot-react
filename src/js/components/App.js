import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import $ from "jquery";

class App extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    setTimeout(function(){
      $('.primary-menu-container').removeClass("active");
    }, 2000);
  }

  componentWillUpdate(){
    $('.primary-menu-container').addClass("active");
    $('.primary-menu').removeClass("active");
    setTimeout(function(){
      $('.primary-menu-container').removeClass("active");
    }, 2000);
  }

  render(){
    return(
      <div>
        <Header/>
        {this.props.children || <Home/>}
      </div>
    )
  }
}

export default App;