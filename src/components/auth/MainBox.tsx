import styled from "styled-components";
import { Box } from "components/shared";

interface IProps {
  children: React.ReactNode;
}

const Container = styled(Box)`
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.marginDouble};
  padding: 32px 0;
`;

export default function MainBox({ children }: IProps) {
  return <Container>{children}</Container>;
}
