import React from 'react';
import './App.css';

import {Route,Switch} from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Market from "./components/Market/Market";
import Footer from "./components/Footer/Footer";
import MiniMenuWrapper from "./components/MiniMenuWrapper/MiniMenuWrapper";
import Product from "./components/Product/Product"

class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Hero/>
        <Market/>
        <Footer/>
        <MiniMenuWrapper/>
        <Switch>
          <Route path="/product" exact component={Product} />
        </Switch>
      </div>
    );
  }
}

export default App
