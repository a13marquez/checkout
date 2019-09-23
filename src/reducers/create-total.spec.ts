import { total } from './createTotal';
import * as actionTypes from '../types/actions-types';

describe('create total reducer:', () => {

  it('should return the initial state', () => {
    expect(total(undefined, {})).toStrictEqual({
      price: 0,
      items: 0,
    });
  });

  it('should handle UPDATE_TOTAL', () => {
    const expectedResultIncrement = {
      price: 1,
      items: 1,
    };
    const expectedResultDecrement = {
      price: 0,
      items: 0,
    };
    const resultIncrement = total(undefined, {
      type: actionTypes.UPDATE_TOTAL,
      update: {
        price: 1,
        items: 1,
      },
    });
    expect(resultIncrement).toStrictEqual(expectedResultIncrement);

    const resultDecrement = total(resultIncrement, {
      type: actionTypes.UPDATE_TOTAL,
      update: {
        price: 1,
        items: -1,
      },
    });
    expect(resultDecrement).toStrictEqual(expectedResultDecrement);
  });
});
