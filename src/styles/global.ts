import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  
  box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }
  body {
    background-color: ${(props) => props.theme.colors.base.background};
    color: ${(props) => props.theme.colors.base.text};

    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;
