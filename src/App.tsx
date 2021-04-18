import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App: React.FC = () => {
  const isLoggedIn = false;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/potato">
          <div>potato</div>
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
