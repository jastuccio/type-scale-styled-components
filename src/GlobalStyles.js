import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Cormorant+Infant:400,700|Roboto');
  body {
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Infant', serif;
  }
`

export default GlobalStyles