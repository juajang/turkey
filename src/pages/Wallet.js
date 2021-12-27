import React from "react";

const Wallet = ({ state, dispatch }) => {
  console.log(state);
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
      <h1> 마이 페이지 </h1>
    </>
  );
};

export default Wallet;
