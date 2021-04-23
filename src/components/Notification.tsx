import styled from "styled-components";

interface IProps {
  message: string;
}

const Container = styled.div`
  color: ${(props) => props.theme.accent};
  font-weight: ${(props) => props.theme.fontHeavy};
`;

const Notification = ({ message }: IProps) =>
  message === "" || !message ? null : (
    <Container>
      <h2>{message}</h2>
    </Container>
  );

export default Notification;
