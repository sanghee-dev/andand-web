import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    accent: string;
    accentLight: string;
    accentDark: string;
    backgroundColor: string;
    facebookColor: string;

    fontColor: string;
    fontHeavy: string;

    borderColor: string;
    borderColorDark: string;
    border: string;
    borderDark: string;

    opacity: string;
    transition: string;
  }
}
