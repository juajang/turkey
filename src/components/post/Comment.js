import React from "react";
import styled from "styled-components";
import dummy from "../common/comments.json";
import { useParams } from "react-router-dom";

const CommentWrapper = styled.div`
  padding: 7px 10px;
  font-size: 12px;
  display: flex;

  .comment-nickname {
    font-weight: bold;
    width: 55px;
  }
`;

const Comment = () => {
  const { id } = useParams();
  const data = dummy.data[Number(id)];

  return (
    <div
      style={{
        padding: "1rem 0",
      }}
    >
      {data?.comments.map(({ nickname, contents }) => (
        <CommentWrapper>
          <div className="comment-nickname"> {nickname} </div>
          <div> {contents} </div>
        </CommentWrapper>
      ))}
    </div>
  );
};

export default Comment;
