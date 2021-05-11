import styled from "styled-components";

const SolidButtonSmall = styled.input`
  width: 100%;
  height: 26px;
  padding: 0 6px;
  text-align: center;
  font-weight: ${(props) => props.theme.fontHeavy};
  color: white;
  border-radius: 4px;
  border: none;
  font-size: ${(props) => props.theme.h3};
  background-color: ${(props) => props.theme.accent};
  cursor: pointer;
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
  &:focus {
    border: none;
  }
`;

export default SolidButtonSmall;
