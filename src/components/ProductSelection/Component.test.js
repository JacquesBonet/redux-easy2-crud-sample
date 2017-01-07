import React from "react";
import {shallow} from "enzyme";
import ProductSelection from "./Component";
import AddProductButton from "./AddProductButton";
import {getProductCodes, getProductName} from "../../config/products";

describe('ProductSelectionComponent', function () {
  describe('render', function () {
    const productsActions = {
      addProduct : jest.fn()
    };
    const productCodes = getProductCodes();
    let component;
    beforeEach(function () {
      component = shallow(<ProductSelection productsActions={productsActions}/>);
    });

    describe('product buttons', function () {
      let productButtons;

      beforeEach(function () {
        productButtons = component.find(AddProductButton);
      });

      it('should have three products', function () {
        expect(productButtons).toHaveLength(productCodes.length);
      });

      productCodes.forEach(function (productCode, idx) {
        let productButton;
        let expectedTitle = getProductName(productCode);
        beforeEach(function () {
          productButton = productButtons.at(idx);
        });

        it(`should have title ${expectedTitle}`, function () {
          expect(productButton.html()).toMatchSnapshot();
        });

        it('should pass the product code to addProduct when clicked', function () {
          productButton.simulate('click');
          expect(productsActions.addProduct).toHaveBeenCalledWith({productCode});
        });
      });
    });
  });
});
