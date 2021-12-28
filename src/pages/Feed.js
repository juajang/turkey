import React from "react";
import styled from "styled-components";
import DoughnutChart from "../components/feed/DoughnutChart";
import dummy from "../components/feed/data.json";

const GridContainer = styled.div`
  padding: 0 10px;
  display: grid;
  place-items: center;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

const CardContainer = styled.div`
  padding: 10px;
`;

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

const Feed = () => {
  const { data } = dummy;

  return (
    <>
      <GridContainer>
        {data.slice(0, 4).map(({ id, chartData, like, nickname, income }) => (
          <Card key={id}>
            <div>
              <span className="like">${like}</span>
              <DoughnutChart
                data={chartData}
                style={{
                  width: 170,
                  height: 170,
                }}
                title={
                  <>
                    <div className="nickname">{nickname}</div>
                    <div className="income">{income}/月</div>
                  </>
                }
              />
            </div>
          </Card>
        ))}
      </GridContainer>
      <CardContainer>
        {data
          .slice(4, 6)
          .map(({ id, chartData, like, nickname, income, priceEarnings }) => (
            <Card
              key={id}
              fullWidth={priceEarnings}
              style={{
                display: "flex",
                marginBottom: "10px",
              }}
            >
              <div>
                <span className="like">${like}</span>
                <DoughnutChart
                  data={chartData}
                  style={{
                    width: 142,
                    height: 142,
                  }}
                  title={
                    <>
                      <div className="nickname">{nickname}</div>
                      <div className="income">{income}/月</div>
                    </>
                  }
                />
              </div>
              {priceEarnings && (
                <div className="price-earnings">
                  <div>
                    수익률
                    <div
                      style={{
                        paddingTop: "5px",
                        color: priceEarnings > 0 ? "#FF0514" : "#4605FF",
                      }}
                    >
                      {priceEarnings > 0 && "+"}
                      {priceEarnings}%
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
      </CardContainer>
    </>
  );
};
export default Feed;
