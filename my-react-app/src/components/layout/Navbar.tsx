import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import newWord from "../../assets/images/newWord.png";
import review from "../../assets/images/review.png";
import handlist from "../../assets/images/handlist.png";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      {" "}
      <div className="flex justify-center w-full">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-6 py-3 lg:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Ling
            </span>

            <img src={logo} alt="logo" className="h-10 w-10" />

            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Speak
            </span>
          </Link>

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

            {/* LESSON */}
            <NavLink
              to="/lesson"
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
              <img src={newWord} alt="lesson" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">
                {t("navbar.lessons")}
              </span>
            </NavLink>

            {/* VOCAB */}
            <NavLink
              to="/notebook"
              className={({ isActive }) =>
                `flex flex-col items-center px-4 py-2 rounded-xl
     transition-all duration-300 ease-out
     cursor-pointer backdrop-blur
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
              <img src={handlist} alt="vocabulary" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">
                {t("navbar.vocabulary")}
              </span>
            </NavLink>

            {/* REVIEW */}
            <div
              className="flex flex-col items-center px-4 py-2 rounded-xl text-slate-600
    transition-all duration-300 ease-out cursor-pointer
    hover:scale-110 hover:-translate-y-1
    hover:bg-white/60 backdrop-blur
    hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]
    hover:text-primary active:scale-95"
            >
              <img src={review} alt="review" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">
                {t("navbar.review")}
              </span>
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Sign in */}
            <Link to="/login">
              <button className="hidden md:block h-10 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition">
                {t("navbar.signIn")}
              </button>
            </Link>

            <button
              onClick={() => navigate("/profile")}
              className="hidden md:flex items-center justify-center h-10 w-10 rounded-full border-2 border-cyan-300 bg-white hover:scale-105 transition overflow-hidden"
            >
              <img
                src={logo}
                alt="profile"
                className="h-7 w-7 object-contain"
              />
            </button>

            {/* Language switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center gap-2 border h-10 px-3 rounded-xl text-blue-600 bg-white border-cyan-300 hover:bg-blue-50"
              >
                {i18n.language === "en" ? "EN" : "VN"}
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setIsLanguageDropdownOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-100"
                  >
                    EN
                  </button>

                  <button
                    onClick={() => {
                      i18n.changeLanguage("vn");
                      setIsLanguageDropdownOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-100"
                  >
                    VN
                  </button>
                </div>
              )}
            </div>

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

            {/* LESSON */}
            <Link
              to="/lesson"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-semibold text-slate-700 hover:text-blue-600"
            >
              {t("navbar.lessons")}
            </Link>

            {/* VOCABULARY */}
            <Link
              to="/notebook"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-semibold text-slate-700 hover:text-blue-600"
            >
              {t("navbar.vocabulary")}
            </Link>

            {/* REVIEW */}
            <Link
              to="/review"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-semibold text-slate-700 hover:text-blue-600"
            >
              {t("navbar.review")}
            </Link>

            {/* SIGN IN */}
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 font-semibold text-slate-700 hover:text-blue-600"
            >
              {t("navbar.signIn")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
