import *  as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { SummaryDiscount } from '.';

describe('summary Discount Component: ', () => {
  let summaryDiscount;
  beforeEach(() => {
    summaryDiscount = mount(
      <SummaryDiscount
        text="This is a great discount"
        discount={50}
        currency="USD"
      />
    );
  });
  afterEach(() => {
    summaryDiscount = null;
  });
  it('it renders SummaryDiscount component', () => {
    expect(summaryDiscount).toMatchInlineSnapshot(`
      .c0 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        font-size: 14px;
        line-height: 17px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c0 *:nth-child(2) {
        font-weight: bold;
      }

      .c0 + li {
        margin-top: 20px;
      }

      <SummaryDiscount
        currency="USD"
        discount={50}
        text="This is a great discount"
      >
        <styled.li>
          <StyledComponent
            forwardedComponent={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "attrs": Array [],
                "componentStyle": ComponentStyle {
                  "componentId": "sc-bdVaJa",
                  "isStatic": true,
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
        font-size: 14px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;
        *:nth-child(2) {
          font-weight: bold;
        }
        + li {
          margin-top: 20px;
        }
      ",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bdVaJa",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c0"
            >
              <span>
                This is a great discount
              </span>
              <span>
                -
                50
                USD
              </span>
            </li>
          </StyledComponent>
        </styled.li>
      </SummaryDiscount>
    `);
  });

  it('it renders SummaryDiscount with props', () => {
    expect(summaryDiscount.props().discount).toBe(50);
    expect(summaryDiscount.props().currency).toBe('USD');
    expect(summaryDiscount.props().text).toBe('This is a great discount');
  });
});
