import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  accent: "rgb(0,149,246)",
  accentLight: "rgb(145, 211, 255)",
  accentDark: "rgb(0, 118, 197)",
  backgroundColor: "rgb(250,250,250)",
  facebookColor: "rgb(56,81,133)",

  fontColor: "rgb(40,40,40)",
  fontColorLight: "rgb(120,120,120)",
  fontHeavy: "600",

  borderColor: "rgb(220,220,220)",
  borderColorDark: "rgb(150,150,150)",
  border: "1px solid rgb(220,220,220)",
  borderDark: "1px solid rgb(150,150,150)",

  opacity: "0.6",
  transition: "all 0.1s ease-in-out",
};

export const darkTheme: DefaultTheme = lightTheme;
