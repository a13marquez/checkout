import { combineReducers } from 'redux';
import { byCode, getProduct } from './byCode';
import { products } from './createProducts';
import { discounts } from './createDiscounts';
import { total } from './createTotal';
import { createMessages, getErrorMessage, getIsFetching } from './createMessages';
import { PricingRuleInterface } from '../interfaces/pricing-rule.interface';
import { ProductInterface } from '../interfaces';

const messages = createMessages();

const reducers = combineReducers({
  byCode,
  products,
  discounts,
  total,
  messages,
});

export const getVisibleProducts = (state: any): ProductInterface[] =>
  state.products.map((code: string) => getProduct(state.byCode, code));

export const getDiscountsList = (state: any): PricingRuleInterface  =>
  state.discounts;

export const getTotals = (state: any) => state.total;

export const getFetching = (state: any): boolean =>
  getIsFetching(state.messages);

export const getErrorMsg = (state: any): string =>
  getErrorMessage(state.messages);
 
export default reducers;