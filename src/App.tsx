import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/styles";
import { GlobalStyles } from "styles/globalStyles";
import { useReactiveVar } from "@apollo/client";
import AppRouter from "router/AppRouter";
import { isLoggedInVar, darkModeVar } from "apollo";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
