import React,{Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="aboutparent">
      <div className="aimage">
      <img src={require('./about.jpg')} width='1250' height='500'/>
      <div className="aboutheading">
      <h1>ABOUT ME! </h1>
      </div>
      <div className="aboutinfo">
      <p>
      Earning Bachelors in Computer Science from Sir M. Visvesvaraya Institute of Technology, Bengaluru, India
      was an exhilarating experience. It introduced me to the field of Network Security, which is my concentration
      in my graduate studies from Pace University. I developed and nurtured my passion towards technology and coding
      since the age of 12. I am proficient in various programming languages, such as C, C++, JAVA, PYTHON, HTML, CSS,
      BOOTSTRAP, REACTJS, PHP, JAVASCRIPT,  and keen in expanding my knowledge. I also enjoy developing Android Applications. My
      <a href="https://www.linkedin.com/in/yashasbm/" target="_blank"> Linkedin profile </a>contains more information about my academics and projects.
      </p>
      </div>
      </div>

      </div>
    );
  }
}

export default About;
