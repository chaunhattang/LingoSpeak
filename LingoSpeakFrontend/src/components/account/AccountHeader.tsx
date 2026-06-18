import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logout } from "../../utils/auth";

const AccountHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition">
            arrow_back
          </span>
          {t("profile.header.back")}
        </button>

        <h1 className="font-semibold text-slate-800 text-lg">        {t("profile.header.title")}</h1>

        <button
          onClick={handleLogout}
          className="px-4 h-10 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 font-medium transition"
        >
          {t("profile.header.logout")}
        </button>
      </div>
    </header>
  );
};

export default AccountHeader;
