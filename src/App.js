import React, { Component } from 'react';
import './App.css';

import Converter from "./components/Converter"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Currency Converter💰💰💰</h1>
        </div>
      
        <div className="line">
          <Converter currencyA="USD" currencyB="BRL"></Converter>
          <Converter currencyA="BRL" currencyB="USD"></Converter>
        </div>
        <div className="line">
          <Converter currencyA="EUR" currencyB="BRL"></Converter>
          <Converter currencyA="BRL" currencyB="EUR"></Converter>
        </div>
        <div className="line">
          <Converter currencyA="BAM" currencyB="BRL"></Converter>
          <Converter currencyA="BRL" currencyB="BAM"></Converter>
        </div>


      </div>
    );

  }

}

export default App;
