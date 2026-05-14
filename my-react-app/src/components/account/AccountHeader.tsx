import { useNavigate } from "react-router-dom";

const AccountHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* LEFT */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition">
            arrow_back
          </span>
          Home
        </button>

        {/* CENTER */}
        <h1 className="font-semibold text-slate-800 text-lg">My Profile</h1>

        {/* RIGHT */}
        <button
          onClick={handleLogout}
          className="px-4 h-10 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 font-medium transition"
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default AccountHeader;
