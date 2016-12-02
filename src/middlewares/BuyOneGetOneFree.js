import {addProduct, deleteProduct} from "../actions/products";
import {constants} from "redux-easy2-crud";
import PRODUCTS from "../constants/products";
import {hasFreeProductDiscount} from "../config/products";
import {id} from "../services/products"

export default store => next => action => {
  if (!action.id) action.id = id();

  let res = next(action);
  let dispatch = store.dispatch;

  if (!action.type) return res;

  // we verify if the product has free product offer
  if (action.path === PRODUCTS && action.type === constants.CREATE) {
    let freeProducts = hasFreeProductDiscount(action.productCode);

    if (freeProducts)
      freeProducts.map( (productCode, idx) => (dispatch(addProduct({productCode, id: action.id + '_' + idx, price: 0}))));
  }

  // we verify if the product has free product offer, to remove it
  if (action.path === PRODUCTS && action.type === constants.DELETE) {
    let freeProducts = hasFreeProductDiscount(action.productCode);

    if (freeProducts)
      freeProducts.map( (productCode, idx) => (dispatch(deleteProduct({productCode, id: action.id + '_' + idx}))));
  }

  return res;
}
