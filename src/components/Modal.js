import React from 'react';

function Modal(props) {

  return (
    <ul>
      <li>
        <img className="product-img" src={props.myprop.image} alt={props.myprop.title} />
        <h3>{props.myprop.title}</h3>  
        <span>${props.myprop.price}</span>  
        <p>{props.myprop.description}</p>
        <p>Available sizes: {props.myprop.availableSizes}</p>
        <span>Category: {props.myprop.category}</span>    
      </li>
      <button onClick={props.functionClose} >X</button>
    </ul>
  );
}

export default Modal;