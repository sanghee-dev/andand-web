import { useForm } from "react-hook-form";
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
  const { register, watch } = useForm();

  return (
    <Container>
      <PageTitle title="Login" />
      <MainBox height={370}>
        <Title />
        <Formbox>
          <InputUnit
            ref={register}
            label="Username, or email"
            type="username"
          />
          <InputUnit ref={register} label="Password" type="password" />
          <InputButton label="Log In" disabled={true} />
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
