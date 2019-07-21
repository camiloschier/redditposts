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
      <div className="card" style={{width: '18rem', height: '8rem', marginRight:'1rem', marginBottom:'1rem'}}>
          <div className="card-body" style={{position: 'relative'}}>
            <h5 className="card-title">{this.props.title}</h5>
            <h6 className="text-muted" style={{position: 'absolute', bottom: 0}}>r/{this.props.subreddit}</h6>
          </div>
        </div>

    );
  }
}
export default Tarjeta;
