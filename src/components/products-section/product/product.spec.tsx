import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { Product, ProductPropsInterface } from './index';

describe('Product Component: ', () => {
  let product: ReactWrapper<ProductPropsInterface> | null;
  const onUpdateCounter = jest.fn(() => { 'increment'; });
  beforeEach(() => {
    product = mount(<Product
      key='12345'
      img="image"
      name="name"
      code="code"
      quantity={10}
      onUpdateCounter={onUpdateCounter}
      price={10}
      currency="USD"
    />);
  });
  afterEach(() => {
    product = null;
  });
  test('It renders Product component', () => {
    expect(product).toMatchSnapshot();
  });

  test('It renders Product with props', () => {
    expect(product!.props().img).toBe('image');
    expect(product!.props().name).toBe('name');
    expect(product!.props().code).toBe('code');
    expect(product!.props().quantity).toBe(10);
    expect(product!.props().onUpdateCounter).toEqual(onUpdateCounter);
    expect(product!.props().price).toBe(10);
    expect(product!.props().currency).toBe('USD');
  });
});
