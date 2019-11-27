import React, { useState, useContext }  from 'react';
import Modal from './Modal';
import Context from '../Context';

function ProductsList() {
  const context = useContext (Context);
  const {ProductsData} = context;
  const [modalWindow, setModal] = useState(false);
  const [productItem, setProductItem] = useState(null);

  function showModal (e){
    setModal(true);
    const item = ProductsData.products.find((item) => item.id === parseFloat(e.target.id));
    setProductItem(item);
    item.inCart = true;
  }

  function closeModal (){
    setModal(false);
  }

  return (
    <>
      <ul className="cards-container">
        {ProductsData.products.map((products) => {
          return (
            <li className="card__item card__item--animation" key= {products.id}>
              <img className="product-img" src={products.image} alt={products.title} />
              <h3 className="product-title">{products.title}</h3>
              <span className="product-price">${products.price}</span>
              <button id={products.id} onClick={showModal} className="product-details">Add to Cart</button>
            </li>
          )
        })}
      </ul>
      {
        modalWindow ? <Modal functionClose={closeModal} propitem={productItem} /> : null
      }
    </>
  );
}

export default ProductsList;