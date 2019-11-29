import React, { useState, useContext }  from 'react';
import Context from '../Context';
import { Link } from 'react-router-dom';
import logo from '../icons/logo.png';
import shoppingCart from '../icons/cart.png';

function Cart() {
  const context = useContext (Context);
  const {ProductsData} = context;
  const [cartProducts, setCartProducts] = useState(ProductsData.products);

  return (
    <div>
      <nav className="main-nav">
        <Link to = '/' className="nav-item">Home</Link>
        <Link to = '/Cart' className="nav-item">
          <img src={shoppingCart} alt="Cart" className="cart__button"></img>
          <span className="cart__price">{cartProducts.filter(product => product.inCart).length}</span>
        </Link>
      </nav>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="The Cat Shop" />
      </header>

      <h2 className="main-title">Your Cart</h2>

      <ul className="cards-container">
        {cartProducts.map((product, i) => {
          return (
            <>
              {product.inCart ? <li className="card__item" key= {product.id}>
                <button onClick= {()=>{
                  product.inCart = false;
                  ProductsData.products = cartProducts;
                  setCartProducts ([...cartProducts]) 
                }} className="close-button">X</button>
                <img className="product-img" src={product.image} alt={product.title} />
                <h3 className="product-title">{product.title}</h3>  
                <span className="product-price">${product.price}</span>  
              </li> : null} 
            </>
          )
        })}
      </ul>

      <section className="payment">
        <h2 className="payment__title">Payment</h2>
        <p className="payment__sum">Total: 
          <span className="payment__total">${cartProducts.filter(product => product.inCart).length ? cartProducts.filter(product => product.inCart).map(product => product.price).reduce((firstProduct, secondProduct)=> firstProduct + secondProduct): 0}</span> 
        </p>
        <button onClick="" className="payment__button">PAY</button>
      </section>
    </div>
  );
}

export default Cart;