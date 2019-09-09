import { products } from './createProducts'
import * as actionTypes from '../types/actions-types'

describe('Create products reducer:', () => {
  test('Should return the initial state', () => {
    expect(products(undefined, {})).toEqual([])
  })

  test('Should handle FETCH_products_SUCCESS', () => {
    const expectedResult = [
      { name: 'product1' },
      { name: 'product2' },
    ]
    const result = products([], {
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      response: {
        result: [
          { name: 'product1' },
          { name: 'product2' },
        ],
      },
    })
    expect(result).toEqual(expectedResult)
  })

  test('Should handle UPDATE_COUNTER_SUCCESS', () => {
    const expectedResult = []
    const result = products([], {
      type: actionTypes.UPDATE_COUNTER_SUCCESS,
      products: {
        discount1: [
          { text: 'test' },
          { text: 'test1' },
        ],
      },
    })
    expect(result).toEqual(expectedResult)
  })
})
