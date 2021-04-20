import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "screens/Home";
import Login from "screens/Login";
import SignUp from "screens/SignUp";
import NotFound from "screens/NotFound";

interface IProps {
  isLoggedIn: boolean;
}

const AppRouter = ({ isLoggedIn }: IProps) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        {!isLoggedIn ? <Route path="/Sign-up" component={SignUp} /> : null}
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
