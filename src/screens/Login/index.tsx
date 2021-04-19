import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/styles";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "apollo";

const Title = styled.h1`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
`;

const Login = () => {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(!darkMode)}>
        {darkMode ? "To light" : "To dark"}
      </button>
    </ThemeProvider>
  );
};

export default Login;
