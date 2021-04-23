import styled from "styled-components";

export const Box = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  padding: 20px;
  border: ${(props) => props.theme.border};
`;

export const Form = styled.form`
  width: 100%;
  margin: ${(props) => props.theme.marginTopBottom};
  padding: 0 32px;
`;
