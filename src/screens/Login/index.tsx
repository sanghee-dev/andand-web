import { useState } from "react";
import routes from "router/routes";
import { Container } from "components/shared";
import MainBox from "components/auth/MainBox";
import PageTitle from "components/PageTitle";
import Title from "components/auth/Title";
import InputUnit from "components/auth/InputUnit";
import Formbox from "components/auth/Formbox";
import Divider from "components/auth/Divider";
import InputButton from "components/auth/InputButton";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";

export default function LoginPresenter() {
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
    <Container>
      <PageTitle title="Login" />
      <MainBox height={370}>
        <Title />
        <h2>{usernameError}</h2>
        <Formbox onSubmit={handleSubmit}>
          <InputUnit
            onChange={onUsernameChange}
            label="Username, or email"
            type="username"
            value={username}
          />
          <InputUnit label="Password" type="password" />
          <InputButton label="Log In" disabled={username.length < 10} />
        </Formbox>
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
      </MainBox>
      <AccountBox
        text="Don't have an account?"
        label="Sign up"
        linkTo={routes.signUp}
      />
      <AppStore />
    </Container>
  );
}
