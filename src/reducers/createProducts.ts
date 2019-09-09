import { ProductActionType, CounterActionType } from '../types'

export const products = (
  state = [],
  action: ProductActionType | CounterActionType) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return action.response ?
        action.response.result : state
    case 'UPDATE_COUNTER_SUCCESS':
    default:
      return state
  }
}
