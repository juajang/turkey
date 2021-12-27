import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/common/Header";
import Feed from "./pages/Feed";
import Community from "./pages/Community";
import Wallet from "./pages/Wallet";
import PickMe from "./pages/PickMe";
import Recommend from "./pages/Recommend";
import { initialState, reducer, init } from "./reducer/wallet";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState, init);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="community" element={<Community />} />
        <Route path="pick-me" element={<PickMe />} />
        <Route
          path="user/wallet"
          element={<Wallet dispatch={dispatch} state={state} />}
        />
        <Route path="user/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
