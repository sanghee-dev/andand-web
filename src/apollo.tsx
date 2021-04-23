import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
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

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
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
