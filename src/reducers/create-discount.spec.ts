import { discounts } from './createDiscounts';
import * as actionTypes from '../types/actions-types';

describe('create Discounts reducer:', () => {
  it('should return the initial state', () => {
    expect(discounts(undefined, {})).toStrictEqual({});
  });

  it('should handle FETCH_DISCOUNTS_SUCCESS', () => {
    const expectedResult = {
      discount1: [
        { text: 'test' },
        { text: 'test1' },
      ],
    };
    const result = discounts({}, {
      type: actionTypes.FETCH_DISCOUNTS_SUCCESS,
      res: {
        discount1: [
          { text: 'test' },
          { text: 'test1' },
        ],
      },
    });
    expect(result).toStrictEqual(expectedResult);
  });

  it('should handle UPDATE_DISCOUNTS', () => {
    const expectedResult = {
      discount1: [
        { text: 'test' },
        { text: 'test1' },
      ],
    };
    const result = discounts({}, {
      type: actionTypes.UPDATE_DISCOUNTS,
      discounts: {
        discount1: [
          { text: 'test' },
          { text: 'test1' },
        ],
      },
    });
    expect(result).toStrictEqual(expectedResult);
  });
});
