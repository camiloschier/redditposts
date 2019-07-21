import React, { Component } from 'react';

class Tarjeta extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

 componentDidMount(){

 }


  render() {
    return(
      <div className="card" style={{width: '23rem', height: '10rem', marginRight:'1rem', marginBottom:'1rem'}}>
          <div className="card-body" style={{position: 'relative'}}>
            <h5 className="card-title" style={{ height:'60%', overflow:'hidden', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient:'vertical'}}>{this.props.title}</h5>
            <h6 className="text-muted" style={{position: 'absolute', bottom: 0}}>r/{this.props.subreddit}</h6>
            <h6 className="text-muted" style={{position: 'absolute', bottom: 0, right:'1rem'}}><a href={this.props.link} target="_blank"><i class="fas fa-link"></i></a></h6>
          </div>
        </div>

    );
  }
}
export default Tarjeta;
