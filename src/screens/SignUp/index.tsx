import routes from "router/routes";
import { Container } from "components/shared";
import MainBox from "components/auth/MainBox";
import PageTitle from "components/PageTitle";
import Title from "components/auth/Title";
import Divider from "components/auth/Divider";
import InputButton from "components/auth/InputButton";
import Paragraph from "components/auth/Paragraph";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";

export default function SignUp() {
  return (
    <Container>
      <PageTitle title="Sign Up" />
      <MainBox height={500}>
        <Title />
        <Paragraph
          text="Sign up to see photos and videos from your friends."
          fontSize={16}
          fontWeight={500}
          marginBottom={10}
        />
        <InputButton label="Log in with Facebook" icon="faFacebookSquare" />
        <Divider />
        {/* <Form>
          <InputUnit label="Email" type="email" />
          <InputUnit label="Full Name" type="username" />
          <InputUnit label="Username" type="username" />
          <InputUnit label="Password" type="password" />
          <InputButton label="Sign up" />
        </Form> */}
        <Paragraph
          text="By signing up, you agree to our Terms, Data Policy and Cookies
              Policy."
        />
      </MainBox>
      <AccountBox text="Have an account?" label="Log in" linkTo={routes.home} />
      <AppStore />
    </Container>
  );
}
