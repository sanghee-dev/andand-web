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
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: ${(props) => props.theme.border};
  background-color: white;
`;

export const MainBox = styled(Box)`
  height: 500px;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 32px 0;
`;

export const Form = styled.form`
  width: 270px;
  display: flex;
  flex-direction: column;
`;
