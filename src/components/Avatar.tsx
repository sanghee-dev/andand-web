import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface IProps {
  url: string;
}

const Container = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
`;
const Image = styled.img`
  max-width: 100%;
  background-position: center;
`;

function Avatar({ url = "" }: IProps) {
  return (
    <Container>
      {url !== "" ? (
        <Image src={url} />
      ) : (
        <FontAwesomeIcon icon={faUser} style={{ fontSize: 18 }} />
      )}
    </Container>
  );
}

export default Avatar;
