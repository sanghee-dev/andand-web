import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useHistory } from "react-router-dom";

const TOKEN = "token";
const DARK_MODE = "DARK_MODE";

const isLoggedIn = Boolean(localStorage.getItem(TOKEN));
export const isLoggedInVar = makeVar(isLoggedIn);
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

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const isDarkMode = Boolean(localStorage.getItem(DARK_MODE));
export const darkModeVar = makeVar(isDarkMode);
export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "true");
  darkModeVar(true);
};
export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};
