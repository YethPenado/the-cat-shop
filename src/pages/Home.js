import React from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../products/products.json';
import logo from '../icons/logo.png';
import ProductsList from '../components/Cards';

function Home() {
  return (
    <div>
      <nav className="main-nav">
        <Link to = '/' className="nav-item">Home</Link>
        <Link to = '/Cart' className="nav-item">Cart</Link>
      </nav>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="The Cat Shop" />
        </header>

        <div className="products-container">
          <h2 className="main-title">Our Products</h2>
          <ProductsList data = {ProductsData} />
        </div>
    </div>
  );
}

export default Home;