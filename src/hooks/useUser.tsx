import { useEffect } from "react";
import { useQuery, useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "apollo";
import { gql } from "@apollo/client";
import { LogUserOut } from "apollo";

const ME_QUERY = gql`
  query me {
    me {
      id
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME_QUERY, {
    skip: !hasToken,
  });
  useEffect(() => {
    if (data?.me === null) {
      LogUserOut();
    }
  }, [data]);
  return { data };
}

export default useUser;
