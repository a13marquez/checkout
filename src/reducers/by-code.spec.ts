import { byCode } from './byCode'
import * as actionTypes from '../types/actions-types'

describe('By Code reducer:', () => {
  test('Should return the initial state', () => {
    expect(byCode(undefined, {})).toEqual({})
  })

  test('Should handle FETCH_PRODUCTS_SUCCESS', () => {
    const expectedResult = {
      test: { code: 'test' },
      test2: { code: 'test2' },
    }
    const result = byCode({}, {
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      response: {
        entities: {
          products: {
            test: { code: 'test' },
            test2: { code: 'test2' },
          },
        },
      },
    })
    expect(result).toEqual(expectedResult)
  })
})
