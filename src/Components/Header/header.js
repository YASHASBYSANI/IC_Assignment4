import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="headelements">
      <Link to="/" className="homelink">HOME</Link>
      <Link to="/blog" className="bloglink">BLOG</Link>
      <Link to="/about" className="aboutlink">ABOUT</Link>
      <Link to="/contact" className="contactlink">CONTACT</Link>

      </div>

      </header>
    );
  }
}

export default Header;
