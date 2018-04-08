import React, { Component } from 'react';
import {BrowRouter as Route, Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="navbar">
      <nav className="sidebar_list">
      <Link to="/blog1" className="blognav">BLOG 1<br/></Link>
      <Link to="/blog2" className="blognav">BLOG 2<br/></Link>
      <Link to="/blog3" className="blognav">BLOG 3<br/></Link>
      </nav>
      </div>
    );
  }
}

export default Navigation;
