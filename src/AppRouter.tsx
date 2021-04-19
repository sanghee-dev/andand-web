import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "screens/Home";
import Login from "screens/Login";
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
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
