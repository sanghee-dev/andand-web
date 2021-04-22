import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const TOKEN = "token";

const isLoggedIn = Boolean(localStorage.getItem(TOKEN));
export const isLoggedInVar = makeVar(isLoggedIn);
export const darkModeVar = makeVar(false);

export const logUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});
