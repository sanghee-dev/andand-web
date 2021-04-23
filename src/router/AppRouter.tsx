import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "router/routes";
import Home from "screens/Home";
import Login from "screens/Login";
import SignUp from "screens/SignUp";
import NotFound from "screens/NotFound";

interface IProps {
  isLoggedIn: boolean;
}

export default function AppRouter({ isLoggedIn }: IProps) {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        {!isLoggedIn ? <Route path={routes.signUp} component={SignUp} /> : null}
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}
