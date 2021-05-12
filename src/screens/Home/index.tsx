import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { seeFeed, seeFeedVariables } from "__generated__/seeFeed";
import Feed from "components/feed/Feed";

const FEED_QUERY = gql`
  query seeFeed($lastId: Int!) {
    seeFeed(lastId: $lastId) {
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
      isLiked
    }
  }
`;

const Container = styled.div``;

export default function Home() {
  const { data } = useQuery<seeFeed, seeFeedVariables>(FEED_QUERY, {
    variables: {
      lastId: 0,
    },
  });

  return (
    <Container>
      {data?.seeFeed?.map((feed) => (
        <Feed
          key={feed?.id || 0}
          // id={feed?.id || 0}
          // createdAt={feed?.createdAt || ""}
          // username={feed?.user?.username || ""}
          // avatar={feed?.user?.avatar || ""}
          // file={feed?.file || ""}
          // caption={feed?.caption || ""}
          // likes={feed?.likes || 0}
          // comments={feed?.comments || 0}
          // isMine={feed?.isMine || false}
          // isLiked={feed?.isLiked || false}
          {...feed}
        />
      ))}
    </Container>
  );
}
