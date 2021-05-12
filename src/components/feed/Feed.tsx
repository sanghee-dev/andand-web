import styled from "styled-components";
import Avatar from "components/Avatar";
import CreatedAt from "components/CreatedAt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisH,
  faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";

interface IUserProps {
  username?: string | undefined;
  avatar?: string | undefined;
}
interface IProps {
  id?: number;
  createdAt?: string;
  // user: IUserProps;
  file?: string;
  // caption?: string | undefined;
  likes?: number | undefined;
  comments?: number | undefined;
  isMine?: boolean | undefined;
  isLiked?: boolean | undefined;
}

const Container = styled.div`
  max-width: 600px;
  border: ${(props) => props.theme.border};
  margin-bottom: ${(props) => props.theme.marginSixTimes};
  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
`;
const Username = styled.h2`
  font-weight: ${(props) => props.theme.fontHeavy};
  margin-left: ${(props) => props.theme.marginDouble};
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;
const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.marginDouble};
  svg {
    font-size: 20px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
`;
const BottomBox = styled.div`
  padding: ${(props) => props.theme.marginDouble};
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margin};
  & :not(:first-child) {
    margin-left: ${(props) => props.theme.margin};
  }
  svg {
    font-size: 20px;
    transition: ${(props) => props.theme.transition};
  }
`;
const Likes = styled.h2`
  font-weight: ${(props) => props.theme.fontHeavy};
  margin-bottom: ${(props) => props.theme.margin};
`;
const Comment = styled.h2`
  display: flex;
  margin-bottom: ${(props) => props.theme.margin};
  & :first-child {
    font-weight: ${(props) => props.theme.fontHeavy};
    margin-right: ${(props) => props.theme.margin};
  }
`;

function Feed({
  id,
  createdAt,
  // user,
  file,
  // caption,
  comments,
  likes,
  isMine,
  isLiked,
}: IProps) {
  return (
    <Container key={id}>
      <TopBox>
        <Box>
          {/* <Avatar url={user?.avatar} /> */}
          {/* <Username>{user?.username}</Username> */}
        </Box>
        <FontAwesomeIcon icon={faEllipsisH} />
      </TopBox>
      <Image src={file} alt="Feed" />
      <BottomBox>
        <Icons>
          <Box>
            <FontAwesomeIcon
              style={{ color: isLiked ? "tomato" : "inherit" }}
              icon={isLiked ? faSolidHeart : faHeart}
            />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faPaperPlane} />
          </Box>
          <FontAwesomeIcon icon={faBookmark} />
        </Icons>
        <Likes>
          {likes} {likes || 0 > 1 ? "likes" : "like"}
        </Likes>
        <Comment>
          {/* <span>{user?.username}</span> */}
          <span>{comments}</span>
        </Comment>
        <CreatedAt createdAt={createdAt} />
      </BottomBox>
    </Container>
  );
}

export default Feed;
