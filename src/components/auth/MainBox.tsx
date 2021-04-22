import styled from "styled-components";
import { Box } from "components/shared";

interface IProps {
  children: React.ReactNode;
  height: number;
}

const Container = styled(Box)`
  height: 530px;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.marginDouble};
  padding: 32px 0;
`;

export default function MainBox({ children, height }: IProps) {
  return <Container style={{ height: height }}>{children}</Container>;
}
