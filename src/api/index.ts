import { ProductCodeEnum } from '../enums';
import { ProductInterface } from '../interfaces';
import { PricingRuleInterface } from '../interfaces/pricing-rule.interface';

import hoppyJpg from '../../img/hoppy.jpg';
import berlinerJpg from '../../img/berliner.jpg';
import ipaJpg from '../../img/ipa.jpg';

const products: ProductInterface[] = [{
  code: ProductCodeEnum.Berliner,
  name: 'Berliner Weisse',
  price: 3.00,
  getOneFree: false,
  bulkDiscount: false,
  quantity: 0,
  img: berlinerJpg,
}, {
  code: ProductCodeEnum.Hoppy,
  name: 'Hoppy Pils',
  price: 3.50,
  getOneFree: false,
  bulkDiscount: true,
  bulkPrice: 2.50,
  bulkQuantity: 3,
  quantity: 0,
  img: hoppyJpg,
}, {
  code: ProductCodeEnum.Ipa,
  name: 'India Pale Ale',
  price: 3.70,
  getOneFree: true,
  bulkDiscount: false,
  quantity: 0,
  img: ipaJpg,
}];

const pricingRules: PricingRuleInterface = {
  getOneFree: [{
    product: ProductCodeEnum.Ipa,
    text: '2x1 India Pale Ale Offer',
    discountApplied: 0,
  }],
  bulkDiscount: [{
    product: ProductCodeEnum.Hoppy,
    text: 'x3 Hoppy Pils',
    discountApplied: 0,
  }],
  promoCode: [{
    text: 'Promo Code',
    discountApplied: 0,
  }],
};

export const fakeDatabase = {
  products,
  pricingRules,
};

const delay = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = (): Promise<ProductInterface[] | undefined> =>
  delay(500).then(() => fakeDatabase.products);

export const fetchPricingRules =
  (): Promise<PricingRuleInterface | undefined> =>
    delay(500).then(() => fakeDatabase.pricingRules);

export const updateQuantity =
  (productCode: ProductCodeEnum, quantity: number = 0):
  Promise<ProductInterface | undefined> => delay(50).then(() => {
    const foundProduct = fakeDatabase.products
      .find((product: ProductInterface) => product.code === productCode);
    if (foundProduct){
      foundProduct.quantity += quantity;
    }
    return foundProduct;
    
  });
