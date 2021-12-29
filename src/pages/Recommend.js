import React from "react";
import { Tag, Divider } from 'antd';

const Recommend = () => {
  return (
    <>
      <h1> 상품 추천 페이지 </h1>

      <div style={{marginLeft:"10px", marginTop: "20px"}}>
        <span style={{ color: "#848484" }}>#공격적인 투자자 </span>
        <span style={{ color: "#848484" }}>#수익률 50% </span>
        <br />
        <span style={{ color: "#848484" }}>#신한 Deep Dream </span>
        <span style={{ color: "#848484" }}>#반도체주 </span>
        <span style={{ color: "#848484" }}>#바이오주 </span>
        <br />
        <span style={{ color: "#848484" }}>#신한 Deep Dream Platinum+ </span>
        <span style={{ color: "#848484" }}>#배터리주 </span>
      </div>
      
    </>
  );
};

export default Recommend;
