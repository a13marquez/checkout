import React from 'react'
import { StyledSectionWithPadding }
  from '@bit/a13marquez.styled-components.style-padded-section'
import { VisibleProductList } from './products-list'
import { ListHeader } from './products-list/list-header'

export const ProductsSection = () => (
  <StyledSectionWithPadding>
    <ListHeader />
    <VisibleProductList />
  </StyledSectionWithPadding>
)
