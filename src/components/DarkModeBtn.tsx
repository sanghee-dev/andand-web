import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, disableDarkMode, enableDarkMode } from "apollo";

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  border: 2px solid ${(props) => props.theme.borderColor};
  width: 40px;
  height: 24px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.borderColor};
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transition: ${(props) => props.theme.transition};
`;

function DarkModeBtn() {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <Container onClick={darkMode ? disableDarkMode : enableDarkMode}>
      <Circle
        style={{
          marginLeft: darkMode ? 16 : 0,
        }}
      />
    </Container>
  );
}

export default DarkModeBtn;
