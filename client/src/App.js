import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Market from "./components/Market/Market";
import Footer from "./components/Footer/Footer";
import MiniMenuWrapper from "./components/MiniMenuWrapper/MiniMenuWrapper";


class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Hero/>
        <Market/>
        <Footer/>
        <MiniMenuWrapper/>
      </div>
    );
  }
}

export default App
