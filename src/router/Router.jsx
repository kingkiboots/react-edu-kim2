import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import App2 from "../App2";
import App3 from "../App3";
import Navbar from "../common/navbar/Navbar";
import SampleForMemoizationLayout from "../layout/sampleForMemoization/SampleForMemoizationLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Navbar />}>
        <Route path="/" element={<App />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
        <Route
          path="/memoizationSample"
          element={<SampleForMemoizationLayout />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
