// src/admin/pages/Dashboard.jsx
const Dashboard = () => {
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Thống kê tổng quan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm lg:text-base mb-2">Tổng Tour</h3>
          <p className="text-xl lg:text-2xl font-bold text-blue-600">156</p>
          <div className="mt-2 text-xs lg:text-sm text-green-600">
            +12% so với tháng trước
          </div>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm lg:text-base mb-2">Khách Hàng</h3>
          <p className="text-xl lg:text-2xl font-bold text-green-600">2,847</p>
          <div className="mt-2 text-xs lg:text-sm text-green-600">
            +8% so với tháng trước
          </div>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-xl shadow sm:col-span-2 lg:col-span-1">
          <h3 className="text-gray-500 text-sm lg:text-base mb-2">Doanh Thu</h3>
          <p className="text-xl lg:text-2xl font-bold text-purple-600">125,000,000 đ</p>
          <div className="mt-2 text-xs lg:text-sm text-green-600">
            +15% so với tháng trước
          </div>
        </div>
      </div>

      {/* Biểu đồ và thống kê chi tiết */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-xl shadow">
          <h3 className="text-lg lg:text-xl font-semibold mb-4">Tour phổ biến</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base">Hạ Long - Sapa</span>
              <span className="text-sm lg:text-base font-medium">45 đơn</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base">Phú Quốc</span>
              <span className="text-sm lg:text-base font-medium">38 đơn</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base">Đà Nẵng - Hội An</span>
              <span className="text-sm lg:text-base font-medium">32 đơn</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm lg:text-base">Tour Nhật Bản</span>
              <span className="text-sm lg:text-base font-medium">28 đơn</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-xl shadow">
          <h3 className="text-lg lg:text-xl font-semibold mb-4">Hoạt động gần đây</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm lg:text-base">Đơn hàng mới #ORD001</p>
                <p className="text-xs lg:text-sm text-gray-500">2 phút trước</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm lg:text-base">Tour "Hạ Long" đã được cập nhật</p>
                <p className="text-xs lg:text-sm text-gray-500">15 phút trước</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm lg:text-base">Khách hàng mới đăng ký</p>
                <p className="text-xs lg:text-sm text-gray-500">1 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm lg:text-base">Thanh toán hoàn thành #PAY001</p>
                <p className="text-xs lg:text-sm text-gray-500">2 giờ trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thống kê theo tháng */}
      <div className="bg-white p-4 lg:p-6 rounded-xl shadow">
        <h3 className="text-lg lg:text-xl font-semibold mb-4">Thống kê theo tháng</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500">T1</div>
            <div className="text-lg lg:text-xl font-bold text-blue-600">89</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500">T2</div>
            <div className="text-lg lg:text-xl font-bold text-blue-600">92</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500">T3</div>
            <div className="text-lg lg:text-xl font-bold text-blue-600">78</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500">T4</div>
            <div className="text-lg lg:text-xl font-bold text-blue-600">85</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500">T5</div>
            <div className="text-lg lg:text-xl font-bold text-blue-600">96</div>
          </div>
          <div className="text-center">
            <div className="text-xs lg:text-sm text-gray-500">T6</div>
            <div className="text-lg lg:text-xl font-bold text-blue-600">103</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
