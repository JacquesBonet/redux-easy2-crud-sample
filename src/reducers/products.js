import PRODUCTS from "../constants/products";
import {crudReducer}  from 'redux-easy2-crud';

const initialState = [];


export default function products(state = initialState, action) {
  return crudReducer(state, PRODUCTS, action);
}
