import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
      return(
        <div>
           <img src={'./images/BMW.jpg'} className="thumnail"/>
           <img src={'./images/gtr1.jpg'} className="thumnail"/>
           <img src={'./images/gtr2.jpg'} className="thumnail"/>
           <img src={'./images/gtr3.jpg'} className="thumnail"/>
           <img src={'./images/fer.jpg'} className="thumnail"/>
           <img src={'./images/lam.jpg'} className="thumnail"/>
        </div>
      );
    }
  }
  
  export default Profile;