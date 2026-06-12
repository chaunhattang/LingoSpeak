import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getUser, logout } from "../../utils/auth";
import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";

export default function AdminLayout() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const user = getUser();

  const navItems = [
    { to: "/admin", label: t("admin.sidebar.dashboard"), icon: "dashboard" },
    { to: "/admin/users", label: t("admin.sidebar.users"), icon: "group" },
    { to: "/admin/topics", label: t("admin.sidebar.topics"), icon: "menu_book" },
  ];

  useEffect(() => {
    if (!user || user.role !== "ADMIN") {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* ── Same Navbar as all other pages ─── */}
      <Navbar />

      {/* ── Body below navbar ────────────────── */}
      <div className="flex min-h-screen bg-slate-50 lg:pt-16">
        {/* Desktop Sidebar */}
        <aside className="pt-12 hidden lg:flex w-64 flex-col sticky top-16 h-[calc(100vh-64px)] bg-white border-r border-slate-200 overflow-y-auto flex-shrink-0">
          <div className="px-4 pt-5 pb-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-3">
              {t("admin.sidebar.title")}
            </p>
          </div>

          <nav className="flex-1 px-4 pb-4 space-y-1 ">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/admin"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-3 px-1">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[14px]">person</span>
              </div>
              <p className="text-sm text-slate-600 font-medium truncate">
                {user?.fullName ?? user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              {t("admin.sidebar.logout")}
            </button>
          </div>
        </aside>

        {/* Main content — extra bottom padding on mobile for tab bar */}
        <main className="flex-1 min-w-0 pb-20 lg:pb-0">
          <Outlet />
        </main>
      </div>

      {/* ── Mobile Bottom Tab Bar ────────────── */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-[0_-2px_12px_rgba(0,0,0,0.07)]">
        <div className="flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/admin"}
              className={({ isActive }) =>
                `flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-colors ${
                  isActive ? "text-primary" : "text-slate-400 active:text-slate-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`material-symbols-outlined text-[22px] transition-all ${
                      isActive ? "scale-110" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-[10px] font-semibold">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
