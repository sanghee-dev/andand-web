import styled from "styled-components";
import { Box } from "components/shared";
import { Link } from "react-router-dom";
import AppStore from "components/auth/AppStore";
import { useLocation } from "react-router-dom";
import routes from "router/routes";

interface IProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled(Box)`
  background-color: ${(props) => props.theme.backgroundColor};
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.marginDouble};
  padding: 32px 0;
  margin-top: ${(props) => props.theme.marginSixTimes};
  border-radius: ${(props) => props.theme.borderRadius};
`;
const AccountBox = styled(Box)`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: center;
  height: 60px;
  & :last-child {
    cursor: pointer;
    margin-left: 4px;
    color: ${(props) => props.theme.accent};
    font-weight: ${(props) => props.theme.fontHeavy};
    :active {
      opacity: ${(props) => props.theme.opacity};
    }
  }
`;
const Footer = styled.footer``;

function AuthLayout({ children }: IProps) {
  const location = useLocation();
  const isLogin = location.pathname === "/sign-up";

  return (
    <Container>
      <Wrapper>{children}</Wrapper>

      <AccountBox>
        <h2>{isLogin ? "Have an account?" : "Have an account?"}</h2>
        <Link to={isLogin ? routes.home : routes.signUp}>
          <h2>{isLogin ? "Log in" : "Log in"}</h2>
        </Link>
      </AccountBox>

      <Footer>
        <AppStore />
      </Footer>
    </Container>
  );
}

export default AuthLayout;
