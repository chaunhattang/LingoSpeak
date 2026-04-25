import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import newWord from "../../assets/images/newWord.png";
import review from "../../assets/images/review.png";
import handlist from "../../assets/images/handlist.png";

const Navbar = () => {
  const { t } = useTranslation();

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItemClass =
    "flex flex-col items-center px-4 py-2 rounded-xl text-slate-600 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:bg-white/60 backdrop-blur hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] hover:text-primary active:scale-95";

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/40">
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
            <Link to="/" className={navItemClass}>
              <img src={home} alt="home" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">{t("navbar.home")}</span>
            </Link>

            <Link to="/lesson" className={navItemClass}>
              <img src={newWord} alt="lesson" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">
                {t("navbar.lessons")}
              </span>
            </Link>

            <Link to="/review" className={navItemClass}>
              <img src={review} alt="review" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">
                {t("navbar.review")}
              </span>
            </Link>

            <Link to="/notebook" className={navItemClass}>
              <img src={handlist} alt="vocabulary" className="h-10 w-10 mb-1" />
              <span className="text-sm font-semibold">
                {t("navbar.vocabulary")}
              </span>
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link to="/login">
              <button className="hidden md:block h-10 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition">
                {t("navbar.signIn")}
              </button>
            </Link>

            {/* Language */}
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

            {/* Mobile toggle */}
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
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              {t("navbar.home")}
            </Link>

            <Link to="/lesson" onClick={() => setIsMobileMenuOpen(false)}>
              {t("navbar.lessons")}
            </Link>

            <Link to="/review" onClick={() => setIsMobileMenuOpen(false)}>
              {t("navbar.review")}
            </Link>

            <Link to="/notebook" onClick={() => setIsMobileMenuOpen(false)}>
              {t("navbar.vocabulary")}
            </Link>

            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              {t("navbar.signIn")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
