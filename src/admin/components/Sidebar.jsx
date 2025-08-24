import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Grid,
  ListChecks,
  ShoppingCart,
  Users,
  Contact,
  Settings,
  User,
  LogOut,
} from "lucide-react";

const menus = [
  { title: "Tổng quan", path: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Quản lý danh mục", path: "/admin/categories", icon: Grid },
  { title: "Quản lý tour", path: "/admin/tours", icon: ListChecks },
  { title: "Quản lý đơn hàng", path: "/admin/orders", icon: ShoppingCart },
  { title: "Quản lý người dùng", path: "/admin/users", icon: Users },
  { title: "Thông tin liên hệ", path: "/admin/contacts", icon: Contact },
  { title: "Cài đặt chung", path: "/admin/settings", icon: Settings },
  { title: "Thông tin cá nhân", path: "/admin/profile", icon: User },
];

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <>
      <div
        className={`fixed lg:static z-50 bg-white shadow-lg h-full transition-all duration-300 overflow-y-auto
        ${open ? "w-64 left-0" : "w-0 -left-64 lg:w-64 lg:left-0"}`}
      >
        <div className="p-4">
          {/* Logo cho mobile */}
          <h1 className="text-lg lg:text-xl font-bold text-blue-600 mb-6 lg:mb-8">
            <span className="lg:hidden">Admin</span>
            <span className="hidden lg:block">Admin Dashboard</span>
          </h1>

          {/* Menu */}
          <ul className="space-y-1 lg:space-y-2 mb-4">
            {menus.map((menu) => {
              const Icon = menu.icon;
              const isActive = location.pathname === menu.path;
              return (
                <li key={menu.path}>
                  <Link
                    to={menu.path}
                    className={`flex items-center p-2 lg:p-3 rounded-lg transition text-sm lg:text-base ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0" />
                    <span className="truncate">{menu.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Nút đăng xuất */}
          <div className="border-t pt-3 lg:pt-4 mt-3 lg:mt-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-2 lg:p-3 rounded-lg text-red-600 hover:bg-red-100 hover:text-red-700 transition font-medium text-sm lg:text-base"
            >
              <LogOut className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 flex-shrink-0" />
              <span className="truncate">Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
