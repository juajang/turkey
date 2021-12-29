import React from "react";
import { Row, Col } from 'antd';

const Recommend = () => {
  return (
    <>
      <div style={{marginLeft:"20px"}}>
        <div style={{ fontWeight: "bold", fontsize: "30px", marginBottom: "10px"}}>예금 추천 상품</div>
        <Row>
          <Col><img src="/images/정기예금.png"></img></Col>
          <Col><img src="/images/적금.png"></img></Col>
        </Row>
      </div>
      
      <div style={{marginLeft:"20px", marginTop: "20px"}}>
        <div style={{ fontWeight: "bold", fontsize: "30px", marginBottom: "10px"}}>적금 추천 상품</div>
        <Row>
          <Col><img src="/images/정기예금.png"></img></Col>
          <Col><img src="/images/적금.png"></img></Col>
        </Row>
      </div>

      <div style={{marginLeft:"20px", marginTop: "20px"}}>
        <div style={{ fontWeight: "bold", fontsize: "30px", marginBottom: "10px"}}>펀드 추천 상품</div>
        <Row>
          <Col><img src="/images/정기예금.png"></img></Col>
          <Col><img src="/images/적금.png"></img></Col>
        </Row>
      </div>

      <div style={{marginLeft:"20px", marginTop: "20px"}}>
        <div style={{ fontWeight: "bold", fontsize: "30px", marginBottom: "10px"}}>난진님 특징</div>
        <span style={{ color: "#848484" }}>#공격적인 투자자 </span>
        <span style={{ color: "#848484" }}>#수익률 50% </span>
        <br />
        <div style={{ fontWeight: "bold", fontsize: "30px", marginBottom: "10px", marginTop:"20px"}}>난진님 사용 상품</div>
        <span style={{ color: "#848484" }}>#신한 Deep Dream </span>
        <span style={{ color: "#848484" }}>#반도체주 </span>
        <span style={{ color: "#848484" }}>#바이오주 </span>
      </div>
      
    </>
  );
};

export default Recommend;
