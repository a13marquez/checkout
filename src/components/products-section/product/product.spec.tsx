import *  as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { Product, ProductPropsInterface } from './index';

describe('product Component: ', () => {
  let product: ReactWrapper<ProductPropsInterface> | null;
  const onUpdateCounter = jest.fn(() => {
    'increment';
  });
  beforeEach(() => {
    product = mount(
      <Product
        key="12345"
        img="image"
        name="name"
        code="code"
        quantity={10}
        onUpdateCounter={onUpdateCounter}
        price={10}
        currency="USD"
      />
    );
  });
  afterEach(() => {
    product = null;
  });
  it('it renders Product component', () => {
    expect(product).toMatchInlineSnapshot(`
      .c0 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c0 + li {
        margin-top: 32px;
      }

      .c1 {
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
        width: 45%;
      }

      .c1:nth-child(n + 2) {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c6 {
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

      .c6:nth-child(n + 2) {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c11 {
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
        width: 15%;
      }

      .c11:nth-child(n + 2) {
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
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
      }

      .c3 {
        margin-right: 16px;
        width: 72px;
        height: 72px;
        border: 1px solid #cacad1;
        border-radius: 4px;
      }

      .c4 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        color: #fabf00;
        background-color: #fff;
        position: relative;
        -webkit-letter-spacing: -0.18px;
        -moz-letter-spacing: -0.18px;
        -ms-letter-spacing: -0.18px;
        letter-spacing: -0.18px;
        font-size: 18px;
        line-height: 24px;
      }

      .c5 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        font-size: 12px;
        line-height: 16px;
        border-radius: 4px;
        color: #a6a7b3;
        -webkit-letter-spacing: 0.13px;
        -moz-letter-spacing: 0.13px;
        -ms-letter-spacing: 0.13px;
        letter-spacing: 0.13px;
        font-weight: 400;
      }

      .c7 {
        font-size: 20px;
        line-height: 25px;
        padding: 0 8px;
        height: 40px;
        border: none;
        background: transparent;
        color: #fabf00;
        font-weight: bold;
        cursor: pointer;
      }

      .c8 {
        font-size: 14px;
        line-height: 17px;
        width: 40px;
        height: 40px;
        border: 2px solid #dbdbe0;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        line-height: 17px;
      }

      .c8::-webkit-outer-spin-button,
      .c8::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .c8 [type=number] {
        -moz-appearance: textfield;
      }

      .c10 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        margin-left: 4px;
      }

      .c9 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        color: #000000;
        font-size: 16px;
      }

      <Product
        code="code"
        currency="USD"
        img="image"
        name="name"
        onUpdateCounter={[MockFunction]}
        price={10}
        quantity={10}
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
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        + li {
          margin-top: 32px;
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
              <InfoColumn
                code="code"
                img="image"
                name="name"
              >
                <styled.div
                  width="45%"
                >
                  <StyledComponent
                    forwardedComponent={
                      Object {
                        "$$typeof": Symbol(react.forward_ref),
                        "attrs": Array [],
                        "componentStyle": ComponentStyle {
                          "componentId": "sc-bwzfXH",
                          "isStatic": false,
                          "lastClassName": "c11",
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
                        "styledComponentId": "sc-bwzfXH",
                        "target": "div",
                        "toString": [Function],
                        "warnTooManyClasses": [Function],
                        "withComponent": [Function],
                      }
                    }
                    forwardedRef={null}
                    width="45%"
                  >
                    <div
                      className="c1"
                      width="45%"
                    >
                      <Styled(styled.figure)>
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
      ",
                                  "
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
      ",
                                ],
                              },
                              "displayName": "Styled(styled.figure)",
                              "foldedComponentIds": Array [
                                "sc-htpNat",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-bxivhb",
                              "target": "figure",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <figure
                            className="c2"
                          >
                            <styled.img
                              src="image"
                            >
                              <StyledComponent
                                forwardedComponent={
                                  Object {
                                    "$$typeof": Symbol(react.forward_ref),
                                    "attrs": Array [],
                                    "componentStyle": ComponentStyle {
                                      "componentId": "sc-ifAKCX",
                                      "isStatic": true,
                                      "lastClassName": "c3",
                                      "rules": Array [
                                        "
        margin-right: 16px;
        width: 72px;
        height: 72px;
        border: 1px solid #cacad1;
        border-radius: 4px;
      ",
                                      ],
                                    },
                                    "displayName": "styled.img",
                                    "foldedComponentIds": Array [],
                                    "render": [Function],
                                    "styledComponentId": "sc-ifAKCX",
                                    "target": "img",
                                    "toString": [Function],
                                    "warnTooManyClasses": [Function],
                                    "withComponent": [Function],
                                  }
                                }
                                forwardedRef={null}
                                src="image"
                              >
                                <img
                                  className="c3"
                                  src="image"
                                />
                              </StyledComponent>
                            </styled.img>
                            <styled.h1
                              color="#fabf00"
                            >
                              <StyledComponent
                                color="#fabf00"
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
        position: relative;
        letter-spacing: -0.18px;
        font-size: 18px;
        line-height: 24px;
      ",
                                      ],
                                    },
                                    "displayName": "styled.h1",
                                    "foldedComponentIds": Array [],
                                    "render": [Function],
                                    "styledComponentId": "sc-EHOje",
                                    "target": "h1",
                                    "toString": [Function],
                                    "warnTooManyClasses": [Function],
                                    "withComponent": [Function],
                                  }
                                }
                                forwardedRef={null}
                              >
                                <h1
                                  className="c4"
                                  color="#fabf00"
                                >
                                  name
                                  <Styled(styled.p)>
                                    <StyledComponent
                                      forwardedComponent={
                                        Object {
                                          "$$typeof": Symbol(react.forward_ref),
                                          "attrs": Array [],
                                          "componentStyle": ComponentStyle {
                                            "componentId": "sc-gzVnrw",
                                            "isStatic": true,
                                            "lastClassName": "c5",
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
        font-size: 12px;
        line-height: 16px;
        border-radius: 4px;
        color: #a6a7b3;
        letter-spacing: 0.13px;
        font-weight: 400;
      ",
                                            ],
                                          },
                                          "displayName": "Styled(styled.p)",
                                          "foldedComponentIds": Array [
                                            "sc-bZQynM",
                                          ],
                                          "render": [Function],
                                          "styledComponentId": "sc-gzVnrw",
                                          "target": "p",
                                          "toString": [Function],
                                          "warnTooManyClasses": [Function],
                                          "withComponent": [Function],
                                        }
                                      }
                                      forwardedRef={null}
                                    >
                                      <p
                                        className="c5"
                                      >
                                        code
                                      </p>
                                    </StyledComponent>
                                  </Styled(styled.p)>
                                </h1>
                              </StyledComponent>
                            </styled.h1>
                          </figure>
                        </StyledComponent>
                      </Styled(styled.figure)>
                    </div>
                  </StyledComponent>
                </styled.div>
              </InfoColumn>
              <QuantityColumn
                quantity={10}
                updateCounter={[MockFunction]}
              >
                <styled.div
                  width="20%"
                >
                  <StyledComponent
                    forwardedComponent={
                      Object {
                        "$$typeof": Symbol(react.forward_ref),
                        "attrs": Array [],
                        "componentStyle": ComponentStyle {
                          "componentId": "sc-bwzfXH",
                          "isStatic": false,
                          "lastClassName": "c11",
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
                        "styledComponentId": "sc-bwzfXH",
                        "target": "div",
                        "toString": [Function],
                        "warnTooManyClasses": [Function],
                        "withComponent": [Function],
                      }
                    }
                    forwardedRef={null}
                    width="20%"
                  >
                    <div
                      className="c6"
                      width="20%"
                    >
                      <Styled(styled.button)
                        color="#fabf00"
                        onClick={[Function]}
                      >
                        <StyledComponent
                          color="#fabf00"
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-dnqmqq",
                                "isStatic": false,
                                "lastClassName": "c7",
                                "rules": Array [
                                  "
        font-size: 20px;
        line-height: 25px;
      ",
                                  "
        padding: 0 8px;
        height: 40px;
        border: none;
        background: transparent;
        color: ",
                                  [Function],
                                  ";
        font-weight: bold;
        cursor: pointer;
      ",
                                ],
                              },
                              "displayName": "Styled(styled.button)",
                              "foldedComponentIds": Array [
                                "sc-htoDjs",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-dnqmqq",
                              "target": "button",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                          onClick={[Function]}
                        >
                          <button
                            className="c7"
                            color="#fabf00"
                            onClick={[Function]}
                          >
                            -
                          </button>
                        </StyledComponent>
                      </Styled(styled.button)>
                      <Styled(styled.input)
                        min="0"
                        onChange={[Function]}
                        type="number"
                        value={10}
                      >
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-gZMcBi",
                                "isStatic": true,
                                "lastClassName": "c8",
                                "rules": Array [
                                  "
        font-size: 14px;
        line-height: 17px;
      ",
                                  "
        width: 40px;
        height: 40px;
        border: 2px solid #dbdbe0;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        line-height: 17px;
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        [type=number] {
          -moz-appearance:textfield;
        }
      ",
                                ],
                              },
                              "displayName": "Styled(styled.input)",
                              "foldedComponentIds": Array [
                                "sc-iwsKbI",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-gZMcBi",
                              "target": "input",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={
                            Object {
                              "current": .c0 {
        font-size: 14px;
        line-height: 17px;
        width: 40px;
        height: 40px;
        border: 2px solid #dbdbe0;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        line-height: 17px;
      }

      .c0::-webkit-outer-spin-button,
      .c0::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .c0 [type=number] {
        -moz-appearance: textfield;
      }

      <input
                                class="c0"
                                min="0"
                                type="number"
                                value="10"
                              />,
                            }
                          }
                          min="0"
                          onChange={[Function]}
                          type="number"
                          value={10}
                        >
                          <input
                            className="c8"
                            min="0"
                            onChange={[Function]}
                            type="number"
                            value={10}
                          />
                        </StyledComponent>
                      </Styled(styled.input)>
                      <Styled(styled.button)
                        color="#fabf00"
                        onClick={[Function]}
                      >
                        <StyledComponent
                          color="#fabf00"
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-dnqmqq",
                                "isStatic": false,
                                "lastClassName": "c7",
                                "rules": Array [
                                  "
        font-size: 20px;
        line-height: 25px;
      ",
                                  "
        padding: 0 8px;
        height: 40px;
        border: none;
        background: transparent;
        color: ",
                                  [Function],
                                  ";
        font-weight: bold;
        cursor: pointer;
      ",
                                ],
                              },
                              "displayName": "Styled(styled.button)",
                              "foldedComponentIds": Array [
                                "sc-htoDjs",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-dnqmqq",
                              "target": "button",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                          onClick={[Function]}
                        >
                          <button
                            className="c7"
                            color="#fabf00"
                            onClick={[Function]}
                          >
                            +
                          </button>
                        </StyledComponent>
                      </Styled(styled.button)>
                    </div>
                  </StyledComponent>
                </styled.div>
              </QuantityColumn>
              <PriceColumn
                currency="USD"
                price={10}
              >
                <styled.div>
                  <StyledComponent
                    forwardedComponent={
                      Object {
                        "$$typeof": Symbol(react.forward_ref),
                        "attrs": Array [],
                        "componentStyle": ComponentStyle {
                          "componentId": "sc-bwzfXH",
                          "isStatic": false,
                          "lastClassName": "c11",
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
                      className="c6"
                    >
                      <Styled(styled.span)>
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-jzJRlG",
                                "isStatic": false,
                                "lastClassName": "c9",
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
                                "sc-gqjmRU",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-jzJRlG",
                              "target": "span",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <span
                            className="c9"
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
                                "componentId": "sc-fjdhpX",
                                "isStatic": true,
                                "lastClassName": "c10",
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
                                "sc-gqjmRU",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-fjdhpX",
                              "target": "span",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <span
                            className="c10"
                          >
                            USD
                          </span>
                        </StyledComponent>
                      </Styled(styled.span)>
                    </div>
                  </StyledComponent>
                </styled.div>
              </PriceColumn>
              <TotalColumn
                currency="USD"
                price={10}
                quantity={10}
              >
                <styled.div
                  width="15%"
                >
                  <StyledComponent
                    forwardedComponent={
                      Object {
                        "$$typeof": Symbol(react.forward_ref),
                        "attrs": Array [],
                        "componentStyle": ComponentStyle {
                          "componentId": "sc-bwzfXH",
                          "isStatic": false,
                          "lastClassName": "c11",
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
                        "styledComponentId": "sc-bwzfXH",
                        "target": "div",
                        "toString": [Function],
                        "warnTooManyClasses": [Function],
                        "withComponent": [Function],
                      }
                    }
                    forwardedRef={null}
                    width="15%"
                  >
                    <div
                      className="c11"
                      width="15%"
                    >
                      <Styled(styled.span)>
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-jzJRlG",
                                "isStatic": false,
                                "lastClassName": "c9",
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
                                "sc-gqjmRU",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-jzJRlG",
                              "target": "span",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <span
                            className="c9"
                          >
                            100
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
                                "componentId": "sc-fjdhpX",
                                "isStatic": true,
                                "lastClassName": "c10",
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
                                "sc-gqjmRU",
                              ],
                              "render": [Function],
                              "styledComponentId": "sc-fjdhpX",
                              "target": "span",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <span
                            className="c10"
                          >
                            USD
                          </span>
                        </StyledComponent>
                      </Styled(styled.span)>
                    </div>
                  </StyledComponent>
                </styled.div>
              </TotalColumn>
            </li>
          </StyledComponent>
        </styled.li>
      </Product>
    `);
  });

  it('it renders Product with props', () => {
    expect(product!.props().img).toBe('image');
    expect(product!.props().name).toBe('name');
    expect(product!.props().code).toBe('code');
    expect(product!.props().quantity).toBe(10);
    expect(product!.props().onUpdateCounter).toStrictEqual(onUpdateCounter);
    expect(product!.props().price).toBe(10);
    expect(product!.props().currency).toBe('USD');
  });
});
