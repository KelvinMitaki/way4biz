import React from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";


class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Hero/>
      </div>
    );
  }
}

export default App
