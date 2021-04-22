import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accent: string;
    accentLight: string;
    accentDark: string;
    backgroundColor: string;
    facebookColor: string;

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
    marginTopBottom: string;
    marginTopBottomDouble: string;

    opacity: string;
    transition: string;
  }
}
