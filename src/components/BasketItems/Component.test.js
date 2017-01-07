import React from "react";
import {shallow} from "enzyme";
import BasketList from "./BasketList";
import BasketItem from "./BasketItem";
import {getProductName, getProductValue} from "../../config/products";
import formatCurrency from "../../formatCurrency";

function deleteProduct() {}

describe('BasketItemsComponent', function () {
  let component;
  const products = [{productCode: 'AP1'}, {productCode: 'AP1'}, {productCode: 'CF1'}];
  beforeEach(function () {
    component = shallow(<BasketList products={products} deleteProduct={deleteProduct} />);
  });

  products.forEach(function (product, idx) {
    let productCode = product.productCode;
    let productItemComponent;
    let expectedName = getProductName(product);
    let expectedValue = formatCurrency(getProductValue(products, idx));

    beforeEach(function () {
      productItemComponent = component.find('li').at(idx).find(BasketItem).shallow();
    });

    it(`should have title ${expectedName} for ${productCode}`, function () {
      expect(productItemComponent.find('.basketitem__name').html()).toMatchSnapshot();
    });

    it(`should have value ${expectedValue} for ${productCode}`, function () {
      expect(productItemComponent.find('.basketitem__value').html()).toMatchSnapshot();
    });
  });
});
