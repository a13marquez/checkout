import { total } from './createTotal'
import * as actionTypes from '../types/actions-types'

describe('Create total reducer:', () => {
  test('Should return the initial state', () => {
    expect(total(undefined, {})).toEqual({
      price: 0,
      items: 0,
    })
  })

  test('Should handle UPDATE_TOTAL', () => {
    const expectedResultIncrement = {
      price: 1,
      items: 1,
    }
    const expectedResultDecrement = {
      price: 0,
      items: 0,
    }
    const resultIncrement = total(undefined, {
      type: actionTypes.UPDATE_TOTAL,
      update: {
        price: 1,
        items: 1,
      },
    })
    expect(resultIncrement).toEqual(expectedResultIncrement)

    const resultDecrement = total(resultIncrement, {
      type: actionTypes.UPDATE_TOTAL,
      update: {
        price: 1,
        items: -1,
      },
    })
    expect(resultDecrement).toEqual(expectedResultDecrement)
  })
})
