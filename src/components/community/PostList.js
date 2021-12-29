import React from "react";
import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import dummy from "../common/data.json";

const PostContainer = styled.div`
  padding: 1rem;
`;

const PostList = () => {
  const { data } = dummy;
  return (
    <PostContainer>
      {data.map(({ id, nickname, title }) => (
        <Link key={id} to={`post/${id}`}>
          <h3>{title}</h3>
          <span> {nickname} </span>
          <BsSuitHeartFill
            color="#FF0606"
            size={12}
            style={{
              marginRight: 5,
            }}
          />
        </Link>
      ))}
    </PostContainer>
  );
};

export default PostList;
