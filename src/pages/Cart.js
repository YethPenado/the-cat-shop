import React, { useContext }  from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
import logo from '../icons/logo.png';

function Cart() {
  const context = useContext (Context);
  const {ProductsData} = context;
  const cartProducts = ProductsData.products.filter(product=> product.inCart);

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

      <ul className="cards-container">
        {cartProducts.map((products) => {
          return (
            <li className="card__item" key= {products.id}>
              <img className="product-img--modal" src={products.image} alt={products.title} />
              <h3 className="product-title">{products.title}</h3>  
              <span className="product-price">${products.price}</ span>  
              <p className="product-description left-space"><span className="bold-txt">Description: </span>{products.description}</p>
              <p className="product-category left-space">
                <span className="bold-txt">Category: </span>{products.category}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Cart;