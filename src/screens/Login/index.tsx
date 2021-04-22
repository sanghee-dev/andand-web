import { useForm } from "react-hook-form";
import routes from "router/routes";
import styled from "styled-components";
import { Container } from "components/shared";
import MainBox from "components/auth/MainBox";
import PageTitle from "components/PageTitle";
import Title from "components/auth/Title";
import Divider from "components/auth/Divider";
import InputButton from "components/auth/InputButton";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";

const Form = styled.form``;
const InputBox = styled.div`
  width: 270px;
  display: flex;
  & label {
    width: 0;
    position: relative;
    top: 6px;
    left: 8px;
    font-size: 10px;
    color: ${(props) => props.theme.fontColorLight};
  }
  & input {
    width: 270px;
    padding-top: 2px;
    font-size: ${(props) => props.theme.h2};
  }
  & button {
    position: relative;
    :hover {
      cursor: pointer;
    }
  }
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
    formState: { errors },
  } = useForm<IProps>();
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(errors);

  return (
    <Container>
      <PageTitle title="Login" />

      <MainBox height={370}>
        <Title />
        <Form onSubmit={onSubmit}>
          <InputBox>
            <label>Username</label>
            <input
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
            <button
              type="button"
              onClick={() => {
                setValue("username", "");
              }}
            >
              x
            </button>
          </InputBox>

          <InputBox>
            <label>Password</label>
            <input
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
              type="button"
              onClick={() => {
                setValue("password", "");
              }}
            >
              x
            </button>
          </InputBox>
          <input type="submit" />
        </Form>

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
