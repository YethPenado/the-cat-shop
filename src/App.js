import React from 'react';
import logo from './icons/logo.png';
import ProductsList from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="products-container">
      <h2 className="our-products__title">Our Products</h2>
        <ProductsList/>
      </div>
    </div>
  );
}

export default App;
