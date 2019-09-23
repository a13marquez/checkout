import { schema } from 'normalizr';

export const product = new schema.Entity('products', {}, { idAttribute: 'code' });
export const arrayOfProducts = new schema.Array(product);
