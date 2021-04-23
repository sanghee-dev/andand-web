import styled from "styled-components";

interface IProps {
  message: string;
}

const Span = styled.span`
  font-size: ${(props) => props.theme.h2};
  color: ${(props) => props.theme.errorColor};
  text-align: center;
  margin: ${(props) => props.theme.marginTopBottomDouble};
`;

export default function ErrorMessage({ message }: IProps) {
  return <Span>{message}</Span>;
}
