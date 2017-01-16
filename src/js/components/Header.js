import React from "react";
import { Link } from "react-router";
import $ from "jquery";

class Header extends React.Component{
  render(){
    return(
      <div className="container-fluid primary-menu-container active">
        <div className="row">
          <div className="col-xs-12 primary-menu">
            <h1><Link to="/P&P/">Pivot</Link></h1>
              <ul>
                <li><Link to="/P&P/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <div className="circle">
                  <img className='white' src="http://localhost:8888/P&P/wp-content/themes/pivot%26pilot-react/img/pivot-and-pilot-logo-white.svg"/>
                  <img className='purple' src="http://localhost:8888/P&P/wp-content/themes/pivot%26pilot-react/img/pivot-and-pilot-logo.svg"/>
                </div>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            <h1><Link to="/">Pilot</Link></h1>
          </div>
        </div>
      </div>
    )
  }
} 

export default Header;