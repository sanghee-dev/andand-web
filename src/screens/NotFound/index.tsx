import styled from "styled-components";

const Title = styled.h1`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;

export default function NotFound() {
  return <Title>404 not found</Title>;
}
