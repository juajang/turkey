import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import PostList from "../components/community/PostList";

const CommunityWrapper = styled.div`
  padding: 1em;

  h2 {
    font-weight: 600;
    font-size: 18px;
  }
`;

const Community = () => {
  return (
    <CommunityWrapper>
      <h2> NEW CONTENTS </h2>
      <PostList />
      <h2> HOT CONTENTS </h2>
    </CommunityWrapper>
  );
};

export default Community;
