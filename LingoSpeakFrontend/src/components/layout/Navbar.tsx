import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { getUser } from "../../utils/auth";
import { API_BASE_URL } from "../../api/client";

import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import newWord from "../../assets/images/newWord.png";
import about from "../../assets/images/review.png";
import admin from "../../assets/images/admin.png";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = getUser();
  const avatarSrc = user?.image
    ? `${API_BASE_URL}/uploads/images/${user.image}`
    : logo;

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      {" "}
      <div className="flex justify-center w-full">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-6 py-3 lg:px-10">
          {/* Logo */}
          <div
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 cursor-pointer"
          >
            {" "}
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Ling
            </span>
            <img src={logo} alt="logo" className="h-10 w-10" />
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Speak
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {/* HOME */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex flex-col items-center px-4 py-2 rounded-xl
     transition-all duration-300 ease-out
     backdrop-blur
     hover:scale-110 hover:-translate-y-1
     hover:bg-white/60
     hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]
     active:scale-95
     ${
       isActive
         ? "text-[#2563EB] bg-white/60 shadow-[0_10px_30px_rgba(59,130,246,0.25)] scale-105"
         : "text-slate-600 hover:text-[#2563EB]"
     }`
              }
            >
              <img src={home} alt="home" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">{t("navbar.home")}</span>
            </NavLink>

            {/* TOPICS */}
            <NavLink
              to="/topics"
              className={({ isActive }) =>
                `flex flex-col items-center px-4 py-2 rounded-xl
     transition-all duration-300 ease-out
     backdrop-blur
     hover:scale-110 hover:-translate-y-1
     hover:bg-white/60
     hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]
     active:scale-95
     ${
       isActive
         ? "text-[#2563EB] bg-white/60 shadow-[0_10px_30px_rgba(59,130,246,0.25)] scale-105"
         : "text-slate-600 hover:text-[#2563EB]"
     }`
              }
            >
              <img src={newWord} alt="topics" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">
                {t("navbar.topics")}
              </span>
            </NavLink>

            {/* ABOUT */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex flex-col items-center px-4 py-2 rounded-xl
     transition-all duration-300 ease-out
     backdrop-blur
     hover:scale-110 hover:-translate-y-1
     hover:bg-white/60
     hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]
     active:scale-95
     ${
       isActive
         ? "text-[#2563EB] bg-white/60 shadow-[0_10px_30px_rgba(59,130,246,0.25)] scale-105"
         : "text-slate-600 hover:text-[#2563EB]"
     }`
              }
            >
              <img src={about} alt="about" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">{t("navbar.about")}</span>
            </NavLink>

            {/* ADMIN */}
            {user?.role === "ADMIN" && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `flex flex-col items-center px-4 py-2 rounded-xl
       transition-all duration-300 ease-out backdrop-blur
       hover:scale-110 hover:-translate-y-1
       hover:bg-white/60
       hover:shadow-[0_10px_30px_rgba(139,92,246,0.25)]
       active:scale-95
       ${
         isActive
           ? "text-violet-600 bg-white/60 shadow-[0_10px_30px_rgba(139,92,246,0.25)] scale-105"
           : "text-slate-600 hover:text-violet-600"
       }`
                }
              >
                <img src={admin} alt="admin" className="h-10 w-10" />
                <span className="text-sm font-semibold mt-1">
                  {t("navbar.admin")}
                </span>
              </NavLink>
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {user ? (
              <button
                onClick={() => navigate("/profile")}
                className="hidden md:flex items-center justify-center h-10 w-10 rounded-full border-2 border-cyan-300 bg-white hover:scale-105 transition overflow-hidden"
              >
                <img
                  src={avatarSrc}
                  alt="profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = logo;
                  }}
                />
              </button>
            ) : (
              <Link to="/login">
                <button className="hidden md:block h-10 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition">
                  {t("navbar.signIn")}
                </button>
              </Link>
            )}

            {/* Language switcher */}
            <button
              onClick={() => {
                const newLang = i18n.language.startsWith("vi") ? "en" : "vi";
                i18n.changeLanguage(newLang);
                window.localStorage.setItem("lng", newLang);
              }}
              className="flex items-center justify-center border h-10 px-3 rounded-xl text-blue-600 bg-white border-cyan-300 hover:bg-blue-50"
            >
              {i18n.language.startsWith("vi")
                ? t("language.vi")
                : t("language.en")}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col p-4 gap-4">
            {/* HOME */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-semibold text-slate-700 hover:text-blue-600"
            >
              {t("navbar.home")}
            </Link>

            {/* TOPICS */}
            <Link
              to="/topics"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-semibold text-slate-700 hover:text-blue-600"
            >
              {t("navbar.topics")}
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-semibold text-slate-700 hover:text-blue-600"
            >
              {t("navbar.about")}
            </Link>

            {user?.role === "ADMIN" && (
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 font-semibold text-slate-700 hover:text-blue-600"
              >
                {t("navbar.admin")}
              </Link>
            )}

            {user ? (
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 font-semibold text-slate-700 hover:text-blue-600"
              >
                {t("profile.header.title")}
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 font-semibold text-slate-700 hover:text-blue-600"
              >
                {t("navbar.signIn")}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
