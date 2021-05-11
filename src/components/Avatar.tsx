import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface IProps {
  url: string | undefined;
}

const Container = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 20px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  background-position: center;
`;

function Avatar({ url = "" }: IProps) {
  return (
    <Container>
      {url !== "" ? <Image src={url} /> : <FontAwesomeIcon icon={faUser} />}
    </Container>
  );
}

export default Avatar;
