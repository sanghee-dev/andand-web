import { useState } from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import {
  createAccount,
  createAccountVariables,
} from "__generated__/createAccount";
import routes from "router/routes";
import { Container, Form } from "components/shared";
import MainBox from "components/auth/MainBox";
import PageTitle from "components/PageTitle";
import Title from "components/auth/Title";
import Divider from "components/auth/Divider";
import IconButton from "components/auth/IconButton";
import AccountBox from "components/auth/AccountBox";
import AppStore from "components/auth/AppStore";
import SoildButton from "components/auth/SoildButton";
import InputBox from "components/auth/InputBox";
import ErrorMessage from "components/auth/ErrorMessage";
import Paragraph from "components/auth/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router";

type IProps = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  result: string;
};

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function SignUp() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm<IProps>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
  });
  const { password } = getValues();
  const [isShown, setIsShown] = useState(false);
  const onCompleted = (data: any) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    history.push(routes.home);
  };
  const [createAccount, { loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmit = handleSubmit((data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  });
  const clearLoginError = () => {
    clearErrors("result");
  };

  return (
    <Container>
      <PageTitle title="Sign Up" />
      <MainBox>
        <Title />
        <Paragraph
          text="Sign up to see photos and videos from your friends."
          fontSize={16}
          fontWeight={500}
          marginBottom={10}
        />
        <Form>
          <IconButton
            type="submit"
            style={{ backgroundColor: "rgb(0,149,246)", color: "white" }}
          >
            <label>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ fontSize: 18 }}
              />
            </label>
            <label>Log in with Facebook</label>
          </IconButton>
        </Form>
        <Divider />

        <Form onSubmit={onSubmit}>
          <InputBox>
            <label style={{ color: errors?.email ? "red" : "inherit" }}>
              {errors?.email ? errors?.email?.message : "Email"}
            </label>
            <input
              {...register("email", {
                required: "Email is required.",
              })}
              onChange={clearLoginError}
              type="text"
              style={{ borderColor: errors?.email ? "red" : "inherit" }}
            />
          </InputBox>
          <InputBox>
            <label style={{ color: errors?.username ? "red" : "inherit" }}>
              {errors?.username ? errors?.username?.message : "Username"}
            </label>
            <input
              {...register("username", {
                required: "Username is required.",
                minLength: {
                  value: 5,
                  message: "Username should be longer than 5 chars.",
                },
                maxLength: {
                  value: 20,
                  message: "Username should be less than 20 chars.",
                },
              })}
              onChange={clearLoginError}
              type="text"
              style={{ borderColor: errors?.username ? "red" : "inherit" }}
            />
          </InputBox>
          <InputBox>
            <label style={{ color: errors?.firstName ? "red" : "inherit" }}>
              {errors?.firstName ? errors?.firstName?.message : "FirstName"}
            </label>
            <input
              {...register("firstName", {
                required: "FirstName is required.",
              })}
              onChange={clearLoginError}
              type="text"
              style={{ borderColor: errors?.firstName ? "red" : "inherit" }}
            />
          </InputBox>
          <InputBox>
            <label style={{ color: errors?.lastName ? "red" : "inherit" }}>
              {errors?.lastName ? errors?.lastName?.message : "LastName"}
            </label>
            <input
              {...register("lastName")}
              onChange={clearLoginError}
              type="text"
              style={{ borderColor: errors?.lastName ? "red" : "inherit" }}
            />
          </InputBox>
          <InputBox>
            <label style={{ color: errors?.password ? "red" : "inherit" }}>
              {errors?.password ? errors?.password?.message : "Password"}
            </label>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 5,
                  message: "Password should be longer than 5 chars.",
                },
                maxLength: {
                  value: 20,
                  message: "Password should be less than 20 chars.",
                },
              })}
              onChange={clearLoginError}
              type={isShown ? "text" : "password"}
              style={{ borderColor: errors?.password ? "red" : "inherit" }}
            />
            <button
              type="button"
              style={{
                color: password?.length > 0 ? "rgb(40,40,40)" : "transparent",
              }}
              onClick={() => {
                setIsShown((prev) => !prev);
              }}
            >
              {isShown ? "Hide" : "Show"}
            </button>
          </InputBox>
          <SoildButton
            type="submit"
            value="Sign up"
            disabled={!isValid || loading}
          />
        </Form>
        <ErrorMessage message={errors?.result?.message || ""} />
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
