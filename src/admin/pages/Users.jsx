// src/admin/pages/Users.jsx
import React, { useState } from "react";

const Users = () => {
  const [users] = useState([
    {
      id: 1,
      name: "Nguyễn Văn An",
      email: "an.nguyen@email.com",
      phone: "0901234567",
      role: "customer",
      status: "active",
      joinDate: "2024-01-15",
      totalOrders: 5,
      totalSpent: 25000000
    },
    {
      id: 2,
      name: "Trần Thị Bình",
      email: "binh.tran@email.com",
      phone: "0912345678",
      role: "customer",
      status: "active",
      joinDate: "2024-01-10",
      totalOrders: 3,
      totalSpent: 18000000
    },
    {
      id: 3,
      name: "Lê Văn Cường",
      email: "cuong.le@email.com",
      phone: "0923456789",
      role: "admin",
      status: "active",
      joinDate: "2023-12-01",
      totalOrders: 0,
      totalSpent: 0
    },
    {
      id: 4,
      name: "Phạm Thị Dung",
      email: "dung.pham@email.com",
      phone: "0934567890",
      role: "customer",
      status: "inactive",
      joinDate: "2024-01-05",
      totalOrders: 2,
      totalSpent: 12000000
    },
    {
      id: 5,
      name: "Hoàng Văn Em",
      email: "em.hoang@email.com",
      phone: "0945678901",
      role: "customer",
      status: "active",
      joinDate: "2024-01-20",
      totalOrders: 1,
      totalSpent: 8500000
    },
    {
      id: 6,
      name: "Vũ Thị Phương",
      email: "phuong.vu@email.com",
      phone: "0956789012",
      role: "staff",
      status: "active",
      joinDate: "2023-11-15",
      totalOrders: 0,
      totalSpent: 0
    }
  ]);

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'staff': return 'bg-purple-100 text-purple-800';
      case 'customer': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleText = (role) => {
    switch (role) {
      case 'admin': return 'Quản trị viên';
      case 'staff': return 'Nhân viên';
      case 'customer': return 'Khách hàng';
      default: return 'Không xác định';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getStatusText = (status) => {
    return status === 'active' ? 'Hoạt động' : 'Không hoạt động';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Quản lý Người dùng</h3>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Xuất Excel
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            + Thêm người dùng
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Thông tin</th>
              <th className="p-3 border">Vai trò</th>
              <th className="p-3 border">Trạng thái</th>
              <th className="p-3 border">Ngày tham gia</th>
              <th className="p-3 border">Đơn hàng</th>
              <th className="p-3 border">Tổng chi tiêu</th>
              <th className="p-3 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3 border">{user.id}</td>
                <td className="p-3 border">
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-gray-600 text-sm">{user.email}</div>
                    <div className="text-gray-600 text-sm">{user.phone}</div>
                  </div>
                </td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded-full text-sm ${getRoleColor(user.role)}`}>
                    {getRoleText(user.role)}
                  </span>
                </td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(user.status)}`}>
                    {getStatusText(user.status)}
                  </span>
                </td>
                <td className="p-3 border text-gray-600">{user.joinDate}</td>
                <td className="p-3 border text-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {user.totalOrders}
                  </span>
                </td>
                <td className="p-3 border font-medium">
                  {user.totalSpent > 0 ? `${user.totalSpent.toLocaleString('vi-VN')} đ` : '-'}
                </td>
                <td className="p-3 border">
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700 text-sm">Chi tiết</button>
                    <button className="text-green-500 hover:text-green-700 text-sm">Sửa</button>
                    <button className="text-red-500 hover:text-red-700 text-sm">Xoá</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Thống kê nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-blue-800 font-medium">Tổng người dùng</h4>
          <p className="text-2xl font-bold text-blue-600">{users.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="text-green-800 font-medium">Khách hàng</h4>
          <p className="text-2xl font-bold text-green-600">
            {users.filter(u => u.role === 'customer').length}
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="text-purple-800 font-medium">Nhân viên</h4>
          <p className="text-2xl font-bold text-purple-600">
            {users.filter(u => u.role === 'staff').length}
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="text-red-800 font-medium">Quản trị viên</h4>
          <p className="text-2xl font-bold text-red-600">
            {users.filter(u => u.role === 'admin').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users; 