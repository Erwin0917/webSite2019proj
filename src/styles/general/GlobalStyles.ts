import { createGlobalStyle } from 'styled-components';
import { resetStyle } from './reset';

export const GlobalStyles = createGlobalStyle`
  ${resetStyle}
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap&subset=latin-ext');

  html,
  body {
    font-family: 'Lato',
      sans-serif;
    font-size: 10px;
    font-variant-ligatures: none;
  }

  b {
    font-weight: bold;
    ;
  }

`;
