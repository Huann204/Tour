import React from "react";
import { Routes, Route } from "react-router-dom";
import HomPage from "../page/HomPage";
import ForeignTourPage from "../components/ForeignTourPage";
import TourDetailPage from "../components/TourDetailPage";
import CartPage from "../components/CartPage";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminRegister from "../admin/pages/AdminRegister";
import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../admin/layouts/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import Tours from "../admin/pages/Tours";
import Categories from "../admin/pages/Categories";
import Orders from "../admin/pages/Orders";
import Users from "../admin/pages/Users";
import Contacts from "../admin/pages/Contacts";
import Settings from "../admin/pages/Settings";
import Profile from "../admin/pages/Profile";
import ProtectedRoute from "../admin/components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomPage />} />
          <Route path="Tour-nuoc-ngoai" element={<ForeignTourPage />} />
          <Route path="/tour/:code" element={<TourDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        {/* admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="categories" element={<Categories />} />
          <Route path="tours" element={<Tours />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
