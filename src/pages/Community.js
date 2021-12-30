import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import PostList from "../components/community/PostList";
import { BiTimeFive } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import dummy from "../components/common/data.json";
import ContentCard from "../components/common/ContentCard";

const CommunityWrapper = styled.div`
  padding: 0 10px;

  h2 {
    font-weight: 600;
    font-size: 18px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const HotContentsContainer = styled.div`
  color: black;
  a {
    color: black;
  }
`;

const Community = () => {
  const { data } = dummy;

  return (
    <CommunityWrapper>
      <Divider orientation="left" style={{ fontWeight: 650, margin: "10px 0" }}>
        NEW CONTENTS
        <BiTimeFive size={16} style={{ position: "relative", top: 2 }} />
      </Divider>
      <PostList />
      <Divider orientation="left" style={{ fontWeight: 650, margin: "10px 0" }}>
        HOT CONTENTS
        <AiFillFire
          size={16}
          style={{ position: "relative", top: 2, left: 3 }}
        />
      </Divider>
      <GridContainer>
        {data.slice(0, 2).map((data, index) => (
          <ContentCard
            {...data}
            key={data.id}
            index={index}
            fullWidth={true}
            url={`/user/${data.id}`}
            style={{
              display: "flex",
              marginBottom: "10px",
            }}
          />
        ))}
      </GridContainer>
      <HotContentsContainer>
        {data.slice(4, 6).map((data, index) => (
          <ContentCard
            {...data}
            key={data.id}
            index={index}
            fullWidth={true}
            url={`/user/${data.id}`}
            style={{
              display: "flex",
              marginBottom: "10px",
            }}
          />
        ))}
      </HotContentsContainer>
    </CommunityWrapper>
  );
};

export default Community;
