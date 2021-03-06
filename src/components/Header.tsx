import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "apollo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import DarkModeBtn from "components/DarkModeBtn";
import SolidButtonSmall from "components/button/SolidButtonSmall";
import useUser from "hooks/useUser";
import Avatar from "components/Avatar";
import HeaderTitle from "components/HeaderTitle";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.wrapperWIdth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.marginDouble} 40px;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & :not(:last-child) {
    margin-right: ${(props) => props.theme.marginDouble};
  }
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

export default function Header() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useUser();

  return (
    <Container>
      <Wrapper>
        <IconBox>
          <HeaderTitle />
        </IconBox>
        {isLoggedIn ? (
          <>
            <IconBox>
              <Icon>
                <FontAwesomeIcon icon={faHome} />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faCompass} />
              </Icon>
              <Avatar url={data?.me?.avatar} />
              <DarkModeBtn />
            </IconBox>
          </>
        ) : (
          <Link to="/">
            <SolidButtonSmall type="submit" value="Login" />
          </Link>
        )}
      </Wrapper>
    </Container>
  );
}
