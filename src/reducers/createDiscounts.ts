import { DiscountActionType } from '../types'
import { PricingRuleInterface } from '../interfaces'

export const discounts = (
  state: PricingRuleInterface | {} = {},
  action: DiscountActionType) => {

  switch (action.type) {
    case 'FETCH_DISCOUNTS_SUCCESS':
      return action.res ?
        action.res : state
    case 'UPDATE_DISCOUNTS':
      return action.discounts || state
    default:
      return state
  }
}

export const getDiscounts =
  (state: PricingRuleInterface | {}): PricingRuleInterface => state
