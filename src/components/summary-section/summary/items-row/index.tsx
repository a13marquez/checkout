import *  as React from 'react';

import StyledRow from '@bit/a13marquez.styled-components.styled-row';
import StyledStandardSpan
  from '@bit/a13marquez.styled-components.styled-standard-span';
import { BorderedListWithPadding, StyledPrice, StyledCurrency } 
  from '../../../Shared';


interface SummaryItemsProps {
  items: number;
  price: number;
  currency: string;
}

export const ItemsRow: React.FunctionComponent<SummaryItemsProps> = ({items, price, currency}) => (
  <BorderedListWithPadding>
    <StyledRow>
      <StyledStandardSpan>{items} Items</StyledStandardSpan>
      <StyledPrice fontWeight='bold'>{price.toLocaleString()}
        <StyledCurrency>{currency}</StyledCurrency>
      </StyledPrice>
    </StyledRow>
  </BorderedListWithPadding>
);