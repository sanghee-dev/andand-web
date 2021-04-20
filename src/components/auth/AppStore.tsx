import styled from "styled-components";
import AppStoreButton from "images/AppStoreButton.png";
import GooglePlayButton from "images/GooglePlayButton.png";

const Container = styled.div`
  & h2 {
    margin: 24px 0;
    text-align: center;
  }
`;
const DownloadBox = styled.div`
  display: flex;
`;
const Download = styled.div`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 8px;
  }
  :active {
    opacity: ${(props) => props.theme.opacity};
  }
`;

export default function AppStore() {
  return (
    <Container>
      <h2>Get the app.</h2>
      <DownloadBox>
        <Download>
          <img src={AppStoreButton} alt="AppStore" width="141" height="42" />
        </Download>
        <Download>
          <img
            src={GooglePlayButton}
            alt="GooglePlay"
            width="141"
            height="42"
          />
        </Download>
      </DownloadBox>
    </Container>
  );
}
