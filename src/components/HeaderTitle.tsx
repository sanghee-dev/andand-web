import styled from "styled-components";
import { Link } from "react-router-dom";

const Span = styled.span`
  font-size: 20px;
  font-family: "Pacifico", cursive;
  text-align: center;
  cursor: pointer;
`;

export default function HeaderTitle() {
  return (
    <Link to="/">
      <Span>andand</Span>
    </Link>
  );
}
