import PRODUCT from "../constants/products";
import {actions} from "redux-easy2-crud"


export const addProduct = (aProduct) => (actions.create(PRODUCT, aProduct));
export const readProducts = () => (actions.read(PRODUCT));
export const updateProduct = (product) => (actions.update(product));
export const deleteProduct = (product) => (actions.del(product));
