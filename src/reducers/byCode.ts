import { NormalizedSchema, schema } from 'normalizr';
import { ProductInterface } from '../interfaces';
import { SchemaType, FetchProductsSuccessAction } from '../types';

export const byCode = (
  state = {},
  action: FetchProductsSuccessAction)
: NormalizedSchema<SchemaType, schema.Array<ProductInterface>> | {} => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.products,
    };
  }
  return state;
};

export const getProduct =
  (state: NormalizedSchema<SchemaType, schema.Array<ProductInterface>>,
    code: string): ProductInterface => state[code];
