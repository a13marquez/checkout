import React from 'react';
import { mount } from 'enzyme'
import 'jest-styled-components'

import { DiscountsTable } from '.';
import { ProductCodeEnum } from '../../../../enums';

describe('DiscountsTable Component: ', () => {
  let discountsTable
  beforeEach(() => {
    discountsTable = mount(<DiscountsTable 
      discounts ={{
        key1: [{
          product: ProductCodeEnum.Berliner,
          discountApplied: 1,
          bulkQuantity: 3,
          text: 'test',
        }, {
          product: ProductCodeEnum.Hoppy,
          discountApplied: 1,
          bulkQuantity: 3,
          text: 'test',
        }]
      }}
    />);
  });
  afterEach(() => {
    discountsTable = null;
  });
  test('It renders DiscountsTable component', () => {
    expect(discountsTable).toMatchSnapshot();
  });
  
  test(`It renders DiscountsTable should render one Summary Discount for each
    discount provided`, () => {
      expect(discountsTable.find('li').length).toBe(2)
  }); 
})




