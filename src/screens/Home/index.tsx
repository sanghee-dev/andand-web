import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/styles";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "apollo";

const Title = styled.h1`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

const Home = () => {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Title>Home</Title>
    </ThemeProvider>
  );
};

export default Home;
