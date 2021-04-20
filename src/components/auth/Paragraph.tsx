import styled from "styled-components";

interface IProps {
  text: string;
}

const Container = styled.h2`
  width: 270px;
  text-align: center;
`;

export default function Paragraph({ text }: IProps) {
  return (
    <Container>
      <h3>{text}</h3>
    </Container>
  );
}
