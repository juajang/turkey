import React from "react";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWrapper = styled.div`
  position: relative;
  .title-wrapper {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 45px;
    left: 45px;
  }
`;

const DoughnutChart = ({ data, title, style }) => {
  return (
    <ChartWrapper>
      <Doughnut
        style={style}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: ["지출", "투자", "저축", "수입"],
          datasets: [
            {
              data,
              backgroundColor: [
                "#F96666",
                "#43D0EA",
                "#FEDD75",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
            },
          ],
        }}
      />
      <div className="title-wrapper">{title}</div>
    </ChartWrapper>
  );
};

export default DoughnutChart;
