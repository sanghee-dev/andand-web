import styled from "styled-components";

const InputBox = styled.div`
  width: 100%;
  display: flex;
  margin: ${(props) => props.theme.marginTopBottom};
  color: ${(props) => props.theme.fontColorLight};
  & label {
    position: absolute;
    margin: 5px 0 0 8px;
    font-size: 11px;
  }
  & input {
    width: 100%;
    padding: 4px 0 0 8px;
    font-size: ${(props) => props.theme.h2};
    color: ${(props) => props.theme.fontColor};
  }
  & button {
    width: 16px;
    height: 16px;
    position: absolute;
    background-color: transparent;
    font-weight: 500;
    color: ${(props) => props.theme.fontColor};
    margin: 12px 0 0 240px;
    :hover {
      cursor: pointer;
    }
    &:active {
      opacity: ${(props) => props.theme.opacity};
    }
  }
`;

export default InputBox;
