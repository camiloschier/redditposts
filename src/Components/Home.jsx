import React, { Component } from 'react';
import Tarjeta from './Tarjetas/Tarjeta'
import axios from 'axios';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      posteos: [],
      user: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

 componentDidMount(){
 }

 handleChange(e){

    this.setState({
      [e.target.name]: e.target.value
      });
  }

 getDataFromUser = async(user) => {
   await axios.get('https://api.pushshift.io/reddit/search/submission/?author='+user)
  .then(response => {
    this.setState({posteos: response.data.data})

  })
  .catch(error => {
    console.log(error);
  });
  console.log(this.state.posteos)
}


  render() {
    return(
      <div className="container">
          <h1>Posteos</h1>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">u/</span>
            </div>
            <input type="text" name="user" value={this.state.user} onChange={this.handleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2"><a className="btn btn-primary" onClick={()=>this.getDataFromUser(this.state.user)} >BUSCAR</a></span>
          </div>
        </div>
          <div className="row">
              {this.state.posteos.map( posteo =>(
                <div className="col-sm-4">
                  <Tarjeta
                    title={posteo.title}
                    subreddit={posteo.subreddit}
                  />
                </div>
              ))}
          </div>

      </div>


    );
  }
}
export default Home;
