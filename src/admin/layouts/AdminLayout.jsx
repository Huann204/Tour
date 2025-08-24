import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-3 lg:p-4 shadow-md">
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <h2 className="font-bold text-base lg:text-lg truncate">Trang quản trị</h2>
          <div className="flex items-center gap-2 lg:gap-3">
            <span className="text-xs lg:text-sm text-gray-600 hidden sm:block">Xin chào, Admin</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="rounded-full w-7 h-7 lg:w-8 lg:h-8"
            />
          </div>
        </header>

        {/* Outlet sẽ render page */}
        <main className="flex-1 p-3 lg:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
