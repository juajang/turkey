import React from "react";
import styled from "styled-components";
import { Tag, Divider, Button } from 'antd';
import DoughnutChart from "../components/feed/DoughnutChart";

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

const Wallet = ({ state, dispatch }) => {
  console.log(state);
  console.log(state.deposit);
  
  const { income, consume, invest, deposit } = state;

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "income", income: 30 });
        }}
      >
        +30 income
      </button>
      <button
        onClick={() => {
          dispatch({ type: "income", income: -30 });
        }}
      >
        -30 income
      </button>
      <hr></hr>
      <button
        onClick={() => {
          dispatch({ type: "deposit", deposit: 30 });
        }}
      >
        +30 deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: "deposit", deposit: -30 });
        }}
      >
        -30 deposit
      </button>
      <hr></hr>
      <button
        onClick={() => {
          dispatch({ type: "invest", invest: 30 });
        }}
      >
        +30 invest
      </button>
      <button
        onClick={() => {
          dispatch({ type: "invest", invest: -30 });
        }}
      >
        -30 invest
      </button>
      
      <Card>
        <div>
          <span className="like">$20</span>
          <DoughnutChart
            data={[deposit, consume, invest]}
            style={{
              width: 20,
              height: 20,
            }}
            title={
              <>
                <div className="nickname">난진</div>
                <div className="income">{income}/月</div>
              </>
            }
          />
        </div>
      </Card>

      <Button shape="round">SOL에서 불러오기</Button>
      <Divider orientation="left">난진님 특징</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="magenta">공격적인 투자자</Tag>
        <Tag color="red">수익률 50%</Tag>
      </div>
      <Divider orientation="left">난진님 사용상품</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="cyan">신한 Deep Dream</Tag>
        <Tag color="blue">반도체주</Tag>
        <Tag color="green">바이오주</Tag>
      </div>
      <Divider orientation="left">난진님과 비슷한 상품 추천</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="orange">신한 Deep Dream Platinum+</Tag>
        <Tag color="purple">배터리주</Tag>
      </div>
    </>
  );
};

export default Wallet;
