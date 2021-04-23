import { DefaultTheme } from "styled-components";

const sharedProps = {
  accent: "rgb(0,149,246)",
  accentLight: "rgb(145, 211, 255)",
  accentDark: "rgb(0, 118, 197)",
  facebookColor: "rgb(56,81,133)",
  errorColor: "rgb(240,73,86)",

  h1: "38px",
  h2: "14px",
  h3: "12px",

  fontHeavy: "600",

  margin: "6px",
  marginDouble: "12px",
  marginTriple: "18px",
  marginSixTimes: "36px",
  marginTopBottom: "6px 0",
  marginTopBottomDouble: "12px 0",

  borderRadius: "4px",
  opacity: "0.7",
  opacityDouble: "0.4",
  transition: "all 0.1s ease-in-out",
};

export const lightTheme: DefaultTheme = {
  ...sharedProps,
  backgroundColor: "rgb(250,250,250)",

  fontColor: "rgb(40,40,40)",
  fontColorLight: "rgb(120,120,120)",

  borderColor: "rgb(230,230,230)",
  borderColorDark: "rgb(200,200,200)",
  border: "1px solid rgb(230,230,230)",
  borderDark: "1px solid rgb(200,200,200)",
};

export const darkTheme: DefaultTheme = {
  ...sharedProps,
  backgroundColor: "rgb(20,20,20)",

  fontColor: "rgb(210,210,210)",
  fontColorLight: "rgb(160,160,160)",

  borderColor: "rgb(100,100,100)",
  borderColorDark: "rgb(70,70,70)",
  border: "1px solid rgb(100,100,100)",
  borderDark: "1px solid rgb(70,70,70)",
};
