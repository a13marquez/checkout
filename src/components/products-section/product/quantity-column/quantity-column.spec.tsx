import *  as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';

import { QuantityColumn, QuantityColumnPropsInterface } from './index';

describe('quantityColumn Component: ', () => {
  let quantityColumn: ReactWrapper<QuantityColumnPropsInterface> | null;
  const onUpdateCounter = jest.fn(i => i + 1);
  beforeEach(() => {
    quantityColumn = mount(
      <QuantityColumn quantity={10} updateCounter={onUpdateCounter} />
    );
  });
  afterEach(() => {
    quantityColumn = null;
  });
  it('it renders ProductPrice component', () => {
    expect(quantityColumn).toMatchInlineSnapshot(`
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

      .c1 {
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

      .c2 {
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

      .c2::-webkit-outer-spin-button,
      .c2::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .c2 [type=number] {
        -moz-appearance: textfield;
      }

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
            width="20%"
          >
            <div
              className="c0"
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
                        "componentId": "sc-htpNat",
                        "isStatic": false,
                        "lastClassName": "c1",
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
                        "sc-bwzfXH",
                      ],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
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
                    className="c1"
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
                        "componentId": "sc-ifAKCX",
                        "isStatic": true,
                        "lastClassName": "c2",
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
                        "sc-bxivhb",
                      ],
                      "render": [Function],
                      "styledComponentId": "sc-ifAKCX",
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
                    className="c2"
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
                        "componentId": "sc-htpNat",
                        "isStatic": false,
                        "lastClassName": "c1",
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
                        "sc-bwzfXH",
                      ],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
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
                    className="c1"
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
    `);
  });

  it('it renders Product Price with props', () => {
    expect(quantityColumn!.props().quantity).toStrictEqual(10);
    expect(quantityColumn!.props().updateCounter).toStrictEqual(
      onUpdateCounter
    );
  });

  it('it call onDecrement when decrement Button is clicked', () => {
    quantityColumn!
      .find('button')
      .at(0)
      .simulate('click');
    expect(onUpdateCounter.mock.calls).toHaveLength(1);
    expect(onUpdateCounter).toHaveBeenCalledWith(-1);
  });

  it('it call onIncrement when increment Button is clicked', () => {
    quantityColumn!
      .find('button')
      .at(1)
      .simulate('click');
    expect(onUpdateCounter.mock.calls).toHaveLength(2);
    expect(onUpdateCounter).toHaveBeenCalledWith(1);
  });
});
