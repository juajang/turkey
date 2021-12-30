import React, { useState } from 'react';
import styled from "styled-components";
import { Tag, Divider, Button, Collapse, Row, Col, Modal, Form, Input, Progress } from 'antd';
import { DollarOutlined, DollarCircleFilled, PlusCircleOutlined, HeartFilled, EditOutlined } from '@ant-design/icons';
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
  height: 50px;
  font-size: 25px;
  font-weight: 550;
  display: grid;
  place-items: center;
`;

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원";
}

const Wallet = ({ state, dispatch }) => {
  const [isIncomeVisible, setIsIncomeVisible] = useState(false);
  const [isConsumeVisible, setIsConsumeVisible] = useState(false);
  const [isInvestVisible, setIsInvestVisible] = useState(false);
  const [isDepositVisible, setIsDepositVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const { income, consume, invest, deposit, consumeList, investList, depositList, incomeList } = state;
  const { Panel } = Collapse;

  const incomeOk = () => {
    setIsIncomeVisible(false);
    dispatch({ type: "add_income", title: title, price: parseInt(price)});
    setTitle("");
    setPrice(0);
  };

  const incomeCancel = () => {
    setIsIncomeVisible(false);
    setTitle("");
    setPrice(0);
  };

  const consumeOk = () => {
    setIsConsumeVisible(false);
    dispatch({ type: "add_consume", title: title, price: parseInt(price)});
    setTitle("");
    setPrice(0);
  };

  const consumeCancel = () => {
    setIsConsumeVisible(false);
    setTitle("");
    setPrice(0);
  };

  const investOk = () => {
    setIsInvestVisible(false);
    dispatch({ type: "add_invest", title: title, price: parseInt(price)});
    setTitle("");
    setPrice(0);
  };

  const investCancel = () => {
    setIsInvestVisible(false);
    setTitle("");
    setPrice(0);
  };

  const depositOk = () => {
    setIsDepositVisible(false);
    dispatch({ type: "add_deposit", title: title, price: parseInt(price)});
    setTitle("");
    setPrice(0);
  };

  const depositCancel = () => {
    setIsDepositVisible(false);
    setTitle("");
    setPrice(0);
  };

  const Income = () => {
    return(
      <>
        <DollarCircleFilled style={{fontSize:"20px", marginRight:"10px"}}/>
        <div style={{marginRight: "50px", fontSize:"15px", fontWeight:"bold"}}> 수입</div>
        <div>{priceToString(income)}</div>
      </>
    )
  }

  const Consume = () => {
    return(
      <>
        <HeartFilled style={{color: "#F96666", fontSize:"20px", marginRight:"10px"}}/>
        <div style={{marginRight: "50px", fontSize:"15px", fontWeight:"bold"}}> 지출</div>
        <div>{priceToString(consume)}</div>
      </>
    )
  }

  const Invest = () => {
    return(
      <>
        <HeartFilled style={{color: "#43D0EA", fontSize:"20px", marginRight:"10px"}}/>
        <div style={{marginRight: "50px", fontSize:"15px", fontWeight:"bold"}}>투자</div>
        <div>{priceToString(invest)}</div>
      </>
    )
  }

  const Deposit = () => {
    return(
      <>
        <HeartFilled style={{color: "#FEDD75", fontSize:"20px", marginRight:"10px"}}/>
        <div style={{marginRight: "50px", fontSize:"15px", fontWeight:"bold"}}>저축</div>
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

      <Card style={{margin:"auto", marginTop:"30px"}}>
        <div>
          <DoughnutChart
            data={[consume, invest, deposit]}
            style={{
              width: 40,
              height: 40,
            }}
            title={
              <>
                <div className="income">{priceToString(consume+invest+deposit)}</div>
              </>
            }
          />
        </div>
      </Card>
      
      <Button
        shape="round"
        size="small"
        style={{
          position: "relative",
          marginTop: "20px",
          marginLeft: "20px",
          backgroundColor: "rgba(128, 232, 255, 0.52)",
          border:0,
          outline:0
        }}
      >
        SOL에서 불러오기
      </Button>
    
      <Collapse ghost style={{ postion: "relative", marginTop: "20px" }}>
        <Panel
          header={<Income />}
          extra={<PlusCircleOutlined
            style={{ fontSize: "20px", float: "right" }}
            onClick={(event) => {
              event.stopPropagation();
              setIsIncomeVisible(true);
            }} />} key="200">
          {incomeList && incomeList
            .map(({ title, price }) => (
              <Row>
                <Col span={4}></Col>
                <Col span={6}>{"+ ", title}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))
            }
        </Panel>
        <Divider style={{marginLeft:"10px", marginRight:"10px"}}/>
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
                <Col span={4}></Col>
                <Col span={6}>{"+ ", title}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))
          }
          <div style={{width:"300px", marginTop:"10px"}}>
            <Progress percent={Math.floor(100*consume/(consume+invest+deposit))} style={{marginLeft:"20px", marginRight:"50px"}} strokeColor="#F96666" />
          </div>
        </Panel>
        <Panel header={<Invest />} extra={<PlusCircleOutlined
          style={{ fontSize: "20px", float: "right" }}
          onClick={(event) => {
            event.stopPropagation();
            setIsInvestVisible(true);
          }} />} key="202">
          {investList && investList
            .map(({ title, price }) => (
              <Row>
                <Col span={4}></Col>
                <Col span={6}>{"+ ", title}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))
          }
          <div style={{width:"300px", marginTop:"10px"}}>
            <Progress percent={Math.floor(100*invest/(consume+invest+deposit))} style={{marginLeft:"20px", marginRight:"50px"}} strokeColor="#43D0EA" />
          </div>
        </Panel>
        <Panel header={<Deposit />} extra={<PlusCircleOutlined
          style={{ fontSize: "20px", float: "right" }}
          onClick={(event) => {
            event.stopPropagation();
            setIsDepositVisible(true);
          }} />} key="203">
          {depositList && depositList
            .map(({ title, price }) => (
              <Row>
                <Col span={4}></Col>
                <Col span={6}>{"+ ", title}</Col>
                <Col span={14}>{priceToString(price)}</Col>
              </Row>
            ))
          }
          <div style={{width:"300px", marginTop:"10px"}}>
            <Progress percent={Math.floor(100*deposit/(consume+invest+deposit))} style={{marginLeft:"20px", marginRight:"50px"}} strokeColor="#FEDD75" />
          </div>
        </Panel>
      </Collapse>

      <Modal title="수입 내역 추가" visible={isIncomeVisible} onOk={incomeOk} onCancel={incomeCancel}>
        <Form>
          <Form.Item label="수입 이름" rules={[{required: true, message: 'Please input your username!'}]}>
            <Input
              placeholder="이름을 입력해주세요"
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item label="가격" rules={[{type: "number", message: "Please input number"}, {required: true, message: "Please input your username!"}]}>
            <Input
              placeholder="가격을 입력해주세요"
              onChange={(event) => {
                setPrice(event.currentTarget.value);
              }}  
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="지출 내역 추가" visible={isConsumeVisible} onOk={consumeOk} onCancel={consumeCancel}>
        <Form>
          <Form.Item label="지출 이름" rules={[{required: true, message: 'Please input your username!'}]}>
            <Input
              placeholder="이름을 입력해주세요"
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item label="가격" rules={[{type: "number", message: "Please input number"}, {required: true, message: 'Please input your username!'}]}>
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
          <Form.Item label="투자 이름" rules={[{required: true, message: 'Please input your username!'}]}>
            <Input
              placeholder="이름을 입력해주세요"
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item label="가격" rules={[{type: "number", message: "Please input number"}, {required: true, message: 'Please input your username!'}]}>
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
          <Form.Item label="저축 이름" rules={[{required: true, message: 'Please input your username!'}]}>
            <Input
              placeholder="이름을 입력해주세요"
              onChange={(event) => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item label="가격" rules={[{type: "number", message: "Please input number"}, {type: 'number', required: true, message: 'Please input your username!'}]}>
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
