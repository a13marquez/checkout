import *  as React from 'react';
import StyledBorderedHeader 
  from '@bit/a13marquez.styled-components.styled-bordered-header'; 
import StyledList from '@bit/a13marquez.styled-components.styled-list';
import StyledTitleRow 
  from '@bit/a13marquez.styled-components.styled-title-row';
import StyledStandardColumn 
  from '@bit/a13marquez.styled-components.styled-standard-column';

export const ListHeader = () => (
  <>
    <StyledBorderedHeader 
      color='#000'
      borderTop='none'
      borderLeft='none'
      borderRight='none'
      >
      Shopping cart
    </StyledBorderedHeader>
    <StyledList tableHead="true">
    <StyledTitleRow >
      <StyledStandardColumn width='45%'>Product Details</StyledStandardColumn>
      <StyledStandardColumn width='20%'>Quantity</StyledStandardColumn>
      <StyledStandardColumn width='20%'>Price</StyledStandardColumn>
      <StyledStandardColumn width='15%'>Total</StyledStandardColumn>
    </StyledTitleRow>
  </StyledList>
  </>
);