import React from "react";
import {shallow} from "enzyme";
import ProductSelection from "./Component";
import AddProductButton from "./AddProductButton";
import sinon from "sinon";
import {expect} from "chai";
import {getProductCodes, getProductName} from "../../config/products";

describe('ProductSelectionComponent', function () {
  describe('render', function () {
    const productsActions = {
      addProduct : sinon.spy()
    };
    const productCodes = getProductCodes();
    let component;
    beforeEach(function () {
      component = shallow(<ProductSelection productsActions={productsActions}/>);
    });
    afterEach(function () {
      productsActions.addProduct.reset();
    });

    describe('product buttons', function () {
      let productButtons;

      beforeEach(function () {
        productButtons = component.find(AddProductButton);
      });

      it('should have three products', function () {
        expect(productButtons).to.have.length(productCodes.length);
      });

      productCodes.forEach(function (productCode, idx) {
        let productButton;
        let expectedTitle = getProductName(productCode);
        beforeEach(function () {
          productButton = productButtons.at(idx);
        });

        it(`should have title ${expectedTitle}`, function () {
          expect(productButton).to.have.prop('title', expectedTitle);
        });

        it('should pass the product code to addProduct when clicked', function () {
          productButton.simulate('click');
          expect(productsActions.addProduct).to.have.been.calledWith({productCode});
        });
      });
    });
  });
});
