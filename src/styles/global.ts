import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background: #f5f6f7 ;
    color: #1c1e21;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px "Roboto Slab", serif;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
