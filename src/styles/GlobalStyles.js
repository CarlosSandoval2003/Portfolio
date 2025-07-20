import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0f172a;
    font-family: 'Poppins', sans-serif;
    color: #f1f5f9;
    overflow-x: hidden;
  }

  a {
    color: #38bdf8;
    text-decoration: none;
  }

  h1, h2, h3 {
    font-weight: 700;
  }
`;
