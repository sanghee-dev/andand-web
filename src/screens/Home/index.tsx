import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { seeFeed, seeFeedVariables } from "__generated__/seeFeed";
import Avatar from "components/Avatar";
import CreatedAt from "components/CreatedAt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const FEED_QUERY = gql`
  query seeFeed($page: Int!) {
    seeFeed(page: $page) {
      id
      createdAt
      user {
        username
        avatar
      }
      file
      caption
      likes
      comments
      isMine
    }
  }
`;

const Container = styled.div``;
const Feed = styled.div`
  max-width: 600px;
  border: ${(props) => props.theme.border};
  margin-bottom: ${(props) => props.theme.marginSixTimes};
  background-color: white;
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
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
`;
const BottomBox = styled.div`
  padding: ${(props) => props.theme.marginDouble};
  & :not(:first-child) {
    margin-bottom: ${(props) => props.theme.margin};
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  & :not(:first-child) {
    margin-left: ${(props) => props.theme.margin};
  }
`;
const Likes = styled.h2`
  font-weight: ${(props) => props.theme.fontHeavy};
`;
const Comment = styled.h2`
  display: flex;
  & :first-child {
    font-weight: ${(props) => props.theme.fontHeavy};
  }
`;

export default function Home() {
  const { data } = useQuery<seeFeed, seeFeedVariables>(FEED_QUERY, {
    variables: {
      page: 1,
    },
  });
  console.log("data", data);

  return (
    <Container>
      {data?.seeFeed?.map((feed) => (
        <Feed key={feed?.id}>
          <TopBox>
            <Box>
              <Avatar url={feed?.user?.avatar || ""} />
              <Username>{feed?.user?.username}</Username>
            </Box>
            <FontAwesomeIcon icon={faEllipsisH} style={{ fontSize: 16 }} />
          </TopBox>
          <Image src={feed?.file} alt="Feed" />
          <BottomBox>
            <Icons>
              <Box>
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: 18 }} />
                <FontAwesomeIcon icon={faComment} style={{ fontSize: 18 }} />
                <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: 18 }} />
              </Box>
              <FontAwesomeIcon icon={faBookmark} style={{ fontSize: 18 }} />
            </Icons>
            <Likes>
              {feed?.likes} {feed?.likes || 0 > 1 ? "likes" : "like"}
            </Likes>
            <Comment>
              {feed?.user?.username} {feed?.comments}
            </Comment>
            <CreatedAt createdAt={feed?.createdAt || ""} />
          </BottomBox>
        </Feed>
      ))}
    </Container>
  );
}
