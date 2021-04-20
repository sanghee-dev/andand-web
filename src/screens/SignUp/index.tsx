import styled, { ThemeProvider } from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "apollo";
import { lightTheme, darkTheme } from "styles/styles";

const Title = styled.h1`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

const SignUp = () => {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Title>SignUp</Title>
    </ThemeProvider>
  );
};

export default SignUp;
