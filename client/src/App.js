import React from 'react';
import './App.css';

import {Route,Switch} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiniMenuWrapper from "./components/MiniMenuWrapper/MiniMenuWrapper";
import Product from "./components/Product/Product"
import Home from './components/Pages/Home';
import Cart from './components/Pages/Cart';

class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/product" exact component={Product} />
          <Route path="/cart" exact component={Cart}/>
        </Switch>
        <Footer/>
        <MiniMenuWrapper/>
      </div>
    );
  }
}

export default App
