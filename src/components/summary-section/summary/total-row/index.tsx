import * as React from 'react';

import StyledRightAlignWrapper 
  from '@bit/a13marquez.styled-components.styled-right-align-wrapper';
import StyledStandardSpan 
  from '@bit/a13marquez.styled-components.styled-standard-span';
import StyledStandardList 
  from '@bit/a13marquez.styled-components.styled-standard-list';
import StyledRow from '@bit/a13marquez.styled-components.styled-row';
import StyledButton 
  from '@bit/a13marquez.styled-components.styled-button';

interface SummaryTotalProps {
  totalPrice: number;
  currency: string;
}


export const TotalRow: React.FunctionComponent<SummaryTotalProps> = ({totalPrice, currency}) => (
  <StyledRightAlignWrapper>
    <StyledStandardList>
      <StyledRow>
        <StyledStandardSpan style={{
          flexBasis: '100%',
          textTransform: 'uppercase',
        }}>Total cost</StyledStandardSpan>
        <StyledStandardSpan style={{ fontWeight: 'bold' }}>
          {totalPrice.toLocaleString()}{currency}
        </StyledStandardSpan>
      </StyledRow>
    </StyledStandardList>
    <StyledButton 
      background='#fabf00'
      >Checkout</StyledButton>
  </StyledRightAlignWrapper>
);
