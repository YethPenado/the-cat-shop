import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons/logo.png';

function Cart() {
  return (
    <div>
      <nav className="main-nav">
        <Link to = '/' className="nav-item">Home</Link>
        <Link to = '/Cart' className="nav-item">Cart</Link>
      </nav>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="The Cat Shop" />
      </header>

      <h2 className="main-title">Your Cart</h2>
    </div>
  );
}

export default Cart;