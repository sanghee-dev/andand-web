import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accent: string;
    accentLight: string;
    accentDark: string;
    backgroundColor: string;
    facebookColor: string;
    errorColor: string;

    h1: string;
    h2: string;
    h3: string;

    fontColor: string;
    fontColorLight: string;
    fontHeavy: string;

    borderColor: string;
    borderColorDark: string;
    border: string;
    borderDark: string;

    margin: string;
    marginDouble: string;
    marginTriple: string;
    marginSixTimes: string;
    marginTopBottom: string;
    marginTopBottomDouble: string;

    opacity: string;
    opacityDouble: string;
    transition: string;
  }
}
