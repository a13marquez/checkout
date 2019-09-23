import *  as React from 'react';
import StyledStandardColumn
  from '@bit/a13marquez.styled-components.styled-standard-column';
import StyledButton  
  from '@bit/a13marquez.styled-components.styled-transparent-button';
import StyledQuantityInput 
  from '@bit/a13marquez.styled-components.styled-quantity-input';



export interface QuantityColumnPropsInterface {
  quantity: number
  updateCounter: (number: number) => () => {}
}

export const QuantityColumn: 
React.FunctionComponent<QuantityColumnPropsInterface> = 
({quantity, updateCounter}) => {
  const [value, setValue]: [number, React.Dispatch<number>] = 
    React.useState(quantity);
  React.useEffect( ()=> { 
    setValue(quantity);
  }, [quantity]);
  const ref = React.useRef<HTMLInputElement>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber: number = parseInt(event.target.value, 10);
    if(inputNumber > 0) {
      const difference: number = inputNumber - value;
      updateCounter(difference);
      setValue(inputNumber);
    }
  };
  const onDecrement = () => {
    if(ref.current && parseInt(ref.current.value, 10) > 0) {
      updateCounter(-1);
    }
  };
  return (  
  <StyledStandardColumn width='20%'>
    <StyledButton onClick={onDecrement}
                  color="#fabf00">
                    -
    </StyledButton>
    <StyledQuantityInput ref={ref}
                         type="number"
                         min="0"
                         value={value} 
                         onChange={onChange} />
    <StyledButton onClick={() => updateCounter(1)}
                  color="#fabf00">
                    +
    </StyledButton>
  </StyledStandardColumn>);
};