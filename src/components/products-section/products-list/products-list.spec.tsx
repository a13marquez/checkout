import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { ProductsList } from './index';
import { ProductCodeEnum } from '../../../enums';

describe('Section Component: ', () => {
  let productsList;
  let updateCounter = jest.fn((code, quantity) => ({
    code: ProductCodeEnum.Cap,
    name: 'Cabify Cap',
    price: 5.00,
    discount: true,
    bulkDiscount: false,
    quantity: 0,
    img: '../../../img/cap.png',
  }));
  let updateTotal = jest.fn((price, items) => ({price: 1, items: 1}))
  const products = [{
    code: ProductCodeEnum.Cap,
    name: 'Cabify Cap',
    price: 5.00,
    discount: true,
    bulkDiscount: false,
    quantity: 0,
    img: '../../../img/cap.png',
  }, {
    code: ProductCodeEnum.Tshirt,
    name: 'Cabify T-Shirt',
    price: 20.00,
    discount: false,
    bulkDiscount: true,
    bulkPrice: 19.00,
    bulkQuantity: 3,
    quantity: 0,
    img: '../../../img/shirt.png',
  }, {
    code: ProductCodeEnum.Mug,
    name: 'Cabify Coffe Mug',
    price: 7.50,
    discount: false,
    bulkDiscount: false,
    quantity: 0,
    img: '../../../img/mug.png',
  }];
  afterEach(() => {
    productsList = null;
  });
  test('It renders Product List component', () => {
    productsList = mount(<ProductsList
      products={[]}
      isFetching={false}
      updateCounter={updateCounter}
      updateTotal={updateTotal}
      fetchProducts={() => []}
      currency="USD"
    />);
    expect(productsList).toMatchSnapshot();
  });

  test('It renders Products List without props', () => {
    productsList = mount(<ProductsList
      products={[]}
      isFetching={false}
      updateCounter={updateCounter}
      updateTotal={updateTotal}
      fetchProducts={() => []}
      currency="USD"
    />);
    expect(productsList.find('li')).toHaveLength(0);
  });

  test('It renders Products List with props', () => {
    productsList = mount(<ProductsList
      products={products}
      isFetching={false}
      updateCounter={updateCounter}
      updateTotal={updateTotal}
      fetchProducts={() => products}
      currency='USD'
    />);
    expect(productsList.find('li')).toHaveLength(3);
  });
});
