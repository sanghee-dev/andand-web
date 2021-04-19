import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/styles";
import Home from "screens/Home";
import Login from "screens/Login";
import NotFound from "screens/NotFound";
import { isLoggedInVar, darkModeVar } from "apollo";

interface IContainerProps {
  floating: boolean;
}

const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
  border-bottom: ${(props) =>
    props.floating ? "1px solid blue" : "1px solid red"};
`;

const App: React.FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container floating={true}>Andand</Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/*" component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
