import styled from "styled-components";

const IconButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: ${(props) => props.theme.marginTopBottom};
  border-radius: 4px;
  font-size: ${(props) => props.theme.h2};
  font-weight: ${(props) => props.theme.fontHeavy};
  color: ${(props) => props.theme.accent};
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
  & label {
    user-select: none;
    cursor: pointer;
    margin: 0 4px;
  }
`;

export default IconButton;
