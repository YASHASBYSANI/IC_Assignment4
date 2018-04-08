import React, { Component } from 'react';

class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  };
  onSubmit = e =>{
    //e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="contact">
      <div className="contactheader">
      <h1>
      Contact Me?
      </h1>
      </div>
      <div className="contactform">
      <form>
      <input
      className="cfname"
      name="firstName"
      placeholder="First name"
      value={this.state.firstName}
      onChange={e => this.setState({firstName: e.target.value})}
      />
      <br />
      <input
      className="clname"
      name="lastName"
      placeholder="Last name"
      value={this.state.lastName}
      onChange={e => this.setState({lastName: e.target.value})}
      />
      <br />
      <input
      name="subect"
      className="csub"
      placeholder="Subject"
      value={this.state.subject}
      onChange={e => this.setState({subject: e.target.value})}
      />
      <br />
      <input
      className="cmessage"
      name="message"
      placeholder="Message"
      value={this.state.message}
      onChange={e => this.setState({message: e.target.value})}
      />
      <br />
      <button className="cbutton" onClick={e => this.onSubmit(e) }>Submit</button>
      </form>
      </div>
      <div className="csocial">
      <p>
      <h3>
      Connect with me :
      </h3>
      <div className="clinks">
      <a href="https://www.facebook.com/yashasbysani" target="_blank" className="cfb"><img src={require('./fb.png')} height='40'/></a>
      <a href="https://www.linkedin.com/in/yashasbm/" target="_blank" className="clink"><img src={require('./link.png')} height='40'/></a>
      <a href="https://twitter.com/yashasbysani" target="_blank" className="cfb"><img src={require('./twitter.png')} height='40'/></a>
      <a href="https://www.instagram.com/yashasbysani/" target="_blank" className="cfb"><img src={require('./insta.png')} height='40'/></a>
      </div>
      </p>

      </div>
      </div>
    );
  }
}

export default Contact;
