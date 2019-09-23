import *  as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { ItemsRow } from '.';

describe('itemsRow Component: ', () => {
  let itemsRow;
  beforeEach(() => {
    itemsRow = mount(<ItemsRow price={10} items={50} currency="USD" />);
  });
  afterEach(() => {
    itemsRow = null;
  });
  it('it renders ItemsRow component', () => {
    expect(itemsRow).toMatchInlineSnapshot(`
      .c1 {
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

      .c1 *:nth-child(2) {
        font-weight: bold;
      }

      .c1 + li {
        margin-top: 20px;
      }

      .c2 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
      }

      .c4 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        margin-left: 4px;
      }

      .c3 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        color: #000000;
        font-size: 16px;
        font-weight: bold;
      }

      .c0 {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        font: 100%;
        list-style: none;
        border-bottom: 1px solid rgba(33,34,64,0.16);
        padding: 32px 0;
      }

      <ItemsRow
        currency="USD"
        items={50}
        price={10}
      >
        <Styled(Styled(styled.ul))>
          <StyledComponent
            forwardedComponent={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "attrs": Array [],
                "componentStyle": ComponentStyle {
                  "componentId": "sc-bZQynM",
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
        list-style: none;
      ",
                    "
        ",
                    "
        border-bottom: 1px solid rgba(33, 34, 64, 0.16);
      ",
                    "
      ",
                    "
        padding: 32px 0;
      ",
                  ],
                },
                "displayName": "Styled(Styled(styled.ul))",
                "foldedComponentIds": Array [
                  "sc-htpNat",
                  "sc-bxivhb",
                ],
                "render": [Function],
                "styledComponentId": "sc-bZQynM",
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
                    className="c1"
                  >
                    <styled.span>
                      <StyledComponent
                        forwardedComponent={
                          Object {
                            "$$typeof": Symbol(react.forward_ref),
                            "attrs": Array [],
                            "componentStyle": ComponentStyle {
                              "componentId": "sc-bwzfXH",
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
                      >
                        <span
                          className="c2"
                        >
                          50
                           Items
                        </span>
                      </StyledComponent>
                    </styled.span>
                    <Styled(styled.span)
                      fontWeight="bold"
                    >
                      <StyledComponent
                        fontWeight="bold"
                        forwardedComponent={
                          Object {
                            "$$typeof": Symbol(react.forward_ref),
                            "attrs": Array [],
                            "componentStyle": ComponentStyle {
                              "componentId": "sc-EHOje",
                              "isStatic": false,
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
                          className="c3"
                          fontWeight="bold"
                        >
                          10
                          <Styled(styled.span)>
                            <StyledComponent
                              forwardedComponent={
                                Object {
                                  "$$typeof": Symbol(react.forward_ref),
                                  "attrs": Array [],
                                  "componentStyle": ComponentStyle {
                                    "componentId": "sc-ifAKCX",
                                    "isStatic": true,
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
                                className="c4"
                              >
                                USD
                              </span>
                            </StyledComponent>
                          </Styled(styled.span)>
                        </span>
                      </StyledComponent>
                    </Styled(styled.span)>
                  </li>
                </StyledComponent>
              </styled.li>
            </ul>
          </StyledComponent>
        </Styled(Styled(styled.ul))>
      </ItemsRow>
    `);
  });

  it('it renders ItemsRow with props', () => {
    expect(itemsRow.props().items).toBe(50);
    expect(itemsRow.props().currency).toBe('USD');
    expect(itemsRow.props().price).toBe(10);
  });
});
