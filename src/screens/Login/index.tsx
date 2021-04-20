import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import routes from "router/routes";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "apollo";
import { lightTheme, darkTheme } from "styles/styles";
import { Container, MainBox } from "components/shared";
import Title from "components/auth/Title";
import InputUnit from "components/auth/InputUnit";
import Divider from "components/auth/Divider";
import InputButton from "components/auth/InputButton";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";

const MainContainer = styled(MainBox)`
  height: 380px;
`;

export default function LoginPresenter() {
  const darkMode = useReactiveVar(darkModeVar);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const onUsernameChange = (event: any): void => {
    setUsername(event.target.value);
    setUsernameError("");
  };
  const handleSubmit = (event: any): void => {
    event.preventDefault();
    if (username?.length < 1) {
      setUsernameError("Not empty plz.");
    } else if (username.length < 10) {
      setUsernameError("Too short.");
    } else {
      setUsername("");
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <MainContainer>
          <Title />
          <h2>{usernameError}</h2>
          <form onSubmit={handleSubmit}>
            <InputUnit
              onChange={onUsernameChange}
              label="Username, or email"
              type="username"
              value={username}
            />
            <InputUnit label="Password" type="password" />
            <InputButton label="Log In" disabled={username.length < 10} />
          </form>
          <Divider />
          <InputButton
            label="Log in with Facebook"
            icon="faFacebookSquare"
            color="rgb(56,81,133)"
            transparent={true}
          />
          <InputButton
            label="Forgot password?"
            transparent={true}
            color="black"
            fontLight={true}
          />
        </MainContainer>
        <AccountBox
          text="Don't have an account?"
          label="Sign up"
          linkTo={routes.signUp}
        />
        <AppStore />
      </Container>
    </ThemeProvider>
  );
}
