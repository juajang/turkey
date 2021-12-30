import React, { useState } from "react";
import styled from "styled-components";
import dummy from "../components/common/data.json";
import { Tag, Divider, Button, Collapse, Row, Col, Progress } from "antd";
import {
  DollarOutlined,
  DollarCircleFilled,
  HeartFilled,
} from "@ant-design/icons";
import DoughnutChart from "../components/feed/DoughnutChart";
import { useParams } from "react-router-dom";

const Card = styled.div`
  padding: 15px;
  border-radius: 15px;
  position: relative;
  width: ${(props) => (props.fullWidth ? "100%" : "174px")};
  height: 170px;
  border: 1px solid #f0f0f0;
  font-size: 12px;

  .like {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #ea6262;
  }

  .title-wrapper {
    display: flex;
    padding: 15px 0;
    flex-direction: column;
    align-items: center;
    font-weight: 550;
  }

  .income {
    padding-top: 3px;
    color: #2704fa;
  }

  .price-earnings {
    font-size: 24px;
    font-weight: 550;
    display: grid;
    place-items: center;
    width: 100%;
  }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  font-size: 25px;
  font-weight: 550;
  display: grid;
  place-items: center;
`;

const Like = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #7b7979;
  display: flex;
  justify-content: flex-end;
  padding: 0 80px;
  position: relative;
  top: -12px;
`;

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

const Wallet = ({ state }) => {
  const {
    income,
    consume,
    invest,
    deposit,
    consumeList,
    investList,
    depositList,
    incomeList,
  } = state;
  const { Panel } = Collapse;
  const { data } = dummy;
  const { id } = useParams();
  const { nickname, like } = data[Number(id)];

  const Income = () => {
    return (
      <>
        <DollarCircleFilled style={{ fontSize: "20px", marginRight: "10px" }} />
        <div
          style={{ marginRight: "50px", fontSize: "15px", fontWeight: "bold" }}
        >
          수입
        </div>
        <div>{priceToString(income)}</div>
      </>
    );
  };

  const Consume = () => {
    return (
      <>
        <HeartFilled
          style={{ color: "#F96666", fontSize: "20px", marginRight: "10px" }}
        />
        <div
          style={{ marginRight: "50px", fontSize: "15px", fontWeight: "bold" }}
        >
          지출
        </div>
        <div>{priceToString(consume)}</div>
      </>
    );
  };

  const Invest = () => {
    return (
      <>
        <HeartFilled
          style={{ color: "#43D0EA", fontSize: "20px", marginRight: "10px" }}
        />
        <div
          style={{ marginRight: "50px", fontSize: "15px", fontWeight: "bold" }}
        >
          투자
        </div>
        <div>{priceToString(invest)}</div>
      </>
    );
  };

  const Deposit = () => {
    return (
      <>
        <HeartFilled
          style={{ color: "#FEDD75", fontSize: "20px", marginRight: "10px" }}
        />
        <div
          style={{ marginRight: "50px", fontSize: "15px", fontWeight: "bold" }}
        >
          저축
        </div>
        <div>{priceToString(deposit)}</div>
      </>
    );
  };

  return (
    <div style={{ padding: "10px 10px 20px 10px" }}>
      <HeaderWrapper>
        <h1>{nickname}</h1>
      </HeaderWrapper>
      <Like>
        <DollarOutlined
          style={{ color: "#FBB117", marginRight: "5px", marginTop: -1 }}
        />
        {like}
      </Like>

      <Card style={{ margin: "auto", width: 200, height: 200 }}>
        <DoughnutChart
          data={[consume, invest, deposit]}
          title={
            <>
              <div
                className="income"
                style={{
                  width: "100px",
                  paddingTop: "12px",
                  paddingLeft: "16px",
                }}
              >
                {priceToString(consume + invest + deposit)}
              </div>
            </>
          }
        />
      </Card>

      <Button
        shape="round"
        size="small"
        style={{
          position: "relative",
          marginTop: "20px",
          marginLeft: "20px",
          backgroundColor: "rgba(128, 232, 255, 0.52)",
          border: 0,
          outline: 0,
        }}
      >
        SOL에서 불러오기
      </Button>

      <Collapse ghost style={{ postion: "relative", marginTop: "20px" }}>
        <Panel header={<Income />} key="200">
          {incomeList &&
            incomeList.map(({ title, price }) => (
              <Row>
                <Col span={4}></Col>
                <Col span={6}>{("+ ", title)}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))}
        </Panel>
        <Divider style={{ marginLeft: "10px", marginRight: "10px" }} />
        <Panel header={<Consume />} key="201">
          {consumeList &&
            consumeList.map(({ title, price }) => (
              <Row>
                <Col span={4}></Col>
                <Col span={6}>{("+ ", title)}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))}
          <div style={{ width: "300px", marginTop: "10px" }}>
            <Progress
              percent={Math.floor(
                (100 * consume) / (consume + invest + deposit)
              )}
              style={{ marginLeft: "20px", marginRight: "50px" }}
              strokeColor="#F96666"
            />
          </div>
        </Panel>
        <Panel header={<Invest />} key="202">
          {investList &&
            investList.map(({ title, price }) => (
              <Row>
                <Col span={4}></Col>
                <Col span={6}>{("+ ", title)}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))}
          <div style={{ width: "300px", marginTop: "10px" }}>
            <Progress
              percent={Math.floor(
                (100 * invest) / (consume + invest + deposit)
              )}
              style={{ marginLeft: "20px", marginRight: "50px" }}
              strokeColor="#43D0EA"
            />
          </div>
        </Panel>
        <Panel header={<Deposit />} key="203">
          {depositList &&
            depositList.map(({ title, price }) => (
              <Row>
                <Col span={4}></Col>
                <Col span={6}>{("+ ", title)}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))}
          <div style={{ width: "300px", marginTop: "10px" }}>
            <Progress
              percent={Math.floor(
                (100 * deposit) / (consume + invest + deposit)
              )}
              style={{ marginLeft: "20px", marginRight: "50px" }}
              strokeColor="#FEDD75"
            />
          </div>
        </Panel>
      </Collapse>
      <Divider orientation="left">{nickname}님 특징</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="blue">공격적인 투자자</Tag>
        <Tag color="blue">수익률 50%</Tag>
      </div>
      <Divider orientation="left">{nickname}님 사용상품</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="cyan">신한 Deep Dream</Tag>
        <Tag color="cyan">반도체주</Tag>
        <Tag color="cyan">바이오주</Tag>
      </div>
    </div>
  );
};

export default Wallet;
