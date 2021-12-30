import React from "react";
import styled from "styled-components";
import DoughnutChart from "../feed/DoughnutChart";
import { Link } from "react-router-dom";

const Card = styled.div`
  padding: 15px;
  border-radius: 15px;
  position: relative;
  width: ${(props) => (props.fullWidth ? "100%" : "174px")};
  background-color: ${(props) => props.bgColor};
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
    font-size: 28px;
    font-weight: 650;
    display: grid;
    place-items: center;
    width: 100%;
  }
`;

const ContentCard = ({
  id,
  chartData,
  like,
  nickname,
  income,
  index,
  priceEarnings,
  fullWidth,
  style,
}) => {
  const bgColors = [
    "#FFE4E4",
    "#5ED8FF20",
    "#74FF5E20",
    "#FFBE5E20",
    "#F5FE8E20",
    "#FE8EEC20",
  ];

  return (
    <Link key={id} to={`/post/${id}`}>
      <Card bgColor={bgColors[index]} fullWidth={priceEarnings} style={style}>
        <div>
          <span className="like">${like}</span>
          <DoughnutChart
            data={chartData}
            style={{
              width: fullWidth ? 142 : 170,
              height: fullWidth ? 142 : 170,
            }}
            title={
              <>
                <div className="nickname">{nickname}</div>
                <div className="income">{income}/月</div>
              </>
            }
          />
        </div>
        {fullWidth && priceEarnings && (
          <div className="price-earnings">
            <div>
              수익률
              <div
                style={{
                  paddingTop: "7px",
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
    </Link>
  );
};

export default ContentCard;
