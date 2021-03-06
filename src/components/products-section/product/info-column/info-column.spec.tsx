import *  as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { InfoColumn, InfoColumnPropsInterface } from './index';

describe('infoColumn Component: ', () => {
  let infoColumn: ReactWrapper<InfoColumnPropsInterface> | null;
  beforeEach(() => {
    infoColumn = mount(<InfoColumn img="image" name="name" code="code" />);
  });
  afterEach(() => {
    infoColumn = null;
  });
  it('it renders InfoColumn component', () => {
    expect(infoColumn).toMatchInlineSnapshot(`
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
        width: 45%;
      }

      .c0:nth-child(n + 2) {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
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
        -webkit-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
      }

      .c2 {
        margin-right: 16px;
        width: 72px;
        height: 72px;
        border: 1px solid #cacad1;
        border-radius: 4px;
      }

      .c3 {
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

      .c4 {
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
            width="45%"
          >
            <div
              className="c0"
              width="45%"
            >
              <Styled(styled.figure)>
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
                        "sc-bwzfXH",
                      ],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "figure",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <figure
                    className="c1"
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
                              "componentId": "sc-bxivhb",
                              "isStatic": true,
                              "lastClassName": "c2",
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
                            "styledComponentId": "sc-bxivhb",
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
                          className="c2"
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
                              "componentId": "sc-ifAKCX",
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
                            "styledComponentId": "sc-ifAKCX",
                            "target": "h1",
                            "toString": [Function],
                            "warnTooManyClasses": [Function],
                            "withComponent": [Function],
                          }
                        }
                        forwardedRef={null}
                      >
                        <h1
                          className="c3"
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
                                    "componentId": "sc-bZQynM",
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
                                    "sc-EHOje",
                                  ],
                                  "render": [Function],
                                  "styledComponentId": "sc-bZQynM",
                                  "target": "p",
                                  "toString": [Function],
                                  "warnTooManyClasses": [Function],
                                  "withComponent": [Function],
                                }
                              }
                              forwardedRef={null}
                            >
                              <p
                                className="c4"
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
    `);
  });

  it('it renders Product Column with props', () => {
    expect(infoColumn!.props().img).toStrictEqual('image');
    expect(infoColumn!.props().name).toStrictEqual('name');
    expect(infoColumn!.props().code).toStrictEqual('code');
  });
});
