import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { normalize } from 'normalizr'
import * as actions from './index'
import * as actionTypes from '../types/actions-types'

import { fakeDatabase } from '../api'
import * as schema from './schema'
import { ProductCodeEnum } from '../enums'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Action testing', () => {
  let store: any
  beforeEach(() => {
    store = mockStore({
      byCode: {},
      products: [],
      discounts: {},
      total: {},
      messages: {
        isFetching: false,
        errorMessage: null,
      },
    })
  })
  afterEach(() => {
    store = null
  })

  test(`creates FETCH_PRODUCTS_REQUEST FETCH_PRODUCTS_SUCCESS when fetching
    products has been done`,
    () => {
      const expectedActions = [
      { type: actionTypes.FETCH_PRODUCTS_REQUEST },
        {
          type: actionTypes.FETCH_PRODUCTS_SUCCESS,
          response: normalize(fakeDatabase.products, schema.arrayOfProducts),
        },
      ]

      store.dispatch(actions.fetchProducts()).then(() => {
        return expect(store.getActions()).toBe(expectedActions)
      })
    })

  test(`creates FETCH_DISCOUNTS_REQUEST, FETCH_DISCOUNTS_SUCCESS when fetching
    discounts has been done`,
  () => {
    const expectedActions = [
      { type: actionTypes.FETCH_DISCOUNTS_REQUEST },
      {
        type: actionTypes.FETCH_DISCOUNTS_SUCCESS,
        res: fakeDatabase.pricingRules,
      },
    ]

    store.dispatch(actions.fetchDiscounts()).then(() => {
      expect(store.getActions()).toStrictEqual(expectedActions)
    })
  })

  test('creates UPDATE_COUNTER_SUCCESS when update products has been done',
    () => store.dispatch(actions.updateCounter(ProductCodeEnum.Berliner, 1))
      .then(() => {
        const mug = fakeDatabase.products
          .find(product => product.code === 'BERLINER')

        const expectedActions = [
          {
            type: actionTypes.UPDATE_COUNTER_SUCCESS,
            response: normalize(mug, schema.product),
          },
        ]
        expect(store.getActions()).toEqual(expectedActions)
      }))

  test('creates UPDATE_TOTAL when total update has been done',
    () => {
      const expectedActions = [
        {
          type: actionTypes.UPDATE_TOTAL,
          update: { price: 1, items: 1 },
        },
      ]
      store.dispatch(actions.updateTotal(1, 1))
      expect(store.getActions()).toEqual(expectedActions)
    })

  test('creates UPDATE_DISCOUNTS when update discounts has been done',
    () => {
      const expectedActions = [{
        type: actionTypes.UPDATE_DISCOUNTS,
        discounts: fakeDatabase.pricingRules,
      },
      ]
      store.dispatch(actions.updateDiscounts(fakeDatabase.pricingRules))
      expect(store.getActions()).toEqual(expectedActions)
    })
})
