import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { TotalColumn } from './index';

describe('TotalColumn Component: ', () => {
  let totalColumn;
  beforeEach(() => {
    totalColumn = mount(<TotalColumn
      price={10}
      quantity={10}
      currency="USD"
    />);
  });
  afterEach(() => {
    totalColumn = null;
  });
  test('It renders ProductPrice component', () => {
    expect(totalColumn).toMatchSnapshot();
  });

  test('It renders Product Price with props', () => {
    expect(totalColumn.props().price).toEqual(10);
    expect(totalColumn.props().quantity).toEqual(10);
    expect(totalColumn.props().currency).toEqual('USD');
  });
});
