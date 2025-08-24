// src/admin/pages/Orders.jsx
import React, { useState } from "react";

const Orders = () => {
  const [orders] = useState([
    {
      id: "ORD001",
      customerName: "Nguyễn Văn An",
      customerEmail: "an.nguyen@email.com",
      customerPhone: "0901234567",
      tourName: "Hạ Long - Sapa 3N2Đ",
      tourCode: "HLSP001",
      adults: 2,
      children: 1,
      babies: 0,
      totalAmount: 8500000,
      status: "confirmed",
      paymentStatus: "paid",
      bookingDate: "2024-01-20",
      departureDate: "2024-02-15"
    },
    {
      id: "ORD002",
      customerName: "Trần Thị Bình",
      customerEmail: "binh.tran@email.com",
      customerPhone: "0912345678",
      tourName: "Tour Nhật Bản 5N4Đ",
      tourCode: "JP001",
      adults: 3,
      children: 0,
      babies: 0,
      totalAmount: 45000000,
      status: "pending",
      paymentStatus: "pending",
      bookingDate: "2024-01-19",
      departureDate: "2024-03-10"
    },
    {
      id: "ORD003",
      customerName: "Lê Văn Cường",
      customerEmail: "cuong.le@email.com",
      customerPhone: "0923456789",
      tourName: "Phú Quốc 4N3Đ",
      tourCode: "PQ001",
      adults: 2,
      children: 2,
      babies: 1,
      totalAmount: 12000000,
      status: "cancelled",
      paymentStatus: "refunded",
      bookingDate: "2024-01-18",
      departureDate: "2024-02-20"
    },
    {
      id: "ORD004",
      customerName: "Phạm Thị Dung",
      customerEmail: "dung.pham@email.com",
      customerPhone: "0934567890",
      tourName: "Đà Nẵng - Hội An 3N2Đ",
      tourCode: "DNH001",
      adults: 4,
      children: 1,
      babies: 0,
      totalAmount: 18000000,
      status: "completed",
      paymentStatus: "paid",
      bookingDate: "2024-01-17",
      departureDate: "2024-01-25"
    },
    {
      id: "ORD005",
      customerName: "Hoàng Văn Em",
      customerEmail: "em.hoang@email.com",
      customerPhone: "0945678901",
      tourName: "Tour Thái Lan 4N3Đ",
      tourCode: "TH001",
      adults: 2,
      children: 0,
      babies: 0,
      totalAmount: 25000000,
      status: "confirmed",
      paymentStatus: "paid",
      bookingDate: "2024-01-16",
      departureDate: "2024-02-28"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed': return 'Đã xác nhận';
      case 'pending': return 'Chờ xác nhận';
      case 'cancelled': return 'Đã hủy';
      case 'completed': return 'Hoàn thành';
      default: return 'Không xác định';
    }
  };

  const getPaymentStatusColor = (status) => {
    return status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getPaymentStatusText = (status) => {
    return status === 'paid' ? 'Đã thanh toán' : status === 'pending' ? 'Chờ thanh toán' : 'Đã hoàn tiền';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Quản lý Đơn hàng</h3>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Xuất Excel
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            + Tạo đơn hàng
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Mã đơn</th>
              <th className="p-3 border">Khách hàng</th>
              <th className="p-3 border">Tour</th>
              <th className="p-3 border">Số lượng</th>
              <th className="p-3 border">Tổng tiền</th>
              <th className="p-3 border">Trạng thái</th>
              <th className="p-3 border">Thanh toán</th>
              <th className="p-3 border">Ngày khởi hành</th>
              <th className="p-3 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-3 border font-medium">{order.id}</td>
                <td className="p-3 border">
                  <div>
                    <div className="font-medium">{order.customerName}</div>
                    <div className="text-gray-600 text-xs">{order.customerEmail}</div>
                    <div className="text-gray-600 text-xs">{order.customerPhone}</div>
                  </div>
                </td>
                <td className="p-3 border">
                  <div>
                    <div className="font-medium">{order.tourName}</div>
                    <div className="text-gray-600 text-xs">Mã: {order.tourCode}</div>
                  </div>
                </td>
                <td className="p-3 border">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Người lớn: {order.adults}</div>
                    <div className="text-xs text-gray-600">Trẻ em: {order.children}</div>
                    <div className="text-xs text-gray-600">Em bé: {order.babies}</div>
                  </div>
                </td>
                <td className="p-3 border font-medium">
                  {order.totalAmount.toLocaleString('vi-VN')} đ
                </td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded-full text-xs ${getPaymentStatusColor(order.paymentStatus)}`}>
                    {getPaymentStatusText(order.paymentStatus)}
                  </span>
                </td>
                <td className="p-3 border text-gray-600">{order.departureDate}</td>
                <td className="p-3 border">
                  <div className="flex gap-1">
                    <button className="text-blue-500 hover:text-blue-700 text-xs">Chi tiết</button>
                    <button className="text-green-500 hover:text-green-700 text-xs">Sửa</button>
                    <button className="text-red-500 hover:text-red-700 text-xs">Xoá</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders; 