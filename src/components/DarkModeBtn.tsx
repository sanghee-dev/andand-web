import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, disableDarkMode, enableDarkMode } from "apollo";

const RADIUS = 14;
const INNERSPACE = 2;

const Container = styled.div`
  cursor: pointer;
  border: ${INNERSPACE}px solid ${(props) => props.theme.borderColor};
  width: ${RADIUS * 2}px;
  height: ${RADIUS + INNERSPACE * 2}px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.borderColor};
`;
const Circle = styled.div`
  width: ${RADIUS}px;
  height: ${RADIUS}px;
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
          marginLeft: darkMode ? RADIUS - INNERSPACE * 2 : 0,
        }}
      />
    </Container>
  );
}

export default DarkModeBtn;
