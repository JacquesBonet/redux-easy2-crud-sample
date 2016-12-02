import React, {PropTypes} from "react";
import BasketItem from './BasketItem';
import "./Component.css";

const BasketList = ({products, deleteProduct}) => (
  <div className="basketlist">
    <br/>
    <ul>
      {
        products.map(( product, idx) => (
          <li key={idx}>
            <BasketItem products={products} idx={idx} removeHandler={deleteProduct.bind(this, product)} />
          </li>
        ))
      }
    </ul>
  </div>
);

BasketList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteProduct: PropTypes.func.isRequired
};

export default BasketList;
