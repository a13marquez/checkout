import *  as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { PriceColumn, PriceColumnPropsInterface } from './index';

describe('priceColumn Component: ', () => {
  let priceColumn: ReactWrapper<PriceColumnPropsInterface> | null;
  beforeEach(() => {
    priceColumn = mount(<PriceColumn price={10} currency="€" />);
  });
  afterEach(() => {
    priceColumn = null;
  });
  it('it renders PriceColumn component', () => {
    expect(priceColumn).toMatchInlineSnapshot(`
      .c0 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 20%;
      }

      .c0:nth-child(n + 2) {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c2 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        margin-left: 4px;
      }

      .c1 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        color: #000000;
        font-size: 16px;
      }

      <PriceColumn
        currency="€"
        price={10}
      >
        <styled.div>
          <StyledComponent
            forwardedComponent={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "attrs": Array [],
                "componentStyle": ComponentStyle {
                  "componentId": "sc-bdVaJa",
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
        display: flex;
        align-items: center;
        width: ",
                    [Function],
                    ";
        &:nth-child(n + 2) {
          justify-content: center;
        }
      ",
                  ],
                },
                "displayName": "styled.div",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bdVaJa",
                "target": "div",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <div
              className="c0"
            >
              <Styled(styled.span)>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-EHOje",
                        "isStatic": false,
                        "lastClassName": "c1",
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
      ",
                          "
        color: #000000;
        font-size: 16px;
        font-weight: ",
                          [Function],
                          ";
      ",
                        ],
                      },
                      "displayName": "Styled(styled.span)",
                      "foldedComponentIds": Array [
                        "sc-bwzfXH",
                      ],
                      "render": [Function],
                      "styledComponentId": "sc-EHOje",
                      "target": "span",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <span
                    className="c1"
                  >
                    10
                  </span>
                </StyledComponent>
              </Styled(styled.span)>
              <Styled(styled.span)>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-ifAKCX",
                        "isStatic": true,
                        "lastClassName": "c2",
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
      ",
                          "
        margin-left: 4px;
      ",
                        ],
                      },
                      "displayName": "Styled(styled.span)",
                      "foldedComponentIds": Array [
                        "sc-bwzfXH",
                      ],
                      "render": [Function],
                      "styledComponentId": "sc-ifAKCX",
                      "target": "span",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <span
                    className="c2"
                  >
                    €
                  </span>
                </StyledComponent>
              </Styled(styled.span)>
            </div>
          </StyledComponent>
        </styled.div>
      </PriceColumn>
    `);
  });

  it('it renders Product Price with props', () => {
    expect(priceColumn!.props().price).toStrictEqual(10);
    expect(priceColumn!.props().currency).toStrictEqual('€');
  });
});
