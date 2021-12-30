import React from "react";
import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import dummy from "../common/data.json";
import { Divider } from "antd";

const PostContainer = styled.div`
  padding: 0 1rem;
  font-size: 14px;

  h3 {
    margin-top: 7px;
  }
`;

const PostDetail = styled.div`
  display: grid;
  grid-template-columns: 230px 60px 40px;
  align-content: end;
  color: black;
  padding: 3px 0;

  .nickname {
    font-size: 12px;
    color: #7b7979;
    margin-right: 10px;
  }

  .like {
    position: relative;
    top: -1px;
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
          <h3>{title}</h3>
          <PostDetail>
            <span />
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
          </PostDetail>
          <Divider style={{ margin: "3px 0" }} />
        </Link>
      ))}
    </PostContainer>
  );
};

export default PostList;
