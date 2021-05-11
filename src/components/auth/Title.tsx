import styled from "styled-components";

interface IProps {
  fontSize?: number;
  marginBottom?: number;
}

const Span = styled.span`
  font-family: "Pacifico", cursive;
  text-align: center;
`;

export default function Title({ fontSize = 20, marginBottom }: IProps) {
  return (
    <Span style={{ fontSize: fontSize, marginBottom: marginBottom }}>
      andand
    </Span>
  );
}
