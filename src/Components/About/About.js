import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
      return( 
      <div className="container">
            <div className="row">
          <div className="col-12"></div>
            </div>
         <div className="row">
            <div className="col-3">
              <img src ="gtr2.jpg" className="img-fluid"/>
            </div>
          
            <div className="col-3">
              <img src ="gtr1.jpg" className="img-fluid"/>
            </div>
            <div className="col-3">
              <img src ="gtr3.jpg" className="img-fluid"/>
            </div>



         </div>
         
      </div>
      );
    }
  }
  
  export default About;