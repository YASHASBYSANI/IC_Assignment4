import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


//Components
import Header from './Components/Header/header.js';
import Footer from './Components/Footer/footer.js';
import Home from './Components/Pages/home.js'
import Navigation from './Components/Pages/navigation.js';
import Blog from './Components/Pages/blog.js';
import Contact from './Components/Pages/contact.js';
import About from './Components/Pages/about.js';
import Blog1 from './Components/Pages/blog1.js';
import Blog2 from './Components/Pages/blog2.js';
import Blog3 from './Components/Pages/blog3.js';

//Style.css
import './Assets/css/style.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div className="header">
      <Header/>
      <div className="main">
      <Route exact path='/' component={Home}/>
      <Route exact path='/Blog' component={Blog}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/Blog1' component={Blog1}/>
      <Route exact path='/Blog2' component={Blog2}/>
      <Route exact path='/Blog3' component={Blog3}/>
      </div>
      <Navigation/>
      </div>
      <Footer/>

      </div>
      </Router>
    );
  }
}

export default App;
