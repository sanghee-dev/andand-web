import styled from "styled-components";

const TextButton = styled.input`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.theme.h2};
  cursor: pointer;
  & label {
    user-select: none;
  }
  &:focus {
    border: none;
  }
  &:active {
    border: none;
    opacity: ${(props) => props.theme.opacity};
  }
`;

export default TextButton;
