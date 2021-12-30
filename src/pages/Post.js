import React from "react";
import { useParams } from "react-router-dom";
import dummy from "../components/common/data.json";
import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";
import TagList from "../components/post/TagList";
import Comment from "../components/post/Comment";
import Tiles from "./Tiles";

const PostWrapper = styled.div`
  padding: 0 10px 20px 10px;
  overflow-x: hidden;

  h2 {
    font-size: 22px;
    font-weight: bold;
    padding: 5px 0;
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
    padding: 0.5rem 0.5em 1em 0.5em;
    line-height: 1.3em;
    white-space: pre-wrap;
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
      <Tiles
        name="난진"
        current="27,450"
        total="397,530"
        v1="300,000"
        v2="370,080"
        v3="70,080"
        v4="23.36"
        color="mediumblue"
        title="2"
        ctx1='"OOO OOO"'
        ctx2='"OOO OO OOOOO"'
        sogam='"아... 2등ㅠ"'
      />
      <TagList nickname={nickname} />
      <Comment />
    </PostWrapper>
  );
};

export default Post;
