import { useForm } from "react-hook-form";
import routes from "router/routes";
import styled from "styled-components";
import { Container } from "components/shared";
import MainBox from "components/auth/MainBox";
import PageTitle from "components/PageTitle";
import Title from "components/auth/Title";
import Divider from "components/auth/Divider";
import TextButton from "components/auth/TextButton";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";
import Button from "components/auth/Button";
import InputBox from "components/auth/InputBox";

const Form = styled.form`
  width: 100%;
  padding: 0 32px;
`;

type IProps = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IProps>({
    mode: "onBlur",
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(errors, isValid);

  return (
    <Container>
      <PageTitle title="Login" />

      <MainBox height={370}>
        <Title />
        <Form onSubmit={onSubmit}>
          <InputBox>
            <label style={{ color: errors?.username ? "red" : "inherit" }}>
              {errors?.username ? errors?.username?.message : "Username"}
            </label>
            <input
              type="text"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Username should be longer than 5 chars.",
                },
                maxLength: {
                  value: 20,
                  message: "Username should be less than 20 chars.",
                },
              })}
            />
          </InputBox>
          <InputBox>
            <label style={{ color: errors?.password ? "red" : "inherit" }}>
              {errors?.password ? errors?.password?.message : "Password"}
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password should be longer than 5 chars.",
                },
                maxLength: {
                  value: 20,
                  message: "Password should be less than 20 chars.",
                },
              })}
            />
            <button
              onClick={() => {
                setValue("password", "");
              }}
            >
              Show
            </button>
          </InputBox>
          <Button type="submit" value="Log In" disabled={!isValid} />
        </Form>

        <Divider />

        <TextButton
          label="Log in with Facebook"
          icon="faFacebookSquare"
          color="rgb(56,81,133)"
          transparent={true}
        />
        <h2>{errors.username?.message}</h2>
        <h2>{errors.password?.message}</h2>
        <TextButton
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
