import * as React from 'react';
import styled  from 'styled-components';
import gitHubMark from '../../img/GitHub-Mark.png';

const StyledGitHubImg = styled.img`
  width: 2.5rem;
  position: absolute;
  top:10;
  left: 95%;
`;


export const GithubIcon = () => (
  <a href="https://github.com/a13marquez/checkout"  
     rel="noopener noreferrer">
    <StyledGitHubImg alt="github-project-link" src={gitHubMark}/>  
  </a>
);
