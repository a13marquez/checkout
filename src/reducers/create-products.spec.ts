import { products } from './createProducts';
import * as actionTypes from '../types/actions-types';
import { ProductInterface } from '../interfaces';

describe('create products reducer:', () => {
  it('should return the initial state', () => {
    expect(products(undefined, {})).toStrictEqual([]);
  });

  it('should handle FETCH_products_SUCCESS', () => {
    const expectedResult = [
      { name: 'product1' },
      { name: 'product2' },
    ];
    const result = products([], {
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      response: {
        result: [
          { name: 'product1' },
          { name: 'product2' },
        ],
      },
    });
    expect(result).toStrictEqual(expectedResult);
  });

  it('should handle UPDATE_COUNTER_SUCCESS', () => {
    const expectedResult: ProductInterface[] = [];
    const result = products([], {
      type: actionTypes.UPDATE_COUNTER_SUCCESS,
      products: {
        discount1: [
          { text: 'test' },
          { text: 'test1' },
        ],
      },
    });
    expect(result).toStrictEqual(expectedResult);
  });
});
