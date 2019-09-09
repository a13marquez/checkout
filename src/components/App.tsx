import React from 'react';
import StyledCenteredMain
  from '@bit/a13marquez.styled-components.styled-centered-main';
import { ProductsSection } from './products-section';
import { VisibleSummarySection } from './summary-section';

export const App: React.FunctionComponent = () => (
  <StyledCenteredMain>
    <ProductsSection />
    <VisibleSummarySection />
  </StyledCenteredMain>
);
