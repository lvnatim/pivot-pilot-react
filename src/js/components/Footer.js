import React from "react";

export default class Footer extends React.Component{
  render(){
    return(
      <div className="container-fluid Footer">
        <div className="consultation-button">
          <p>Book a free consulation</p>
        </div>
        <div className="copyright">
          <p>2016 &copy; Pivot & Pilot Inc.</p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h3>604.458.2345</h3>
            <h3>hello@pivotandpilot.com</h3>
            <div className="icon-box">
              <div className="icon"><span className="wp-svg-facebook facebook"/></div>
              <div className="icon"><span className="wp-svg-instagram instagram"></span></div>
              <div className="icon"><span className="wp-svg-twitter twitter"></span></div>
              <div className="icon"><i className="wp-svg-linkedin linkedin"></i></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}