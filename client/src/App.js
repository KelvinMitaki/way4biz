import React from 'react';
import './App.css';

import {Route,Switch} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiniMenuWrapper from "./components/MiniMenuWrapper/MiniMenuWrapper";
import Product from "./components/Product/Product"
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';
import Authenticate from './components/Authenticate/Authenticate';

class App extends React.Component{
  state={
    isSignedIn:false
  }
  render(){
    return (
      <div>{
        !this.state.isSignedIn?
        <Route path="/sign-in" exact component={Authenticate} />
        :

          <Route path="/(.+)" render={()=>(<React.Fragment>
            <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/product" exact component={Product} />
          <Route path="/cart" exact component={Cart}/>
        </Switch>
        <Footer/>
        <MiniMenuWrapper/>
          </React.Fragment>)}/>
        }
      </div>
    );
  }
}

export default App
