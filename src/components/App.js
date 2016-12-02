import React, { Component } from 'react';
import ProductSelection from './ProductSelection';
import BasketItems from './BasketItems';
import BasketTotal from './BasketTotal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h1>redux-easy2-crud</h1>
        </div>
        <p className="app-intro">
          Select Products to add to your basket
        </p>
        <ProductSelection />
        <BasketItems/>
        <BasketTotal />
      </div>
    );
  }
}

export default App;
