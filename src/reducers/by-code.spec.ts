import { byCode } from './byCode';
import * as actionTypes from '../types/actions-types';

describe('by Code reducer:', () => {
  it('should return the initial state', () => {
    expect(byCode(undefined, {})).toStrictEqual({});
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    const expectedResult = {
      test: { code: 'test' },
      test2: { code: 'test2' },
    };
    const result = byCode({}, {
      type: actionTypes.FETCH_PRODUCTS_SUCCESS,
      response: {
        entities: {
          products: {
            test: { code: 'test' },
            test2: { code: 'test2' },
          },
        },
      },
    });
    expect(result).toStrictEqual(expectedResult);
  });
});
