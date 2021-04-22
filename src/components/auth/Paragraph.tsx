import styled from "styled-components";

interface IProps {
  text: string;
  fontSize?: number;
  fontWeight?: number;
  marginBottom?: number;
}

const Container = styled.h2`
  width: 270px;
  text-align: center;
  color: ${(props) => props.theme.fontColorLight};
`;

export default function Paragraph({
  text,
  fontSize,
  fontWeight,
  marginBottom,
}: IProps) {
  return (
    <Container
      style={{
        fontSize: fontSize ? fontSize : 12,
        fontWeight: fontWeight ? fontWeight : 400,
        marginBottom: marginBottom ? marginBottom : 0,
      }}
    >
      <span>{text}</span>
    </Container>
  );
}
