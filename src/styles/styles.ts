import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  accent: "rgb(0,149,246)",
  accentLight: "rgb(145, 211, 255)",
  accentDark: "rgb(0, 118, 197)",
  backgroundColor: "rgb(250,250,250)",
  facebookColor: "rgb(56,81,133)",
  errorColor: "rgb(240,73,86)",

  h1: "38px",
  h2: "14px",
  h3: "12px",

  fontColor: "rgb(40,40,40)",
  fontColorLight: "rgb(120,120,120)",
  fontHeavy: "600",

  borderColor: "rgb(220,220,220)",
  borderColorDark: "rgb(150,150,150)",
  border: "1px solid rgb(220,220,220)",
  borderDark: "1px solid rgb(150,150,150)",

  margin: "6px",
  marginDouble: "12px",
  marginTriple: "18px",
  marginTopBottom: "6px 0",
  marginTopBottomDouble: "12px 0",

  opacity: "0.7",
  opacityDouble: "0.4",
  transition: "all 0.1s ease-in-out",
};

export const darkTheme: DefaultTheme = lightTheme;
