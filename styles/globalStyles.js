import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.theme.font.fontFamily};
    color: ${props => props.theme.colors.font};
    height: 100vh;
    @media ${props => props.theme.bp.sm} {
      background: yellow;
    } 
  }

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
    border-radius: 0px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgray; 
    border-radius: 0px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white; 
  }

  
`;

export default GlobalStyles;

