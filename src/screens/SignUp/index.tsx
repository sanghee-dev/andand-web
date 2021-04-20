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
import Paragraph from "components/auth/Paragraph";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";

export default function SignUp() {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <MainBox>
          <Title />
          <InputButton label="Log in with Facebook" icon="faFacebookSquare" />
          <Divider />
          <Form>
            <InputUnit label="Email" type="email" />
            <InputUnit label="Full Name" type="username" />
            <InputUnit label="Username" type="username" />
            <InputUnit label="Password" type="password" />
            <InputButton label="Sign up" />
          </Form>
          <Paragraph
            text="By signing up, you agree to our Terms, Data Policy and Cookies
              Policy."
          />
        </MainBox>
        <AccountBox
          text="Have an account?"
          label="Log in"
          linkTo={routes.home}
        />
        <AppStore />
      </Container>
    </ThemeProvider>
  );
}
