import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { login, loginVariables } from "__generated__/login";
import { LogUserIn } from "apollo";
import { Form } from "components/shared";
import AuthLayout from "components/auth/AuthLayout";
import PageTitle from "components/PageTitle";
import Title from "components/auth/Title";
import Divider from "components/auth/Divider";
import IconButton from "components/button/IconButton";
import SoildButton from "components/button/SoildButton";
import InputBox from "components/auth/InputBox";
import ErrorMessage from "components/auth/ErrorMessage";
import TextButton from "components/button/TextButton";
import Notification from "components/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

interface IStateType {
  username?: string;
  password?: string;
  message?: string;
}

type IProps = {
  username: string;
  password: string;
  result: string;
};

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

export default function Login() {
  const location = useLocation<IStateType>();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm<IProps>({
    mode: "onChange",
  });
  const { password } = getValues();
  const [isShown, setIsShown] = useState(false);
  const onCompleted = (data: any) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      LogUserIn(token);
    }
  };
  const [login, { loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    {
      onCompleted,
    }
  );
  const onSubmit = handleSubmit((data) => {
    if (loading) {
      return;
    }
    login({
      variables: {
        ...data,
      },
    });
  });
  const clearLoginError = () => {
    clearErrors("result");
  };

  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <Title />
      <Notification message={location?.state?.message || ""} />
      <Form onSubmit={onSubmit}>
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
            defaultValue={location?.state?.username}
            onChange={clearLoginError}
            type="text"
            style={{ borderColor: errors?.username ? "red" : "inherit" }}
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
            defaultValue={location?.state?.password}
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
          value={loading ? "Loading..." : "Log In"}
          disabled={loading} // {!isValid || loading}
        ></SoildButton>
      </Form>
      <Divider />
      <IconButton type="submit" style={{ color: "rgb(56,81,133)" }}>
        <label>
          <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 18 }} />
        </label>
        <label>Log in with Facebook</label>
      </IconButton>
      <ErrorMessage message={errors?.result?.message || ""} />
      <TextButton type="button" value="Forgot password?" />
    </AuthLayout>
  );
}
