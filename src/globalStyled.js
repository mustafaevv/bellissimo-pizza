import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: red;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1{
    font-size: 36px;
    text-align: center;
  }
`

export default GlobalStyled