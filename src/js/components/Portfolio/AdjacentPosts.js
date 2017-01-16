import React from 'react';

export default class AdjacentPosts extends React.Component {
  constructor(props){
    super(props);
    this.state={
      next_background_color: "",
      next_image: "",
      next_id: "",
      next_text_color: "",
      next_title:"",
      prev_background_color: "",
      prev_image: "",
      prev_id: "",
      prev_text_color: "",
      prev_title:"",
    }
  }
  componentWillReceiveProps(nextProps){
    const client = nextProps.client;
    this.setState({
      next_background_color: client.next_background_color,
      next_id: client.next_id,
      next_image: client.next_image,
      next_text_color: client.next_text_color,
      next_title: client.next_title,
      prev_background_color: client.prev_background_color,
      prev_image: client.prev_image,
      prev_id: client.prev_id,
      prev_text_color: client.prev_text_color,
      prev_title: client.prev_title,
    })
  }

  render(){
    return(
      <div className="row row-eq-height AdjacentPostsContainer">
        <div className="col-xs-6" style={{ background: 'url('+ this.state.prev_image + ')'}}>
          <a href={"./" + this.state.prev_id} style={{ color: this.state.prev_text_color }}>
            <div className="overlay" style={{backgroundColor: this.state.prev_background_color}}>
              <p className="title">Previous Project</p>
              <h3>{this.state.prev_title}</h3>
            </div>
          </a>
        </div>
        <div className="col-xs-6" style={{ background: 'url('+ this.state.next_image + ')'}}>
          <a href={"./" + this.state.next_id} style={{ color: this.state.next_text_color }}>
            <div className="overlay" style={{backgroundColor: this.state.next_background_color}}>
              <p className="title">Next Project</p>
              <h3>{this.state.next_title}</h3>
            </div>
          </a>
        </div>
      </div>
    )
  }
}