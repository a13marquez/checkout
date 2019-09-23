import *  as React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { TotalColumn } from './index';

describe('totalColumn Component: ', () => {
  let totalColumn;
  beforeEach(() => {
    totalColumn = mount(
      <TotalColumn price={10} quantity={10} currency="USD" />
    );
  });
  afterEach(() => {
    totalColumn = null;
  });
  it('it renders ProductPrice component', () => {
    expect(totalColumn).toMatchInlineSnapshot(`
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
        width: 15%;
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
            width="15%"
          >
            <div
              className="c0"
              width="15%"
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
                    USD
                  </span>
                </StyledComponent>
              </Styled(styled.span)>
            </div>
          </StyledComponent>
        </styled.div>
      </TotalColumn>
    `);
  });

  it('it renders Product Price with props', () => {
    expect(totalColumn.props().price).toStrictEqual(10);
    expect(totalColumn.props().quantity).toStrictEqual(10);
    expect(totalColumn.props().currency).toStrictEqual('USD');
  });
});
