import products from "./products";
import {actions} from "redux-easy2-crud";
import PRODUCTS from "../constants/products";

describe('reducer', function () {
  describe('initial state', function () {
    var initialState;

    beforeEach(function () {
      initialState = products(undefined, []);
    });

    it('should have an empty products array', function () {
      expect(initialState).toEqual([]);
    });
  });

  describe('ADD_PRODUCT_SUCCESS', function () {
    var state = [];
    const product = {path: PRODUCTS, productCode:'AP1'};

    beforeEach(function () {
    });

    it('adds the product code to the array', function () {
      const action = actions.createSuccess(product);
      state = products(state, action);
      expect(state[0].productCode).toMatchSnapshot();;
    });
  });
});

