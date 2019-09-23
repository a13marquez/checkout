import *  as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { ProductsList } from './index';
import { ProductCodeEnum } from '../../../enums';


import { ProductInterface } from '../../../interfaces';

describe('section Component: ', () => {
  let productsList;
  const updateCounter = jest.fn(() => ({
    code: ProductCodeEnum.Ipa,
    name: 'India Pale Ale',
    price: 3.7,
    getOneFree: true,
    bulkDiscount: false,
    quantity: 0,
    img: '../../../../img/ipa.jpg'
  }));
  const updateTotal = jest.fn(() => ({ price: 1, items: 1 }));
  const products: ProductInterface[] = [
    {
      code: ProductCodeEnum.Berliner,
      name: 'Berliner Weisse',
      price: 3.0,
      getOneFree: false,
      bulkDiscount: false,
      quantity: 0,
      img: '../../../../img/berliner.jpg'
    },
    {
      code: ProductCodeEnum.Hoppy,
      name: 'Hoppy Pils',
      price: 3.5,
      getOneFree: false,
      bulkDiscount: true,
      bulkPrice: 2.5,
      bulkQuantity: 3,
      quantity: 0,
      img: '../../../../img/hoppy.jpg'
    },
    {
      code: ProductCodeEnum.Ipa,
      name: 'India Pale Ale',
      price: 3.7,
      getOneFree: true,
      bulkDiscount: false,
      quantity: 0,
      img: '../../../../img/ipa.jpg'
    }
  ];

  afterEach(() => {
    productsList = null;
  });
  it('it renders Product List component', () => {
    productsList = mount(
      <ProductsList
        products={[]}
        isFetching={false}
        updateCounter={updateCounter}
        updateTotal={updateTotal}
        fetchProducts={() => []}
        currency="USD"
      />
    );
    expect(productsList).toMatchInlineSnapshot(`
      .c0 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        list-style: none;
        position: relative;
        width: 100%;
        padding-left: 0;
      }

      <ProductsList
        currency="USD"
        fetchProducts={[Function]}
        isFetching={false}
        products={Array []}
        updateCounter={[MockFunction]}
        updateTotal={[MockFunction]}
      >
        <Styled(styled.ul)>
          <StyledComponent
            forwardedComponent={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "attrs": Array [],
                "componentStyle": ComponentStyle {
                  "componentId": "sc-bwzfXH",
                  "isStatic": false,
                  "lastClassName": "c0",
                  "rules": Array [
                    "
        ",
                    "
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
      ",
                    "
        list-style: none;
      ",
                    "
        position: relative;
        width: 100%;
        padding-left: 0;
        ",
                    [Function],
                    "
      ",
                  ],
                },
                "displayName": "Styled(styled.ul)",
                "foldedComponentIds": Array [
                  "sc-bdVaJa",
                ],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "ul",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <ul
              className="c0"
            />
          </StyledComponent>
        </Styled(styled.ul)>
      </ProductsList>
    `);
  });

  it('it renders Products List without props', () => {
    productsList = mount(
      <ProductsList
        products={[]}
        isFetching={false}
        updateCounter={updateCounter}
        updateTotal={updateTotal}
        fetchProducts={() => []}
        currency="USD"
      />
    );
    expect(productsList.find('li')).toHaveLength(0);
  });

  it('it renders Products List with props', () => {
    productsList = mount(
      <ProductsList
        products={products}
        isFetching={false}
        updateCounter={updateCounter}
        updateTotal={updateTotal}
        fetchProducts={() => products}
        currency="USD"
      />
    );
    expect(productsList.find('li')).toHaveLength(3);
  });
});
