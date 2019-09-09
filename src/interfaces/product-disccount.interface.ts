import { ProductCodeEnum } from '../enums'

export interface ProductDiscountInterface {
  product?: ProductCodeEnum
  discountApplied: number
  bulkQuantity?: number
  text?: string
}
