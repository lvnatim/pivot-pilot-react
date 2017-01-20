import React from "react";
import fade from "../../fade";


export default class About extends React.Component{

  componentDidMount(){
    fade();
  }

  render(){
    return(
      <div className="AboutContainer container-fluid">
        <div className="row">
          <div className="col-xs-4"/>
          <div className="col-xs-8">
            <div id="FadeContainer" className="FadeContainer" data-active-image="0">
              <img className="img-responsive" src="https://www.fillmurray.com/800/500"/>
              <img className="img-responsive" src="https://www.fillmurray.com/800/400"/>
              <img className="img-responsive" src="https://www.fillmurray.com/800/450"/>
              <div id="FadeDots" data-active-dot="0">
                <div className="dot" data-position="0"></div>
                <div className="dot" data-position="1"></div>
                <div className="dot" data-position="2"></div>
              </div>
            </div>
            <p>Pivot and Pilot is creative agency based in Vancouver B.C. We are a collective of visual communicators who used a blend of design, animation and illustration to create engaging and unique blending, websites and motion graphics.</p>
          </div>
          <div className="AboutExcerptContainer">
            <h3>We like to call ourselves</h3> 
            <h3>visual communicators</h3>
            <h3>... it sounds fancy</h3>
          </div>
        </div>

        <div className="row Carousel">
          <div className="col-xs-12">
            <div class="TeamMemberContainer">
              <div className="TeamMember primedLeft">
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
                  <p className="TeamMemberDepartment title">Communication Designer</p>
                  <p className="TeamMemberPosition title">Creative Director</p>
                </div>
              </div>

              <div className="TeamMember prev">
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
                  <p className="TeamMemberDepartment title">Communication Designer</p>
                  <p className="TeamMemberPosition title">Creative Director</p>
                </div>
              </div>

              <div className="TeamMember current">
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
                  <p className="TeamMemberDepartment title">Communication Designer</p>
                  <p className="TeamMemberPosition title">Creative Director</p>
                </div>
              </div>

              <div className="TeamMember next">
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
                  <p className="TeamMemberDepartment title">Communication Designer</p>
                  <p className="TeamMemberPosition title">Creative Director</p>
                </div>
              </div>

              <div className="TeamMember primedRight">
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
                  <p className="TeamMemberDepartment title">Communication Designer</p>
                  <p className="TeamMemberPosition title">Creative Director</p>
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
                  <p className="TeamMemberDepartment title">Communication Designer</p>
                  <p className="TeamMemberPosition title">Creative Director</p>
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
                  <p className="TeamMemberDepartment title">Communication Designer</p>
                  <p className="TeamMemberPosition title">Creative Director</p>
                </div>
              </div>

            </div>
            <div className="TeamMemberScrollContainer">
              <img id="MemberPrev" className="TeamScrollIcon" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/member_scroll_left.svg" />
              <img id="MemberProfile" className="TeamScrollIcon" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/member.svg" />
              <img id="MemberNext" className="TeamScrollIcon" src="/P&P/wp-content/themes/pivot&pilot-react/img/member/member_scroll_right.svg" />
            </div>

          </div>
        </div>
      </div>
    )
  }
}