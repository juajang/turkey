import React from "react";
import { useParams } from "react-router-dom";
import dummy from "../components/common/data.json";
import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";
import { Input } from "antd";
import TagList from "../components/post/TagList";
import Comment from "../components/post/Comment";

const { Search } = Input;

const PostWrapper = styled.div`
  padding: 0 10px 10px 10px;
  overflow-x: hidden;

  h2 {
    font-size: 22px;
    font-weight: bold;
    color: #1e2395;
    display: flex;
    justify-content: center;
  }

  .nickname {
    display: flex;
    font-size: 12px;
    justify-content: flex-end;
    padding-bottom: 3px;
    color: #7b7979;
  }

  p {
    font-size: 14px;
    padding: 0.5rem 0.5em 0 0.5em;
    line-height: 1.3em;
  }

  .ant-input-group-wrapper {
    width: 90%;
    height: 28px;
    border-radius: 20px;
  }

  .ant-input {
    font-size: 12px;
  }

  .ant-input-search-button {
    height: 28px;
  }
`;

const Post = () => {
  const { data } = dummy;
  const { id } = useParams();
  const { title, nickname, like, contents } = data[Number(id)];

  return (
    <PostWrapper>
      <h2> {title} </h2>
      <div className="nickname">{nickname}</div>
      <div className="nickname">
        <BsSuitHeartFill
          color="#FF0606"
          size={12}
          style={{
            marginRight: 5,
          }}
        />
        {like}
      </div>
      <p>{contents}</p>
      <TagList nickname={nickname} />
      <Comment />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Search
          placeholder="댓글을 입력하세요."
          enterButton="등록"
          size="middle"
        />
      </div>
    </PostWrapper>
  );
};

export default Post;
