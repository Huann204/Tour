// src/admin/pages/Categories.jsx
import React, { useState } from "react";

const Categories = () => {
  const [categories] = useState([
    {
      id: 1,
      name: "Tour Trong Nước",
      description: "Các tour du lịch trong nước Việt Nam",
      tourCount: 45,
      status: "active",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      name: "Tour Nước Ngoài",
      description: "Các tour du lịch quốc tế",
      tourCount: 32,
      status: "active",
      createdAt: "2024-01-10"
    },
    {
      id: 3,
      name: "Tour Biển Đảo",
      description: "Các tour du lịch biển đảo",
      tourCount: 28,
      status: "active",
      createdAt: "2024-01-08"
    },
    {
      id: 4,
      name: "Tour Văn Hóa",
      description: "Các tour du lịch văn hóa, lịch sử",
      tourCount: 18,
      status: "inactive",
      createdAt: "2024-01-05"
    },
    {
      id: 5,
      name: "Tour Mạo Hiểm",
      description: "Các tour du lịch mạo hiểm, khám phá",
      tourCount: 12,
      status: "active",
      createdAt: "2024-01-03"
    }
  ]);

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg lg:text-xl font-semibold">Quản lý Danh mục</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg transition text-sm lg:text-base">
            + Thêm danh mục
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">ID</th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">Tên danh mục</th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium hidden md:table-cell">Mô tả</th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">Số tour</th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">Trạng thái</th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium hidden lg:table-cell">Ngày tạo</th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="p-2 lg:p-3 border text-xs lg:text-sm">{category.id}</td>
                  <td className="p-2 lg:p-3 border font-medium text-xs lg:text-sm">{category.name}</td>
                  <td className="p-2 lg:p-3 border text-gray-600 text-xs lg:text-sm hidden md:table-cell">{category.description}</td>
                  <td className="p-2 lg:p-3 border text-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {category.tourCount}
                    </span>
                  </td>
                  <td className="p-2 lg:p-3 border">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      category.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {category.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                    </span>
                  </td>
                  <td className="p-2 lg:p-3 border text-gray-600 text-xs lg:text-sm hidden lg:table-cell">{category.createdAt}</td>
                  <td className="p-2 lg:p-3 border">
                    <div className="flex gap-1 lg:gap-2">
                      <button className="text-blue-500 hover:text-blue-700 text-xs lg:text-sm">Sửa</button>
                      <button className="text-red-500 hover:text-red-700 text-xs lg:text-sm">Xoá</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories; 