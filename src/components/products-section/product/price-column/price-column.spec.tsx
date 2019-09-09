import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { PriceColumn, PriceColumnPropsInterface } from './index';


describe('PriceColumn Component: ', () => {
  let priceColumn: ReactWrapper<PriceColumnPropsInterface> | null;
  beforeEach(() => {
    priceColumn = mount(<PriceColumn price={10} currency="€" />);
  });
  afterEach(() => {
    priceColumn = null;
  });
  test('It renders PriceColumn component', () => {
    expect(priceColumn).toMatchSnapshot();
  });

  test('It renders Product Price with props', () => {
    expect(priceColumn!.props().price).toEqual(10);
    expect(priceColumn!.props().currency).toEqual('€');
  });
});
