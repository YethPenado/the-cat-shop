import React from 'react';
import ProductsData from '../products/products.json';
const data = ProductsData.products;

function ProductsList() {
  return (
    <ul className="cards-container">
      {data.map((products)=>{
      return <li className="card__item">
        <img className="product-img" src={products.image} alt={products.title} /> 
        <h3 className="product-title">{products.title}</h3>
        <p className="product-price">${products.price}</p>
        <button onClick="" className="product-details">See more details!</button>
      </li>
      })}
    </ul>
  );
}

export default ProductsList;