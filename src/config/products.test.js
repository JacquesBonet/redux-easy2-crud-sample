import {getProductCodes, getProductName, getProductValue} from "./products";

describe('getProductCodes', function () {
  it('returns the codes in order', () => {
    const codes = getProductCodes();
    expect(codes).toEqual(['AP1', 'CF1', 'FR1']);
  });
});

describe('getProductName', function () {
  it('returns the product name', () => {
    const name = getProductName({productCode: 'CF1'});
    expect(name).toEqual('Coffee');
  });
});

describe('getProductValue1', function () {
  it('returns the first product value', () => {
    const products = [{productCode: 'AP1'}]
    const value = getProductValue(products, 0);

    console.log( "value = " + value);
    expect(value).toEqual(5.00);
  });
});

describe('getProductValue2', function () {
  it('returns the first product value', () => {
    const products = [{productCode: 'AP1'}, {productCode: 'AP1'}, {productCode: 'AP1'}];
    const value = getProductValue(products, 1);
    expect(value).toEqual(5.00);
  });
});

describe('getProductValue3', function () {
  it('returns the third product value', () => {
    const products = [{productCode: 'AP1'}, {productCode: 'AP1'}, {productCode: 'AP1'}]
    const value = getProductValue(products, 2);
    expect(value).toEqual(4.50);
  });
});
