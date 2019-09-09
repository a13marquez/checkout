import styled from 'styled-components';

import StyledStandardSpan
  from '@bit/a13marquez.styled-components.styled-standard-span';
import StyledBorderedList
  from '@bit/a13marquez.styled-components.styled-bordered-list';


export const StyledCurrency = styled(StyledStandardSpan)`
  margin-left: 4px;
`;

interface StyledPricePropsInterface {
  fontWeight?: string
}

export const StyledPrice = styled(StyledStandardSpan)<StyledPricePropsInterface>`
  color: #000000;
  font-size: 16px;
  font-weight: ${props => props.fontWeight || ''};
`;

export const BorderedListWithPadding = styled(StyledBorderedList)`
  padding: 32px 0;
`;
