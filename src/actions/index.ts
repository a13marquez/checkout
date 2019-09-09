import { normalize } from 'normalizr'
import * as schema from './schema'
import * as api from '../api'
import { getFetching } from '../reducers'
import { ProductCodeEnum } from '../enums'
import { PricingRuleInterface } from '../interfaces/pricing-rule.interface'
import * as actionTypes from '../types/actions-types'
import { ProductInterface } from '../interfaces'
import { Dispatch } from 'react'

export const fetchDiscounts = () => (
  dispatch: Dispatch<actionTypes.DiscountActionType>,
  getState: () => any) => {
  dispatch({
    type:  actionTypes.FETCH_DISCOUNTS_REQUEST,
  })

  return api.fetchPricingRules().then(
    (res: PricingRuleInterface) => {
      dispatch({
        type: actionTypes.FETCH_DISCOUNTS_SUCCESS,
        res,
      })
    },
    (error) => {
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_FAILURE,
        message: error.message || 'Something went wrong.',
      })
    }
  )
}

export const fetchProducts = () => (
  dispatch: Dispatch<actionTypes.ProductActionType>,
  getState: () => any) => {

  if (getFetching(getState())) {
    return Promise.resolve()
  }
  dispatch({
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
  })

  return api.fetchProducts().then(
    (response: ProductInterface[]) => {
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        response: normalize(response, schema.arrayOfProducts),
      })
    },
    (error) => {
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_FAILURE,
        message: error.message || 'Something went wrong.',
      })
    }
  )
}

export const updateTotal = (price: number, items: number) => {
  return  (dispatch: Dispatch<actionTypes.TotalActionType>) => {
    dispatch({
      type: actionTypes.UPDATE_TOTAL,
      update: { price, items },
    })
  }
}

export const updateCounter = (code: ProductCodeEnum, quantity: number) =>
 (dispatch: Dispatch<actionTypes.CounterActionType>) => {
   return api.updateQuantity(code, quantity).then((response) => {
     dispatch({
       type: actionTypes.UPDATE_COUNTER_SUCCESS,
       response: normalize(response, schema.product),
     })
   })
 }

export const updateDiscounts = (discounts: PricingRuleInterface) =>
  (dispatch: Dispatch<actionTypes.DiscountActionType>) => {
    dispatch({
      type: actionTypes.UPDATE_DISCOUNTS,
      discounts,
    })
  }
