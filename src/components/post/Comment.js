import React from "react";
import styled from "styled-components";

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
  return (
    <div
      style={{
        padding: "1rem 0",
      }}
    >
      <CommentWrapper>
        <div className="comment-nickname"> 난진 </div>
        <div> 칠면조에게 ‘밥’을 사다니 ‘아찔’ </div>
      </CommentWrapper>
      <CommentWrapper>
        <div className="comment-nickname"> 영 </div>
        <div> 대박이다 밥 또 사주실거죠? </div>
      </CommentWrapper>
      <CommentWrapper>
        <div className="comment-nickname"> 캡틴도일 </div>
        <div> 넹... </div>
      </CommentWrapper>
    </div>
  );
};

export default Comment;
