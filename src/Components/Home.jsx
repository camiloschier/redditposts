import React, { Component } from 'react';
import Tarjeta from './Tarjetas/Tarjeta'
import axios from 'axios';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      posteos: [],
    }
  }

 componentDidMount(){
   this.getDataFromUser("kamiyan");
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
