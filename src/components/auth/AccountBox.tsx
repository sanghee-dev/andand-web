import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  text: string;
  label: string;
  linkTo: string;
}

const Box = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: ${(props) => props.theme.border};
  background-color: white;
`;
const Container = styled(Box)`
  justify-content: center;
  height: 60px;
  & :last-child {
    color: ${(props) => props.theme.accent};
    margin-left: 4px;
    font-weight: ${(props) => props.theme.fontHeavy};
  }
`;
const ButtonText = styled.h2`
  cursor: pointer;
  :active {
    opacity: ${(props) => props.theme.opacity};
  }
`;

export default function AccountBox({ text, label, linkTo }: IProps) {
  return (
    <Container>
      <h2>{text}</h2>
      <Link to={linkTo}>
        <ButtonText>{label}</ButtonText>
      </Link>
    </Container>
  );
}
