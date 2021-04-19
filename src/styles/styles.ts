import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  fontColor: "blue",
};

export const darkTheme: DefaultTheme = {
  bgColor: "blue",
  fontColor: "white",
};

export const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.fontColor};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  input{
    all:unset;
    border: 1px solid ${(props) => props.theme.fontColor};
  }
  h1 {
    font-size: 24px;
    font-weight: 300;
    line-height: 1.1;
  }
`;
