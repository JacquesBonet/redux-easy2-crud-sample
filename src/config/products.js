export const productInfos = {
  FR1: {
    name: 'Fruit Tea',
    prices: [{
      count: -1,
      value: 3.11
    }]
  },
  AP1: {
    name: 'Apple',
    free: ['FR1'],
    prices: [{
      count: 2,
      value: 5.00
    },
    {
      count: -1,
      value: 4.50
    }]
  },
  CF1: {
    name: 'Coffee',
    free: ['FR1'],
    prices: [{
      count: -1,
      value: 11.23
    }]
  }
};


/**
 * Calculate the number of products of type product.productCode
 *
 * @param products       {Array}   Array of products
 * @param code           {String}  The product code to  search products
 * @param position      {int}      The product position on the basket
 * @returns {*}                    return the product number matching productCode code
 */
const getNbProductsWithSameCode = (products, code, position) => {
  return products.reduce((total, product, idx) => {
    if (idx > position) return total;
    if (product.productCode === code) return total + 1;
    return total;
  }, 0)
};

export const getProductCodes = () => (Object.keys(productInfos).sort());

export const getProductName = (productOrCode) => {
  let productCode = productOrCode.productCode ? productOrCode.productCode : productOrCode;
  return productInfos[productCode] ? productInfos[productCode].name : '';
};

/**
 * Calculate the product price
 *
 * @param products      {Array}    Array of products
 * @param product       {Object}   Product to calculate the price
 * @param position      {int}      The product position on the basket
 * @returns {int}                  return the price
 */
export const getProductValue = (products, position = 0) => {
  let product = products[position];
  if (product.hasOwnProperty('price'))  return product.price;

  let nbProducts = getNbProductsWithSameCode( products, product.productCode, position)
  let prices = productInfos[product.productCode].prices;

  for( var price of prices) {
    if (nbProducts <= price.count) return price.value;

    if (price.count === -1) return price.value;
  }
};

/**
 * Return the free products discount associated to a product
 *
 * @param productCode  {Array}    the free product discount. 0, if no product discount
 */
export const hasFreeProductDiscount = (productCode) => {
  const product = productInfos[productCode];

  if (product) return product.free

  return 0;
};


