import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/styles";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import AppStore from "images/AppStore.png";
import GooglePlay from "images/GooglePlay.png";

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
const Title = styled.span`
  font-size: 40px;
  font-family: "Pacifico", cursive;
  margin-top: 20px;
`;
const Form = styled.form`
  width: 270px;
  display: flex;
  flex-direction: column;
`;
const PlaceHolder = styled.div`
  width: 270px;
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
`;
const Label = styled.label`
  position: relative;
  top: 16px;
  left: 8px;
  pointer-events: none;
  font-size: 11px;
  color: ${(props) => props.theme.borderColorDark};
`;
const Input = styled.input`
  width: 270px;
  box-sizing: border-box;
  padding-top: 9px;
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
const ButtonText = styled.h2`
  cursor: pointer;
  :active {
    opacity: ${(props) => props.theme.opacity};
  }
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
const Footer = styled.div`
  & h2 {
    margin: 24px 0;
    text-align: center;
  }
`;
const DownloadBox = styled.div`
  display: flex;
`;
const Download = styled.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 8px;
  }
  :active {
    opacity: ${(props) => props.theme.opacity};
  }
`;

const Login = () => {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <TopBox>
          <Title>andand</Title>
          <Form>
            <PlaceHolder>
              <Label>Username, or email</Label>
              <Input type="text" name="Username" />
            </PlaceHolder>
            <PlaceHolder>
              <Label>Password</Label>
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
              <ButtonText>Log in with Facebook</ButtonText>
            </FacebookBox>
            <ButtonText>Forgot password?</ButtonText>
          </ButtonBox>
        </TopBox>

        <BottomBox>
          <h2>Don't have an account?</h2>
          <ButtonText>Sign up</ButtonText>
        </BottomBox>

        <Footer>
          <h2>Get the app.</h2>
          <DownloadBox>
            <Download>
              <img src={AppStore} alt="AppStore" width="141" height="42" />
            </Download>
            <Download>
              <img src={GooglePlay} alt="GooglePlay" width="141" height="42" />
            </Download>
          </DownloadBox>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
