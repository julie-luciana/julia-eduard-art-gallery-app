import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
   --color-main: #f8f9fa;
   --color-primary: #141414;
   --color-secondary: #ffffff;
   --color-hover: lightgrey;
   --color-active: grey;
   --color-background-details: #141414;
   --color-button-hover: #EEC643;}


  body {
    margin: 0;
    background-color: #EBEBEB;
    font-family: Helvetica, Arial, sans-serif;
  }
`;
