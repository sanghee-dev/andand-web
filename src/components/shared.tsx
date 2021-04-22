import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Box = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  padding: 20px;
  border: ${(props) => props.theme.border};
  background-color: white;
`;
