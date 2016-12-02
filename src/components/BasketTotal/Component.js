import React, {PropTypes} from "react";
import "./Component.css";
import formatCurrency from "../../formatCurrency";

const BasketTotal = ({total}) => (
  <div className="app__basket-total">
    {formatCurrency(total)}
  </div>
);

BasketTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default BasketTotal;
