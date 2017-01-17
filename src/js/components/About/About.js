import React from "react";



export default class About extends React.Component{
  render(){
    return(
      <div className="AboutContainer container-fluid">
        <div className="row">
          <h3>We like to call ourselves visual communicators ... it sounds fancy</h3>
          <div className="col-xs-4"/>
          <div className="col-xs-8">
            <img className="img-responsive" src="https://www.fillmurray.com/800/500"/>
            <p>Pivot and Pilot is creative agency based in Vancouver B.C. We are a collective of visual communicators who used a blend of design, animation and illustration to create engaging and unique blending, websites and motion graphics.</p>
          </div>
        </div>

        <div className="row Carousel">
          <div className="col-xs-12">

            <div className="TeamMember">
              <div className="TeamMemberPictureContainer">
                <img className="TeamFact" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/fun-fact.svg" />
                <img className="TeamMemberLogo" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/microphone-01.svg" />
                <div className="TeamMemberText" style={{backgroundImage: "url(" + "https://www.fillmurray.com/500/500" + ")"}} >
                  <h4>Alejandro loves karaoke</h4>
                  <div className="overlay"/>
                </div>
              </div>
              <div className="TeamMemberInfoContainer">
                <h3 className="TeamMemberName">Alejandro Quinteros</h3>
                <p className="TeamMemberDepartment">Communication Designer</p>
                <p className="TeamMemberPosition">Creative Director</p>
              </div>
            </div>

            <div className="TeamMember">
              <div className="TeamMemberPictureContainer">
                <img className="TeamFact" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/fun-fact.svg" />
                <img className="TeamMemberLogo" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/microphone-01.svg" />
                <div className="TeamMemberText" style={{backgroundImage: "url(" + "https://www.fillmurray.com/500/500" + ")"}} >
                  <h4>Alejandro loves karaoke</h4>
                  <div className="overlay"/>
                </div>
              </div>
              <div className="TeamMemberInfoContainer">
                <h3 className="TeamMemberName">Alejandro Quinteros</h3>
                <p className="TeamMemberDepartment">Communication Designer</p>
                <p className="TeamMemberPosition">Creative Director</p>
              </div>
            </div>

            <div className="TeamMember">
              <div className="TeamMemberPictureContainer">
                <img className="TeamFact" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/fun-fact.svg" />
                <img className="TeamMemberLogo" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/microphone-01.svg" />
                <div className="TeamMemberText" style={{backgroundImage: "url(" + "https://www.fillmurray.com/500/500" + ")"}} >
                  <h4>Alejandro loves karaoke</h4>
                  <div className="overlay"/>
                </div>
              </div>
              <div className="TeamMemberInfoContainer">
                <h3 className="TeamMemberName">Alejandro Quinteros</h3>
                <p className="TeamMemberDepartment">Communication Designer</p>
                <p className="TeamMemberPosition">Creative Director</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}