import *  as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { DiscountsTable } from '.';
import { ProductCodeEnum } from '../../../../enums';

describe('discountsTable Component: ', () => {
  let discountsTable;
  beforeEach(() => {
    discountsTable = mount(
      <DiscountsTable
        discounts={{
          key1: [
            {
              product: ProductCodeEnum.Berliner,
              discountApplied: 1,
              bulkQuantity: 3,
              text: 'test'
            },
            {
              product: ProductCodeEnum.Hoppy,
              discountApplied: 1,
              bulkQuantity: 3,
              text: 'test'
            }
          ]
        }}
      />
    );
  });
  afterEach(() => {
    discountsTable = null;
  });
  it('it renders DiscountsTable component', () => {
    expect(discountsTable).toMatchInlineSnapshot(`
      .c1 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        color: #717285;
        background-color: f3f3f3;
        -webkit-letter-spacing: 0;
        -moz-letter-spacing: 0;
        -ms-letter-spacing: 0;
        letter-spacing: 0;
        font-weight: 300;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 16px;
      }

      .c1 + * {
        margin-top: 16px;
      }

      .c0 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        padding: 24px 0;
        border-bottom: 1px solid rgba(33,34,64,0.16);
      }

      .c2 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        list-style: none;
      }

      .c3 {
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

      .c3 *:nth-child(2) {
        font-weight: bold;
      }

      .c3 + li {
        margin-top: 20px;
      }

      <DiscountsTable
        discounts={
          Object {
            "key1": Array [
              Object {
                "bulkQuantity": 3,
                "discountApplied": 1,
                "product": "BERLINER",
                "text": "test",
              },
              Object {
                "bulkQuantity": 3,
                "discountApplied": 1,
                "product": "HOPPY",
                "text": "test",
              },
            ],
          }
        }
      >
        <styled.div>
          <StyledComponent
            forwardedComponent={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "attrs": Array [],
                "componentStyle": ComponentStyle {
                  "componentId": "sc-bwzfXH",
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
        ",
                    "
         padding: 24px 0;
      ",
                    "
        ",
                    "
        border-bottom: 1px solid rgba(33, 34, 64, 0.16);
      ",
                    "
      ",
                  ],
                },
                "displayName": "styled.div",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
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
              <styled.h2
                backgroundColor="f3f3f3"
              >
                <StyledComponent
                  backgroundColor="f3f3f3"
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-bdVaJa",
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
        color: ",
                          [Function],
                          ";
        background-color: ",
                          [Function],
                          ";
        letter-spacing: 0;
        font-weight: 300;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 16px;
        + * {
          margin-top: 16px;
        }
      ",
                        ],
                      },
                      "displayName": "styled.h2",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-bdVaJa",
                      "target": "h2",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <h2
                    className="c1"
                  >
                    Discounts
                  </h2>
                </StyledComponent>
              </styled.h2>
              <styled.ul>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
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
        list-style: none;
      ",
                        ],
                      },
                      "displayName": "styled.ul",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "ul",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <ul
                    className="c2"
                  >
                    <SummaryDiscount
                      currency="€"
                      discount={1}
                      key="test"
                      text="test"
                    >
                      <styled.li>
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-bxivhb",
                                "isStatic": true,
                                "lastClassName": "c3",
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
                              "styledComponentId": "sc-bxivhb",
                              "target": "li",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <li
                            className="c3"
                          >
                            <span>
                              test
                            </span>
                            <span>
                              -
                              1
                              €
                            </span>
                          </li>
                        </StyledComponent>
                      </styled.li>
                    </SummaryDiscount>
                    <SummaryDiscount
                      currency="€"
                      discount={1}
                      key="test"
                      text="test"
                    >
                      <styled.li>
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-bxivhb",
                                "isStatic": true,
                                "lastClassName": "c3",
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
                              "styledComponentId": "sc-bxivhb",
                              "target": "li",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <li
                            className="c3"
                          >
                            <span>
                              test
                            </span>
                            <span>
                              -
                              1
                              €
                            </span>
                          </li>
                        </StyledComponent>
                      </styled.li>
                    </SummaryDiscount>
                  </ul>
                </StyledComponent>
              </styled.ul>
            </div>
          </StyledComponent>
        </styled.div>
      </DiscountsTable>
    `);
  });

  it(`it renders DiscountsTable should render one Summary Discount for each
    discount provided`, () => {
    expect(discountsTable.find('li')).toHaveLength(2);
  });
});
