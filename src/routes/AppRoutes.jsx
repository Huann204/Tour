import React from "react";
import { Routes, Route } from "react-router-dom";
import HomPage from "../page/HomPage";
import ForeignTourPage from "../components/ForeignTourPage";
import TourDetailPage from "../components/TourDetailPage";
import CartPage from "../components/CartPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomPage />} />
        <Route path="Tour-nuoc-ngoai" element={<ForeignTourPage />} />
        <Route path="/tour/:code" element={<TourDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
