import {getProductCodes, getProductName, getProductValue, hasFreeProductDiscount} from "../config/products";
export {getProductCodes, getProductName, getProductValue, hasFreeProductDiscount};

/**
 * return the total products price in the basket
 *
 * @param productsState         {Array}    the redux state
 * @returns {*}
 */
export const getTotal = (productsState) => {
  return productsState.reduce((total, current, idx) => {
    return total + getProductValue( productsState, idx);
  }, 0);
};


/**
 * return the list of products
 *
 * @param rootState     {Object}    the redux state
 * @returns {Array}
 */
export const getProducts = (rootState) => (rootState.products);


/**
 * id generation
 * @returns {String}
 */
export const id = () => {
  return Math.random().toString(36).substring(7)
}
