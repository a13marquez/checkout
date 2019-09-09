import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { InfoColumn, InfoColumnPropsInterface } from './index';

describe('InfoColumn Component: ', () => {
  let infoColumn: ReactWrapper<InfoColumnPropsInterface> | null;
  beforeEach(() => {
    infoColumn = mount(<InfoColumn
      img="image"
      name="name"
      code="code"
    />);
  });
  afterEach(() => {
    infoColumn = null;
  });
  test('It renders InfoColumn component', () => {
    expect(infoColumn).toMatchSnapshot();
  });

  test('It renders Product Column with props', () => {
    expect(infoColumn!.props().img).toEqual('image');
    expect(infoColumn!.props().name).toEqual('name');
    expect(infoColumn!.props().code).toEqual('code');
  });
});
