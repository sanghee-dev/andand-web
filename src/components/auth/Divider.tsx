import styled from "styled-components";

const Container = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(160, 160, 160);
  font-size: 20px;
  margin: ${(props) => props.theme.marginTopBottom};
  & div {
    width: 100px;
    height: 1px;
    border-top: ${(props) => props.theme.border};
  }
`;

export default function Divider() {
  return (
    <Container>
      <div></div>
      <h2>or</h2>
      <div></div>
    </Container>
  );
}
