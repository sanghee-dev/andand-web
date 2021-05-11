import Header from "components/Header";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.wrapperWIdth};
  margin-top: ${(props) => props.theme.margin};
  padding: 0 40px;
`;

export default function Layout({ children }: IProps) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}
