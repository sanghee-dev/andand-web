import styled from "styled-components";

interface IProps {
  createdAt: string | undefined;
}

const CreatedDate = styled.h3`
  text-transform: uppercase;
`;

function CreatedAt({ createdAt }: IProps) {
  return <CreatedDate>{createdAt}</CreatedDate>;
}

export default CreatedAt;
