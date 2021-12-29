import React from "react";
import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import dummy from "../common/data.json";

const PostContainer = styled.div`
  padding: 0 1rem;
`;

const PostCard = styled.div`
  display: grid;
  color: black;
  padding: 7px 0;
  grid-template-columns: 5fr 2fr 1fr;

  .nickname {
    font-size: 12px;
    color: #7b7979;
  }

  .like {
    font-size: 14px;
    color: #7b7979;
  }
`;

const PostList = () => {
  const { data } = dummy;
  return (
    <PostContainer>
      {data.map(({ id, nickname, title, like }) => (
        <Link key={id} to={`/post/${id}`}>
          <PostCard>
            <h3>{title}</h3>
            <span className="nickname"> {nickname} </span>
            <span className="like">
              <BsSuitHeartFill
                color="#FF0606"
                size={12}
                style={{
                  marginRight: 5,
                }}
              />
              {like}
            </span>
          </PostCard>
        </Link>
      ))}
    </PostContainer>
  );
};

export default PostList;
