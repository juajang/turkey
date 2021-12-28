import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import { Tag } from "antd";

const TagContainer = styled.div`
  .ant-divider-inner-text {
    font-size: 14px;
  }
`;

const TagList = ({ nickname }) => {
  return (
    <TagContainer>
      <Divider orientation="left">{nickname}님 특징</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="magenta">공격적인 투자자</Tag>
        <Tag color="red">수익률 50%</Tag>
      </div>
      <Divider orientation="left">{nickname}님 사용상품</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="cyan">신한 Deep Dream</Tag>
        <Tag color="blue">반도체주</Tag>
        <Tag color="green">바이오주</Tag>
      </div>
      <Divider orientation="left">{nickname}님과 비슷한 상품 추천</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="orange">신한 Deep Dream Platinum+</Tag>
        <Tag color="purple">배터리주</Tag>
      </div>
    </TagContainer>
  );
};

export default TagList;
