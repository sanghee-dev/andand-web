import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/styles";
import { GlobalStyles } from "styles/globalStyles";
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
