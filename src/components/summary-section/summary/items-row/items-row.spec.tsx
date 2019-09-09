import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { ItemsRow } from '.';

describe('ItemsRow Component: ', () => {
  let itemsRow;
  beforeEach(() => {
    itemsRow = mount(<ItemsRow
      price={10}
      items={50}
      currency="USD"
    />);
  });
  afterEach(() => {
    itemsRow = null;
  });
  test('It renders ItemsRow component', () => {
    expect(itemsRow).toMatchSnapshot();
  });

  test('It renders ItemsRow with props', () => {
    expect(itemsRow.props().items).toBe(50);
    expect(itemsRow.props().currency).toBe('USD');
    expect(itemsRow.props().price).toBe(10);
  });
});
