import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "styles/styles";
import { useReactiveVar } from "@apollo/client";
import AppRouter from "AppRouter";
import { isLoggedInVar, darkModeVar } from "apollo";

const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppRouter isLoggedIn={isLoggedIn} />
    </ThemeProvider>
  );
};

export default App;
