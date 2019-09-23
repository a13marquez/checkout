import { TotalActionType } from '../types';
import { TotalInterface } from '../interfaces';

export const total = (state = {
  price: 0,
  items: 0,
}, action: TotalActionType): TotalInterface => {
  switch (action.type) {
    case 'UPDATE_TOTAL':
      return {
        price: action.update.items > 0 ?
          state.price + action.update.price :
          state.price - action.update.price ,
        items: state.items + action.update.items,
      };
    default:
      return state;
  }
};

export const getTotal = (state: TotalInterface) => state;
