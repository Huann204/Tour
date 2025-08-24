// src/admin/pages/Tours.jsx
import React, { useState, useEffect } from "react";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm fetch tours từ backend
  const fetchTours = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/tours?page=1&limit=10",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setTours(data.tours); // backend trả về { total, page, totalPages, tours }
      } else {
        console.error(data.error || "Lỗi khi tải tour");
      }
    } catch (err) {
      console.error("Lỗi kết nối:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const getStatusColor = (status) =>
    status === "active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";

  const getStatusText = (status) =>
    status === "active" ? "Hoạt động" : "Không hoạt động";

  // const getFeaturedColor = (featured) =>
  //   featured ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800";

  // const getFeaturedText = (featured) => (featured ? "Nổi bật" : "Bình thường");

  if (loading) return <p className="p-4">Đang tải danh sách tour...</p>;

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg lg:text-xl font-semibold">Quản lý Tour</h3>
          <div className="flex gap-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg transition text-sm lg:text-base">
              Xuất Excel
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg transition text-sm lg:text-base">
              + Thêm tour
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">
                  Mã tour
                </th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">
                  Tên tour
                </th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium hidden md:table-cell">
                  Giá
                </th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">
                  Thời gian
                </th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">
                  Điểm khởi hành
                </th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">
                  Trạng thái
                </th>
                <th className="p-2 lg:p-3 border text-xs lg:text-sm font-medium">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour._id} className="hover:bg-gray-50">
                  <td className="p-2 lg:p-3 border font-medium text-xs lg:text-sm">
                    {tour.code}
                  </td>
                  <td className="p-2 lg:p-3 border">
                    <div>
                      <div className="font-medium text-xs lg:text-sm">
                        {tour.title}
                      </div>
                      <div className="text-gray-600 text-xs hidden sm:block">
                        {tour.duration}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 lg:p-3 border hidden md:table-cell">
                    <div>
                      <div className="font-medium text-green-600 text-xs lg:text-sm">
                        {tour.priceNew.toLocaleString("vi-VN")} đ
                      </div>
                      <div className="text-gray-500 text-xs line-through hidden sm:block">
                        {tour.priceOld.toLocaleString("vi-VN")} đ
                      </div>
                    </div>
                  </td>
                  <td className="p-2 lg:p-3 border text-xs lg:text-sm">
                    {tour.duration}
                  </td>
                  <td className="p-2 lg:p-3 border text-xs lg:text-sm">
                    {tour.locationStart}
                  </td>
                  <td className="p-2 lg:p-3 border">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                        tour.status
                      )}`}
                    >
                      {getStatusText(tour.status)}
                    </span>
                  </td>
                  <td className="p-2 lg:p-3 border">
                    <div className="flex gap-1 lg:gap-2">
                      <button className="text-blue-500 hover:text-blue-700 text-xs lg:text-sm">
                        Xem
                      </button>
                      <button className="text-green-500 hover:text-green-700 text-xs lg:text-sm">
                        Sửa
                      </button>
                      <button className="text-red-500 hover:text-red-700 text-xs lg:text-sm">
                        Xoá
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Thống kê nhanh */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-6">
          <div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
            <h4 className="text-blue-800 font-medium text-xs lg:text-sm">
              Tổng tour
            </h4>
            <p className="text-xl lg:text-2xl font-bold text-blue-600">
              {tours.length}
            </p>
          </div>
          <div className="bg-green-50 p-3 lg:p-4 rounded-lg">
            <h4 className="text-green-800 font-medium text-xs lg:text-sm">
              Đang hoạt động
            </h4>
            <p className="text-xl lg:text-2xl font-bold text-green-600">
              {tours.filter((t) => t.status === "Còn chỗ").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
