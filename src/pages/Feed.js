import React from "react";
import styled from "styled-components";
import DoughnutChart from "../components/feed/DoughnutChart";
import { Link } from "react-router-dom";
import dummy from "../components/common/data.json";
import ContentCard from "../components/common/ContentCard";

const GridContainer = styled.div`
  padding: 0 10px;
  display: grid;
  place-items: center;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;

  a {
    color: black;
  }
`;

const CardContainer = styled.div`
  padding: 10px;

  a {
    color: black;
  }
`;

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

const Feed = () => {
  const { data } = dummy;
  const bgColors = [
    "#FFE4E4",
    "#5ED8FF20",
    "#74FF5E20",
    "#FFBE5E20",
    "#F5FE8E20",
    "#FE8EEC20",
  ];

  return (
    <>
      <GridContainer>
        {data.slice(0, 4).map((data, index) => (
          <ContentCard {...data} index={index} />
        ))}
      </GridContainer>
      <CardContainer>
        {data.slice(4, 6).map((data, index) => (
          <ContentCard
            {...data}
            key={data.id}
            index={index}
            fullWidth={true}
            style={{
              display: "flex",
              marginBottom: "10px",
            }}
          />
        ))}
      </CardContainer>
    </>
  );
};
export default Feed;
