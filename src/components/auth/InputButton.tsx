import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

interface IProps {
  label: string;
  icon?: string;
  color?: string;
  fontLight?: boolean;
  transparent?: boolean;
}

const Container = styled.div`
  width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
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
const SolidContainer = styled(Container)`
  background-color: ${(props) => props.theme.accent};
  color: white;
`;
const TransContainer = styled(Container)`
  background-color: white;
  color: ${(props) => props.theme.accent};
`;

export default function InputButton({
  label,
  icon,
  color,
  fontLight,
  transparent,
}: IProps) {
  return transparent ? (
    <TransContainer style={{ color: color, fontWeight: fontLight ? 400 : 500 }}>
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
    </TransContainer>
  ) : (
    <SolidContainer style={{ color: color }}>
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
    </SolidContainer>
  );
}
