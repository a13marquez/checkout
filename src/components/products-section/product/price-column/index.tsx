import React from 'react';
import StyledStandardColumn 
  from '@bit/a13marquez.styled-components.styled-standard-column'
import { StyledPrice, StyledCurrency } from '../../../Shared';

export interface PriceColumnPropsInterface {
  price: number;
  currency: string
}

export const PriceColumn: React.FunctionComponent<PriceColumnPropsInterface> = 
({price, currency}) => (
  <StyledStandardColumn>
    <StyledPrice>{price.toLocaleString()}</StyledPrice>
    <StyledCurrency>{currency}</StyledCurrency>
  </StyledStandardColumn>
)