import React from 'react';
import StyledRow from '@bit/a13marquez.styled-components.styled-row';

interface SummaryDiscountProps {
  text: string;
  discount: number;
  currency: string
}

export const SummaryDiscount: React.FunctionComponent<SummaryDiscountProps> = 
  ({text, discount, currency}) => (
  <StyledRow>
    <span>{text}</span>
    <span>{discount > 0 ? '-': ''}{discount.toLocaleString()}{currency}</span>
  </StyledRow>
)