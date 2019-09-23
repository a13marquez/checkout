import { combineReducers } from 'redux';

export const createMessages = () => {
  const isFetching = (state = false, action: any) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
      case 'FETCH_PRODUCTS_REQUEST':
      case 'FETCH_DISCOUNTS_REQUEST':
        return true;
      case 'FETCH_PRODUCTS_SUCCESS':
      case 'FETCH_PRODUCTS_FAILURE':
      case 'FETCH_DISCOUNTS_SUCCESS':
      case 'FETCH_DISCOUNTS_FAILURE':
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action: any) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_FAILURE':
      case 'FETCH_DISCOUNTS_FAILURE':
        return action.message;
      case 'FETCH_DATA_REQUEST':
      case 'FETCH_PRODUCTS_REQUEST':
      case 'FETCH_PRODUCTS_SUCCESS':
      case 'FETCH_DISCOUNTS_SUCCESS':
      case 'FETCH_DISCOUNTS_REQUEST':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    isFetching,
    errorMessage,
  });
};

export const getIsFetching = (state: any) => state.isFetching;
export const getErrorMessage = (state: any) => state.errorMessage;
