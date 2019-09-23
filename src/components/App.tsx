import *  as React from 'react';
import StyledCenteredMain
  from '@bit/a13marquez.styled-components.styled-centered-main';
import { ProductsSection } from './products-section';
import { VisibleSummarySection } from './summary-section';
import { GithubIcon } from './GithubIcon';

export const App: React.FunctionComponent = () => (
  <>
    <GithubIcon/>  
    <StyledCenteredMain>
      <ProductsSection />
      <VisibleSummarySection />
    </StyledCenteredMain>
  </>
);
