import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';
import Categories from './Components/Categories/Categories';
import Product from './Components/Product/Product';


class App extends Component {
  render() {
    return(
      <div>
         <Header/>
         <Route exact={true} path='/' component={Home} />
         <Route path='/about' component={About} />
         <Route path='/signup' component={Signup} />
         <Route path='/signin' component={Signin} />
         <Route path='/profile' component={Profile} />
         <Route path='/categories' component={Categories} />
         <Route path='/product' component={Product} />
        
         
         <Footer/>
      </div>
    );
  }
}

export default App;
