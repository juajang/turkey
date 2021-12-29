import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import PostList from "../components/community/PostList";
import { BiTimeFive } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";

const CommunityWrapper = styled.div`
  padding: 0 1em;

  h2 {
    font-weight: 600;
    font-size: 18px;
  }
`;

const Community = () => {
  return (
    <CommunityWrapper>
      <Divider orientation="left" style={{ fontWeight: 650 }}>
        NEW CONTENTS{" "}
        <BiTimeFive size={16} style={{ position: "relative", top: 2 }} />
      </Divider>
      <PostList />
      <Divider orientation="left" style={{ fontWeight: 650 }}>
        HOT CONTENTS
        <AiFillFire
          size={16}
          style={{ position: "relative", top: 2, left: 3 }}
        />
      </Divider>
    </CommunityWrapper>
  );
};

export default Community;
