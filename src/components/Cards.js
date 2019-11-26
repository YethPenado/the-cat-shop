import React, { useState }  from 'react';
import Modal from './Modal';
import ProductsData from '../products/products.json';

function ProductsList() {
  const [toggle, seToggle] = useState(false);
  const [productItem, setProductItem] = useState(null);

  function showModal (e){
    seToggle(true);
    const item = ProductsData.products.find((item) => item.id === parseFloat(e.target.id));
    console.log(item);
    setProductItem(item);
  }

  function close (){
    seToggle(false);
  }

  return (
    <>
      <ul className="cards-container">
        {ProductsData.products.map((products) => {
          return (
            <li className="card__item">
              <img className="product-img" src={products.image} alt={products.title} />
              <h3 className="product-title">{products.title}</h3>
              <span className="product-price">${products.price}</span>
              <button id={products.id} onClick={showModal} className="product-details">See more details!</button>
            </li>
          )
        })}
      </ul>
      {
        toggle ? <Modal functionClose={close} myprop={productItem} /> : null
      }
    </>
  );
}

export default ProductsList;