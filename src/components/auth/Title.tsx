import styled from "styled-components";

const Span = styled.span`
  font-size: ${(props) => props.theme.h1};
  margin-bottom: ${(props) => props.theme.marginTriple};
  font-family: "Pacifico", cursive;
  text-align: center;
`;

export default function Title() {
  return <Span>andand</Span>;
}
