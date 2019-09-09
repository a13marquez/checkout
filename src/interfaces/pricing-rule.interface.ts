import { ProductDiscountInterface } from './product-disccount.interface'

export interface PricingRuleInterface {
  [key: string]: ProductDiscountInterface[]
}
