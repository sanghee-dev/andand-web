import styled from "styled-components";

export const Container = styled.div`
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

export const Form = styled.form`
  width: 100%;
  margin: ${(props) => props.theme.marginTopBottom};
  padding: 0 32px;
`;
