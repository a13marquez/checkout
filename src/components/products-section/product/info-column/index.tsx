import React from 'react';

import StyledStandardColumn 
  from '@bit/a13marquez.styled-components.styled-standard-column';
import StyledCenteredImageWrapper
  from '@bit/a13marquez.styled-components.styled-centered-image-wrapper';
import StyleBorderedImage
  from '@bit/a13marquez.styled-components.styled-bordered-img/dist/styled-bordered-img/StyledBorderedImg';
import StyledStandardH1
  from '@bit/a13marquez.styled-components.styled-standard-h1';
import StyledSmallTextParagraph 
  from '@bit/a13marquez.styled-components.styled-small-text-paragraph';

export interface InfoColumnPropsInterface {
  img: any;
  name: string;
  code: string;
}

export const InfoColumn: React.FunctionComponent<InfoColumnPropsInterface> = 
  ({img, name, code}) => (
  <StyledStandardColumn width='45%'>
    <StyledCenteredImageWrapper>
      <StyleBorderedImage src={img} />
        <StyledStandardH1 color="#fabf00">
          {name}
          <StyledSmallTextParagraph>{code}</StyledSmallTextParagraph>
        </StyledStandardH1>
    </StyledCenteredImageWrapper>
  </StyledStandardColumn>
)