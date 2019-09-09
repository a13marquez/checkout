import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { QuantityColumn, QuantityColumnPropsInterface } from './index';

describe('QuantityColumn Component: ', () => {
  let quantityColumn: ReactWrapper<QuantityColumnPropsInterface> | null;
  const onUpdateCounter = jest.fn((i) => i+1);
  beforeEach(() => {
    quantityColumn = mount(<QuantityColumn
      quantity={10}
      updateCounter={onUpdateCounter}
    />);
  });
  afterEach(() => {
    quantityColumn = null;
  });
  test('It renders ProductPrice component', () => {
    expect(quantityColumn).toMatchSnapshot();
  });

  test('It renders Product Price with props', () => {
    expect(quantityColumn!.props().quantity).toEqual(10);
    expect(quantityColumn!.props().updateCounter).toEqual(onUpdateCounter);
  });

  test('It call onDecrement when decrement Button is clicked', () => {
    quantityColumn!.find('button').at(0).simulate('click');
    expect(onUpdateCounter.mock.calls).toHaveLength(1);
    expect(onUpdateCounter).toBeCalledWith(-1);
  });

  test('It call onIncrement when increment Button is clicked', () => {
    quantityColumn!.find('button').at(1).simulate('click');
    expect(onUpdateCounter.mock.calls).toHaveLength(2);
    expect(onUpdateCounter).toBeCalledWith(1);
  });
});
