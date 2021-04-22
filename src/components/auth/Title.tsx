import styled from "styled-components";

const Span = styled.span`
  font-size: 40px;
  font-family: "Pacifico", cursive;
  margin-bottom: ${(props) => props.theme.marginTriple};
  text-align: center;
`;

export default function Title({}) {
  return <Span>andand</Span>;
}
