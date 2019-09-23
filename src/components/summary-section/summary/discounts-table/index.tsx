import *  as React from 'react';

import StyledStandardH2
  from '@bit/a13marquez.styled-components.styled-standard-h2';
import StyledHalfBorderWrapper 
  from '@bit/a13marquez.styled-components.styled-half-border-wrapper';
  
import StyledStandardList from '@bit/a13marquez.styled-components.styled-standard-list';
import { PricingRuleInterface, ProductDiscountInterface } from '../../../../interfaces';

import { SummaryDiscount } from './discount-row';

interface  DiscountsTablePropsInterface {
  discounts: PricingRuleInterface;
}

export const DiscountsTable: 
React.FunctionComponent<DiscountsTablePropsInterface> = ({discounts}) => {
  const showDiscounts = (productDiscounts: PricingRuleInterface) => {
    return Object.keys(productDiscounts).map( (discountType: string) => (
      productDiscounts[discountType]
        .map((discount: ProductDiscountInterface) => (
        <SummaryDiscount
          key={discount.text}
          text={discount.text}
          discount={discount.discountApplied}
          currency="€"
         />
        ))
    ));
  };

  return (
    <StyledHalfBorderWrapper>
      <StyledStandardH2 backgroundColor="f3f3f3">Discounts</StyledStandardH2>
      <StyledStandardList>
        {showDiscounts(discounts)}
      </StyledStandardList>
    </StyledHalfBorderWrapper>
  );
  
};

