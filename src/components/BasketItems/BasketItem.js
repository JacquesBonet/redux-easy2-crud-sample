import React, {PropTypes} from "react";
import {getProductName, getProductValue} from "../../config/products";
import formatCurrency from "../../formatCurrency";
import "./Component.css";

const BasketItem = ({products, idx, removeHandler}) => {
  let product = products[idx];
  return (
    <div className={product.price === 0 ? 'basketitem__free' : 'basketitem'}>
      <span className="basketitem__name">{getProductName(product)}</span>
      <span
        className={product.price === 0 ? 'basketitem__freevalue' : 'basketitem__value'}>
         {formatCurrency(getProductValue(products, idx))}
       </span>
      {product.price !== 0 ? <button className="basketitem__button" onClick={removeHandler}>x</button> : ''}
    </div>
  );
};

BasketItem.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  idx: PropTypes.number.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default BasketItem;
