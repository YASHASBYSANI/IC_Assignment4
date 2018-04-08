import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="homeparent">
      <div className="image">
      <img src={require('./image.jpg')} width='1200' height='620'/>
      <div className="homeheading">
      <h1>WELCOME TO MY BLOG! </h1>
      </div>
      <div className="homeinfo">
      <p> By <span className="name">YASHAS BYSANI MURALIDHAR</span> <br/>
      It is a long established fact that a reader will be distracted by the <br/>
      readable content of the page when looking at its layout!</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
