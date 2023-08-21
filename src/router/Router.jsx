import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import App2 from "../App2";
import App3 from "../App3";
import Sidebar from "../common/sidebar/Sidebar";

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Sidebar />}>
        <Route path="/" element={<App />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
      </Route>
    </Routes>
  );
};

export default Router;
