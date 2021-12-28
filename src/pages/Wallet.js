import React, { useState } from 'react';
import styled from "styled-components";
import { Tag, Divider, Button, Collapse, Row, Col, Modal, Form, Input } from 'antd';
import { DollarOutlined, PlusCircleOutlined } from '@ant-design/icons';
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

const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  height: 80px;
  font-size: 25px;
  font-weight: 550;
  display: grid;
  place-items: center;
`;

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
}

const Wallet = ({ state, dispatch }) => {
  console.log(state);
  console.log(state.consumeList);
  const [isConsumeVisible, setIsConsumeVisible] = useState(false);
  const [isInvestVisible, setIsInvestVisible] = useState(false);
  const [isDepositVisible, setIsDepositVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const { income, consume, invest, deposit, consumeList, investList, depositList } = state;
  const { Panel } = Collapse;

  const consumeOk = () => {
    setIsConsumeVisible(false);
    console.log("이름", title);
    console.log("가격", price);
    dispatch({ type: "add_consume", title: title, price: parseInt(price)})
  };

  const consumeCancel = () => {
    setIsConsumeVisible(false);
  };

  const investOk = () => {
    setIsInvestVisible(false);
    console.log("이름", title);
    console.log("가격", price);
    dispatch({ type: "add_invest", title: title, price: parseInt(price)})
  };

  const investCancel = () => {
    setIsInvestVisible(false);
  };

  const depositOk = () => {
    setIsDepositVisible(false);
    console.log("이름", title);
    console.log("가격", price);
    dispatch({ type: "add_deposit", title: title, price: parseInt(price)})
  };

  const depositCancel = () => {
    setIsDepositVisible(false);
  };

  const Consume = () => {
    return(
      <>
        <div style={{marginRight: "50px"}}>지출</div>
        <div>{priceToString(consume)}</div>
      </>
    )
  }

  const Invest = () => {
    return(
      <>
        <div style={{marginRight: "50px"}}>투자</div>
        <div>{priceToString(invest)}</div>
      </>
    )
  }

  const Deposit = () => {
    return(
      <>
        <div style={{marginRight: "50px"}}>저축</div>
        <div>{priceToString(deposit)}</div>
      </>
    )
  }

  return (
    <>
      <HeaderWrapper>
        <h1>난진</h1>
      </HeaderWrapper>
      
      <span className="like" style={{placeItems: "end", float:"right", marginRight:"80px"}}>
        <DollarOutlined style={{color: "#FBB117", marginRight: "5px"}} />20
      </span>

      <Card>
        <div>
          <DoughnutChart
            data={[consume, invest, deposit]}
            style={{
              width: 20,
              height: 20,
            }}
            title={
              <>
                <div className="income">{priceToString(income)}</div>
              </>
            }
          />
        </div>
      </Card>
      
      <Button shape="round" style={{position: "relative", marginTop: "20px"}}>SOL에서 불러오기</Button>

      <Collapse ghost style={{ postion: "relative", marginTop: "20px" }}>
        <Panel
          header={<Consume />}
          extra={<PlusCircleOutlined
            style={{ fontSize: "20px", float: "right" }}
            onClick={(event) => {
              event.stopPropagation();
              setIsConsumeVisible(true);
            }} />} key="201">
          {consumeList && consumeList
            .map(({ title, price }) => (
              <Row>
                <Col span={1}></Col>
                <Col span={4}>{"+ ", title}</Col>
                <Col span={16}>{priceToString(price)}</Col>
              </Row>
            ))
          }
        </Panel>
        <Divider />
        <Panel header={<Invest />} extra={<PlusCircleOutlined
          style={{ fontSize: "20px", float: "right" }}
          onClick={(event) => {
            event.stopPropagation();
            setIsInvestVisible(true);
          }} />} key="202">
          {investList && investList
            .map(({ title, price }) => (
              <Row>
                <Col span={1}></Col>
                <Col span={4}>{"+ ", title}</Col>
                <Col span={16}>{priceToString(price)}</Col>
              </Row>
            ))
          }
        </Panel>
        <Divider />
        <Panel header={<Deposit />} extra={<PlusCircleOutlined
          style={{ fontSize: "20px", float: "right" }}
          onClick={(event) => {
            event.stopPropagation();
            setIsDepositVisible(true);
          }} />} key="203">
          {depositList && depositList
            .map(({ title, price }) => (
              <Row>
                <Col span={1}></Col>
                <Col span={4}>{"+ ", title}</Col>
                <Col span={16}>{priceToString(price)}</Col>
              </Row>
            ))
          }
        </Panel>
      </Collapse>
      
      <Modal title="지출 내역 추가" visible={isConsumeVisible} onOk={consumeOk} onCancel={consumeCancel}>
        <Form>
          <Form.Item label="지출 이름">
            <Input
              placeholder="이름을 입력해주세요"
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item label="가격">
            <Input
              placeholder="가격을 입력해주세요"
              onChange={(event) => {
                setPrice(event.currentTarget.value);
              }}  
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="투자 내역 추가" visible={isInvestVisible} onOk={investOk} onCancel={investCancel}>
        <Form>
          <Form.Item label="투자 이름">
            <Input
              placeholder="이름을 입력해주세요"
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item label="가격">
            <Input
              placeholder="가격을 입력해주세요"
              onChange={(event) => {
                setPrice(event.currentTarget.value);
              }}  
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="저축 내역 추가" visible={isDepositVisible} onOk={depositOk} onCancel={depositCancel}>
        <Form>
          <Form.Item label="저축 이름">
            <Input
              placeholder="이름을 입력해주세요"
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item label="가격">
            <Input
              placeholder="가격을 입력해주세요"
              onChange={(event) => {
                setPrice(event.currentTarget.value);
              }}  
            />
          </Form.Item>
        </Form>
      </Modal>

      <Divider orientation="left">난진님 특징</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="blue">공격적인 투자자</Tag>
        <Tag color="blue">수익률 50%</Tag>
      </div>
      <Divider orientation="left">난진님 사용상품</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="cyan">신한 Deep Dream</Tag>
        <Tag color="cyan">반도체주</Tag>
        <Tag color="cyan">바이오주</Tag>
      </div>
      <Divider orientation="left">난진님과 비슷한 상품 추천</Divider>
      <div style={{ marginLeft: "10px" }}>
        <Tag color="green">신한 Deep Dream Platinum+</Tag>
        <Tag color="green">배터리주</Tag>
      </div>
    </>
  );
};

export default Wallet;
