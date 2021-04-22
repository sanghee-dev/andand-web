import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
    overflow-y:scroll;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: 0;
    outline: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  input {
    all:unset;
    border: ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 2px;
    height: 38px;
    padding: 0 8px;
    &::placeholder{
      color: rgb(160,160,160);
    }
    &:focus {
      border: ${(props) => props.theme.borderDark};
    }
  }
  h1 {
    font-size: ${(props) => props.theme.h1};
    font-weight: 300;
    line-height: 1.2;
  }
  h2 {
    font-size: ${(props) => props.theme.h2};
    line-height: 1.2;
  }
  h3 {
    font-size: ${(props) => props.theme.h3};
    line-height: 1.2;
  }
`;
