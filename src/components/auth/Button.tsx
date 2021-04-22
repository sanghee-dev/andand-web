import styled from "styled-components";

const Button = styled.input`
  width: 100%;
  margin: ${(props) => props.theme.marginTopBottom};
  border-radius: 4px;
  font-size: 12px;
  font-weight: ${(props) => props.theme.fontHeavy};
  text-align: center;
  color: white;
  font-size: ${(props) => props.theme.h2};
  border: none;
  background-color: ${(props) => props.theme.accent};
  opacity: ${(props) => (props.disabled ? props.theme.opacityDouble : 1)};
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
`;

export default Button;
