import styled from "styled-components";

const SoildButton = styled.input`
  width: 100%;
  margin: ${(props) => props.theme.marginTopBottom};
  text-align: center;
  font-weight: ${(props) => props.theme.fontHeavy};
  color: white;
  border-radius: 4px;
  border: none;
  font-size: ${(props) => props.theme.h2};
  background-color: ${(props) => props.theme.accent};
  opacity: ${(props) => (props.disabled ? props.theme.opacityDouble : 1)};
  cursor: pointer;
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
  &:focus {
    border: none;
  }
`;

export default SoildButton;
