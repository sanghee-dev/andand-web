import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

const App: React.FC = () => {
  const isLoggedIn = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
