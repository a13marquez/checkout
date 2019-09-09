import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { SummaryDiscount } from '.';

describe('Summary Discount Component: ', () => {
  let summaryDiscount;
  beforeEach(() => {
    summaryDiscount = mount(<SummaryDiscount
      text="This is a great discount"
      discount={50}
      currency="USD"
    />);
  });
  afterEach(() => {
    summaryDiscount = null;
  });
  test('It renders SummaryDiscount component', () => {
    expect(summaryDiscount).toMatchSnapshot();
  });

  test('It renders SummaryDiscount with props', () => {
    expect(summaryDiscount.props().discount).toBe(50);
    expect(summaryDiscount.props().currency).toBe('USD');
    expect(summaryDiscount.props().text).toBe('This is a great discount');
  });
});
