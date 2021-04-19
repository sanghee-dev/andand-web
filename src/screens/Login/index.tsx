import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/styles";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Box = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: ${(props) => props.theme.border};
  background-color: white;
`;
const TopBox = styled(Box)`
  height: 380px;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const PlaceHolder = styled.div`
  position: relative;
  font-size: 14px;
  &::after {
    position: absolute;
    left: 6px;
    top: 4px;
    content: attr(data-placeholder);
    pointer-events: none;
    opacity: 0.6;
  }
  & :focus {
    color: ${(props) => props.theme.accent};
    font-size: 14px;
  }
`;
const Input = styled.input`
  width: 270px;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
const SubmitButton = styled.input`
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  border-radius: 6px;
  color: white;
  font-weight: 500;
  text-align: center;
  transition: ${(props) => props.theme.transition};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.accentDark};
  }
`;
const Separator = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(160, 160, 160);
  font-size: 20px;
  & div {
    width: 100px;
    height: 1px;
    border-top: ${(props) => props.theme.border};
  }
`;
const ButtonBox = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FacebookBox = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.facebookColor};
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontHeavy};
  margin-bottom: 18px;
  & :not(:last-child) {
    margin-right: 6px;
  }
`;
const BottomBox = styled(Box)`
  justify-content: center;
  height: 60px;
  & :last-child {
    color: ${(props) => props.theme.accent};
    margin-left: 6px;
    font-weight: ${(props) => props.theme.fontHeavy};
  }
`;

const Login = () => {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <TopBox>
          <h1>andand</h1>

          <Form>
            <PlaceHolder data-placeholder="Username">
              <Input type="text" name="Username" />
            </PlaceHolder>
            <PlaceHolder data-placeholder="Password">
              <Input type="password" name="Password" />
            </PlaceHolder>
            <SubmitButton type="submit" value="Log In" />
          </Form>

          <Separator>
            <div></div>
            <h2>or</h2>
            <div></div>
          </Separator>

          <ButtonBox>
            <FacebookBox>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <h2>Log in with Facebook</h2>
            </FacebookBox>
            <h3>Forgot password?</h3>
          </ButtonBox>
        </TopBox>

        <BottomBox>
          <h2>Don't have an account?</h2>
          <h2>Sign up</h2>
        </BottomBox>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
