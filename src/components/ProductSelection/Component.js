import React from "react";
import {getProductCodes, getProductName} from "../../config/products";
import AddProductButton from "./AddProductButton";
import "./Component.css";

const ProductSelection = ({productsActions}) => (
  <div className="app__product-selection">
    {
      getProductCodes().map((productCode, idx) => (
        <AddProductButton
          key={idx}
          onClick={() => productsActions.addProduct({productCode})}
          title={getProductName(productCode)}
        />
      ))
    }
  </div>
);

export default ProductSelection;
