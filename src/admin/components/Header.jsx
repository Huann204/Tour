// src/admin/components/Header.jsx
const Header = ({ setOpen, active }) => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-200"
        onClick={() => setOpen((prev) => !prev)}
      >
        ☰
      </button>
      <h2 className="font-bold text-lg">{active}</h2>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Xin chào, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full w-8 h-8"
        />
      </div>
    </header>
  );
};

export default Header;
