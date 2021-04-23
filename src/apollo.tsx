import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { useHistory } from "react-router-dom";

const TOKEN = "token";

const isLoggedIn = Boolean(localStorage.getItem(TOKEN));
export const isLoggedInVar = makeVar(isLoggedIn);
export const darkModeVar = makeVar(false);

export const LogUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const LogUserOut = () => {
  localStorage.removeItem(TOKEN);
  const history = useHistory();
  history.replace("/");
  window.location.reload();
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
