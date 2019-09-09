import { ProductCodeEnum } from '../enums'

export interface ProductInterface {
  code: ProductCodeEnum;
  name: string;
  price: number;
  getOneFree?: boolean;
  bulkDiscount?: boolean;
  bulkQuantity?: number;
  bulkPrice?: number;
  quantity: number;
  img: string;
}
