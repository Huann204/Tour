import React from "react";
import { Routes, Route } from "react-router-dom";
import HomPage from "../page/HomPage";
import ForeignTourPage from "../components/ForeignTourPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomPage />} />
        <Route path="Tour-nuoc-ngoai" element={<ForeignTourPage />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
