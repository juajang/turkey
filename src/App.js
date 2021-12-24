import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/common/Header";
import Main from "./pages/Main";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
