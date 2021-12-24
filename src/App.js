import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/common/Header";
import Feed from "./pages/Feed";
import Community from "./pages/Community";
import UserPage from "./pages/UserPage";
import PickMe from "./pages/PickMe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="community" element={<Community />} />
        <Route path="user" element={<UserPage />} />
        <Route path="pick-me" element={<PickMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
