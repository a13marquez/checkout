import { NormalizedSchema, schema } from 'normalizr'
import { SchemaType } from './schema-types'
import { ProductInterface, TotalInterface, PricingRuleInterface } from '../interfaces'

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'

export const FETCH_DISCOUNTS_REQUEST = 'FETCH_DISCOUNTS_REQUEST'
export const FETCH_DISCOUNTS_SUCCESS = 'FETCH_DISCOUNTS_SUCCESS'
export const FETCH_DISCOUNTS_FAILURE = 'FETCH_DISCOUNTS_FAILURE'
export const UPDATE_DISCOUNTS = 'UPDATE_DISCOUNTS'

export const UPDATE_COUNTER_SUCCESS = 'UPDATE_COUNTER_SUCCESS'

export const UPDATE_TOTAL = 'UPDATE_TOTAL'

export interface FetchProductRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST
}

export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS,
  response: NormalizedSchema<SchemaType, schema.Array<ProductInterface>>
}

export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE,
  message: string
}

export interface UpdateCounterSuccessAction {
  type: typeof UPDATE_COUNTER_SUCCESS,
  response: NormalizedSchema<SchemaType, schema.Array<ProductInterface>>
}

export interface UpdateTotalAction {
  type: typeof UPDATE_TOTAL,
  update: TotalInterface
}

export interface FetchdiscountsRequestAction {
  type: typeof FETCH_DISCOUNTS_REQUEST
}
export interface FetchdiscountsSuccessAction {
  type: typeof FETCH_DISCOUNTS_SUCCESS,
  res: PricingRuleInterface,
}

export interface FetchDiscountsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE,
  message: string
}

export interface UpdateDiscountsAction {
  type: typeof UPDATE_DISCOUNTS,
  discounts: PricingRuleInterface,
}

export type ProductActionType = FetchProductRequestAction |
                                FetchProductsSuccessAction |
                                FetchProductsFailureAction

export type DiscountActionType = FetchdiscountsRequestAction |
                                 FetchdiscountsSuccessAction |
                                 FetchDiscountsFailureAction |
                                 UpdateDiscountsAction

export type TotalActionType = UpdateTotalAction

export type CounterActionType = UpdateCounterSuccessAction
