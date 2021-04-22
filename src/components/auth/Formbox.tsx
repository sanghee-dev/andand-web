import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  onSubmit?: (event: any) => void;
}

const Container = styled.div`
  margin: ${(props) => props.theme.marginTopBottom};
`;

export default function Formbox({ children, onSubmit }: IProps) {
  return <Container>{children}</Container>;
}
