import { discounts } from './createDiscounts'
import * as actionTypes from '../types/actions-types'

describe('Create Discounts reducer:', () => {
  test('Should return the initial state', () => {
    expect(discounts(undefined, {})).toEqual({})
  })

  test('Should handle FETCH_DISCOUNTS_SUCCESS', () => {
    const expectedResult = {
      discount1: [
        { text: 'test' },
        { text: 'test1' },
      ],
    }
    const result = discounts({}, {
      type: actionTypes.FETCH_DISCOUNTS_SUCCESS,
      res: {
        discount1: [
          { text: 'test' },
          { text: 'test1' },
        ],
      },
    })
    expect(result).toEqual(expectedResult)
  })

  test('Should handle UPDATE_DISCOUNTS', () => {
    const expectedResult = {
      discount1: [
        { text: 'test' },
        { text: 'test1' },
      ],
    }
    const result = discounts({}, {
      type: actionTypes.UPDATE_DISCOUNTS,
      discounts: {
        discount1: [
          { text: 'test' },
          { text: 'test1' },
        ],
      },
    })
    expect(result).toEqual(expectedResult)
  })
})
