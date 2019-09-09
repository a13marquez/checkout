import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { TotalRow } from '.';

describe('Total Row Component: ', () => {
  let totalRow;
  const onCheckout = jest.fn(() => 'update counter');
  beforeEach(() => {
    totalRow = mount(<TotalRow
      totalPrice={10}
      currency="USD"
      onCheckout={onCheckout}
    />);
  });
  afterEach(() => {
    totalRow = null;
  });
  test('It renders TotalRow component', () => {
    expect(totalRow).toMatchSnapshot();
  });

  test('It renders totalRow with props', () => {
    expect(totalRow.props().totalPrice).toBe(10);
    expect(totalRow.props().currency).toBe('USD');
    expect(totalRow.props().onCheckout).toBe(onCheckout);
  });
});
