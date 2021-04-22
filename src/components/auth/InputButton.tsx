import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

interface IProps {
  label: string;
  icon?: string;
  color?: string;
  fontLight?: boolean;
  transparent?: boolean;
  disabled?: boolean;
}

const Button = styled.button`
  width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: ${(props) => props.theme.marginTopBottom};
  border-radius: 4px;
  font-size: 12px;
  font-weight: ${(props) => props.theme.fontHeavy};
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: ${(props) => props.theme.opacity};
  }
`;

export default function InputButton({
  label,
  icon,
  color,
  fontLight,
  transparent,
  disabled,
}: IProps) {
  return (
    <Button
      type="submit"
      style={{
        color: color ? color : transparent ? "black" : "white",
        fontWeight: fontLight ? 400 : 500,
        backgroundColor: transparent ? "white" : "rgb(0,149,246)",
        opacity: disabled ? 0.3 : 1,
      }}
    >
      {icon && (
        <FontAwesomeIcon
          icon={faFacebookSquare}
          style={{
            marginRight: "6",
            fontSize: "20",
          }}
        />
      )}
      <h2>{label}</h2>
    </Button>
  );
}
