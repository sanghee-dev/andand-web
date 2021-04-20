import styled from "styled-components";

interface IProps {
  text: string;
  fontSize?: number;
  fontWeight?: number;
}

const Container = styled.h2`
  width: 270px;
  text-align: center;
  color: ${(props) => props.theme.fontColorLight};
  margin-bottom: 20px;
`;

export default function Paragraph({ text, fontSize, fontWeight }: IProps) {
  return (
    <Container
      style={{
        fontSize: fontSize ? fontSize : 12,
        fontWeight: fontWeight ? fontWeight : 400,
      }}
    >
      <span>{text}</span>
    </Container>
  );
}
