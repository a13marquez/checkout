import React from 'react';

import StyledStandardH2
  from '@bit/a13marquez.styled-components.styled-standard-h2';
import StyledHalfBorderWrapper 
  from '@bit/a13marquez.styled-components.styled-half-border-wrapper'
  
import { BorderedListWithPadding } from '../../../Shared';
import { PricingRuleInterface, ProductDiscountInterface } from '../../../../interfaces';

import { SummaryDiscount } from './discount-row';
import StyledStandardList from '@bit/a13marquez.styled-components.styled-standard-list';

interface  DiscountsTablePropsInterface {
  discounts: PricingRuleInterface;
}

export const DiscountsTable: 
  React.FunctionComponent<DiscountsTablePropsInterface> = (props) => {
  const showDiscounts = (discounts: PricingRuleInterface) => {
    return Object.keys(discounts).map( (discountType: string) => (
      discounts[discountType]
        .map((discount: ProductDiscountInterface, index) => (
        <SummaryDiscount
          key={index}
          text={discount.text}
          discount={discount.discountApplied}
          currency={'€'}
        ></SummaryDiscount>
      ))
    ));
  }

  return (
    <StyledHalfBorderWrapper>
      <StyledStandardH2 backgroundColor="f3f3f3">Discounts</StyledStandardH2>
      <StyledStandardList>
        {showDiscounts(props.discounts)}
      </StyledStandardList>
    </StyledHalfBorderWrapper>
  )
  
}

