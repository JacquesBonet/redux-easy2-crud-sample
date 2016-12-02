import {getTotal} from "../services/products";

describe('selectors', function () {
  describe('getTotal1', function () {
    const state = [
      {
        productCode: 'AP1'
      },
      {
        productCode: 'AP1'
      },
      {
        productCode: 'FR1'
      },
      {
        productCode: 'CF1'
      }
    ];
    let total;
    beforeEach(function () {
      total = getTotal(state);
    });

    it('should sum the products correctly', function () {
      expect(total).toEqual(24.34);
    })
  });
});

describe('selectors', function () {
  describe('getTotal', function () {
    const state = [
      {
        productCode: 'AP1'
      },
      {
        productCode: 'AP1'
      },
      {
        productCode: 'FR1'
      },
      {
        productCode: 'CF1'
      },
      {
        productCode: 'FR1',
        price: 0
      },
      {
        productCode: 'AP1'
      }
    ];
    let total;
    beforeEach(function () {
      total = getTotal(state);
    });

    it('should sum the products correctly', function () {
      expect(total).toEqual(28.84);
    })
  });
});
