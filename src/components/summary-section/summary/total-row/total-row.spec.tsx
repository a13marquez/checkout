import *  as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { TotalRow } from '.';

describe('total Row Component: ', () => {
  let totalRow;
  const onCheckout = jest.fn(() => 'update counter');
  beforeEach(() => {
    totalRow = mount(
      <TotalRow totalPrice={10} currency="USD" onCheckout={onCheckout} />
    );
  });
  afterEach(() => {
    totalRow = null;
  });
  it('it renders TotalRow component', () => {
    expect(totalRow).toMatchInlineSnapshot(`
      .c0 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        -webkit-align-self: flex-end;
        -ms-flex-item-align: end;
        align-self: flex-end;
        margin-top: auto;
        padding-top: 16px;
        padding-bottom: 0;
        border-top: 1px solid rgba(33,34,64,0.16);
        color: #212240;
      }

      .c3 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
      }

      .c1 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        list-style: none;
      }

      .c2 {
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

      .c2 *:nth-child(2) {
        font-weight: bold;
      }

      .c2 + li {
        margin-top: 20px;
      }

      .c4 {
        font-size: 20px;
        line-height: 25px;
        margin-top: 24px;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 100%;
        border-radius: 4px;
        background: #fabf00;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        line-height: 14px;
        cursor: pointer;
      }

      <TotalRow
        currency="USD"
        onCheckout={[MockFunction]}
        totalPrice={10}
      >
        <styled.div>
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
        align-self: flex-end;
        margin-top: auto;
        padding-top: 16px;
        padding-bottom: 0;
        border-top: 1px solid rgba(33, 34, 64, 0.16);
        color: #212240;
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
              <styled.ul>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
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
                    className="c1"
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
                          className="c2"
                        >
                          <styled.span
                            style={
                              Object {
                                "flexBasis": "100%",
                                "textTransform": "uppercase",
                              }
                            }
                          >
                            <StyledComponent
                              forwardedComponent={
                                Object {
                                  "$$typeof": Symbol(react.forward_ref),
                                  "attrs": Array [],
                                  "componentStyle": ComponentStyle {
                                    "componentId": "sc-bwzfXH",
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
      ",
                                    ],
                                  },
                                  "displayName": "styled.span",
                                  "foldedComponentIds": Array [],
                                  "render": [Function],
                                  "styledComponentId": "sc-bwzfXH",
                                  "target": "span",
                                  "toString": [Function],
                                  "warnTooManyClasses": [Function],
                                  "withComponent": [Function],
                                }
                              }
                              forwardedRef={null}
                              style={
                                Object {
                                  "flexBasis": "100%",
                                  "textTransform": "uppercase",
                                }
                              }
                            >
                              <span
                                className="c3"
                                style={
                                  Object {
                                    "flexBasis": "100%",
                                    "textTransform": "uppercase",
                                  }
                                }
                              >
                                Total cost
                              </span>
                            </StyledComponent>
                          </styled.span>
                          <styled.span
                            style={
                              Object {
                                "fontWeight": "bold",
                              }
                            }
                          >
                            <StyledComponent
                              forwardedComponent={
                                Object {
                                  "$$typeof": Symbol(react.forward_ref),
                                  "attrs": Array [],
                                  "componentStyle": ComponentStyle {
                                    "componentId": "sc-bwzfXH",
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
      ",
                                    ],
                                  },
                                  "displayName": "styled.span",
                                  "foldedComponentIds": Array [],
                                  "render": [Function],
                                  "styledComponentId": "sc-bwzfXH",
                                  "target": "span",
                                  "toString": [Function],
                                  "warnTooManyClasses": [Function],
                                  "withComponent": [Function],
                                }
                              }
                              forwardedRef={null}
                              style={
                                Object {
                                  "fontWeight": "bold",
                                }
                              }
                            >
                              <span
                                className="c3"
                                style={
                                  Object {
                                    "fontWeight": "bold",
                                  }
                                }
                              >
                                10
                                USD
                              </span>
                            </StyledComponent>
                          </styled.span>
                        </li>
                      </StyledComponent>
                    </styled.li>
                  </ul>
                </StyledComponent>
              </styled.ul>
              <Styled(styled.button)
                background="#fabf00"
                onClick={[MockFunction]}
              >
                <StyledComponent
                  background="#fabf00"
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-EHOje",
                        "isStatic": false,
                        "lastClassName": "c4",
                        "rules": Array [
                          "
        font-size: 20px;
        line-height: 25px;
      ",
                          "
        margin-top: 24px;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 100%;
        border-radius: 4px;
        background: ",
                          [Function],
                          ";
        color: ",
                          [Function],
                          ";
        font-size: 16px;
        font-weight: bold;
        line-height: 14px;
        cursor: pointer;
      ",
                        ],
                      },
                      "displayName": "Styled(styled.button)",
                      "foldedComponentIds": Array [
                        "sc-ifAKCX",
                      ],
                      "render": [Function],
                      "styledComponentId": "sc-EHOje",
                      "target": "button",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  onClick={[MockFunction]}
                >
                  <button
                    className="c4"
                    onClick={[MockFunction]}
                  >
                    Checkout
                  </button>
                </StyledComponent>
              </Styled(styled.button)>
            </div>
          </StyledComponent>
        </styled.div>
      </TotalRow>
    `);
  });

  it('it renders totalRow with props', () => {
    expect(totalRow.props().totalPrice).toBe(10);
    expect(totalRow.props().currency).toBe('USD');
    expect(totalRow.props().onCheckout).toBe(onCheckout);
  });
});
