import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { isLoggedInVar } from "./apollo";

const App: React.FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
