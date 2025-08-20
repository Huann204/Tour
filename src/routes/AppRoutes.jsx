import React from "react";
import { Routes, Route } from "react-router-dom";
import HomPage from "../page/HomPage";
import ForeignTourPage from "../components/ForeignTourPage";
import TourDetailPage from "../components/TourDetailPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomPage />} />
        <Route path="Tour-nuoc-ngoai" element={<ForeignTourPage />} />
        <Route path="/tour/:code" element={<TourDetailPage />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
