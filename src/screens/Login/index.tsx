import styled, { ThemeProvider } from "styled-components";
import routes from "router/routes";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "apollo";
import { lightTheme, darkTheme } from "styles/styles";
import { Container, MainBox, Form } from "components/shared";
import Title from "components/auth/Title";
import InputUnit from "components/auth/InputUnit";
import Divider from "components/auth/Divider";
import InputButton from "components/auth/InputButton";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";

const MainContainer = styled(MainBox)`
  height: 380px;
`;

export default function Login() {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <MainContainer>
          <Title />
          <Form>
            <InputUnit label="Username, or Email" type="username" />
            <InputUnit label="Password" type="password" />
            <InputButton label="Log In" />
          </Form>
          <Divider />
          <InputButton
            label="Log in with Facebook"
            icon="faFacebookSquare"
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
