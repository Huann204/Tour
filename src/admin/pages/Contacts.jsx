// src/admin/pages/Contacts.jsx
import React, { useState } from "react";

const Contacts = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: "Nguyễn Văn An",
      email: "an.nguyen@email.com",
      phone: "0901234567",
      subject: "Tư vấn tour Hạ Long",
      message: "Tôi muốn tư vấn về tour Hạ Long 3 ngày 2 đêm. Có thể cho tôi biết thêm thông tin về lịch trình và giá cả không?",
      status: "unread",
      createdAt: "2024-01-20 14:30:00",
      priority: "medium"
    },
    {
      id: 2,
      name: "Trần Thị Bình",
      email: "binh.tran@email.com",
      phone: "0912345678",
      subject: "Đặt tour Nhật Bản",
      message: "Tôi muốn đặt tour Nhật Bản vào tháng 3. Có thể tư vấn cho tôi về visa và các thủ tục cần thiết không?",
      status: "read",
      createdAt: "2024-01-19 16:45:00",
      priority: "high"
    },
    {
      id: 3,
      name: "Lê Văn Cường",
      email: "cuong.le@email.com",
      phone: "0923456789",
      subject: "Khiếu nại dịch vụ",
      message: "Tôi đã đặt tour Phú Quốc nhưng có một số vấn đề về dịch vụ. Mong được hỗ trợ giải quyết.",
      status: "replied",
      createdAt: "2024-01-18 09:15:00",
      priority: "high"
    },
    {
      id: 4,
      name: "Phạm Thị Dung",
      email: "dung.pham@email.com",
      phone: "0934567890",
      subject: "Hợp tác kinh doanh",
      message: "Công ty chúng tôi muốn hợp tác với quý công ty về các tour du lịch. Mong được trao đổi chi tiết.",
      status: "unread",
      createdAt: "2024-01-17 11:20:00",
      priority: "low"
    },
    {
      id: 5,
      name: "Hoàng Văn Em",
      email: "em.hoang@email.com",
      phone: "0945678901",
      subject: "Tư vấn tour gia đình",
      message: "Gia đình tôi có 4 người lớn và 2 trẻ em muốn đi tour Đà Nẵng. Có tour nào phù hợp không?",
      status: "read",
      createdAt: "2024-01-16 13:10:00",
      priority: "medium"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-blue-100 text-blue-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'unread': return 'Chưa đọc';
      case 'read': return 'Đã đọc';
      case 'replied': return 'Đã trả lời';
      default: return 'Không xác định';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high': return 'Cao';
      case 'medium': return 'Trung bình';
      case 'low': return 'Thấp';
      default: return 'Không xác định';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Thông tin Liên hệ</h3>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Xuất Excel
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            Đánh dấu đã đọc
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Thông tin liên hệ</th>
              <th className="p-3 border">Tiêu đề</th>
              <th className="p-3 border">Nội dung</th>
              <th className="p-3 border">Trạng thái</th>
              <th className="p-3 border">Độ ưu tiên</th>
              <th className="p-3 border">Thời gian</th>
              <th className="p-3 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="p-3 border">{contact.id}</td>
                <td className="p-3 border">
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-gray-600 text-sm">{contact.email}</div>
                    <div className="text-gray-600 text-sm">{contact.phone}</div>
                  </div>
                </td>
                <td className="p-3 border font-medium">{contact.subject}</td>
                <td className="p-3 border">
                  <div className="max-w-xs">
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {contact.message}
                    </p>
                  </div>
                </td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(contact.status)}`}>
                    {getStatusText(contact.status)}
                  </span>
                </td>
                <td className="p-3 border">
                  <span className={`px-2 py-1 rounded-full text-sm ${getPriorityColor(contact.priority)}`}>
                    {getPriorityText(contact.priority)}
                  </span>
                </td>
                <td className="p-3 border text-gray-600 text-sm">{contact.createdAt}</td>
                <td className="p-3 border">
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700 text-sm">Xem chi tiết</button>
                    <button className="text-green-500 hover:text-green-700 text-sm">Trả lời</button>
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
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="text-red-800 font-medium">Chưa đọc</h4>
          <p className="text-2xl font-bold text-red-600">
            {contacts.filter(c => c.status === 'unread').length}
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-blue-800 font-medium">Đã đọc</h4>
          <p className="text-2xl font-bold text-blue-600">
            {contacts.filter(c => c.status === 'read').length}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="text-green-800 font-medium">Đã trả lời</h4>
          <p className="text-2xl font-bold text-green-600">
            {contacts.filter(c => c.status === 'replied').length}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="text-yellow-800 font-medium">Ưu tiên cao</h4>
          <p className="text-2xl font-bold text-yellow-600">
            {contacts.filter(c => c.priority === 'high').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts; 