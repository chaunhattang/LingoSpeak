import logo from "../../assets/images/logo.png";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import home from "../../assets/images/home.png";
import newWord from "../../assets/images/newWord.png";
import review from "../../assets/images/review.png";
import handlist from "../../assets/images/handlist.png";
import i18n from "../../i18n";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking navigation links
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200  bg-background-light/80  backdrop-blur-md ">
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center shadow-sm">
              <img
                src={logo}
                alt="Lingo Speak Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div> */}
            <h2
              className="flex items-center gap-1 font-bold tracking-tight
               text-3xl sm:text-4xl lg:text-5xl leading-normal"
            >
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Ling
              </span>

              <img src={logo} alt="logo" className="h-12 w-12 inline-block" />

              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Speak
              </span>
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center justify-between gap-20 md:flex px-10">
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={home} alt="Home" className="h-10 w-10" />
              {t("navbar.home")}
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={newWord} alt="newWord" className="h-10 w-10" />
              {t("navbar.lessons")}
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={review} alt="review" className="h-10 w-10" />
              {t("navbar.review")}
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={handlist} alt="handlist" className="h-10 w-10" />
              {t("navbar.vocabulary")}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Dropdown */}

            <Link to="/login">
              <button
                className="hidden md:block h-11 px-6 rounded-xl text-white text-sm font-semibold
                bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                shadow-lg shadow-blue-300/40 hover:scale-[1.03] transition"
              >
                {t("navbar.signIn")}
              </button>
            </Link>
            <div className="md:relative" ref={dropdownRef}>
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center border gap-4 h-11 px-3 py-2 rounded-xl  text-sm text-blue-600 bg-white font-medium border-cyan-300 hover:bg-blue-50 transition"
              >
                <span className="font-semibold">
                  {i18n.language === "en" ? "EN" : "VN"}
                </span>
                <span className="material-symbols-outlined text-sm">
                  {isLanguageDropdownOpen ? "expand_less" : "expand_more"}
                </span>
              </button>

              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <button
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg ${
                      i18n.language === "en"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("vn");
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 last:rounded-b-lg ${
                      i18n.language === "vn"
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    VN
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden size-10 items-center justify-center rounded-full hover:bg-slate-100"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <img src={home} alt="Home" className="h-6 w-6" />
                <span className="font-medium">{t("navbar.home")}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <img src={newWord} alt="Lessons" className="h-6 w-6" />
                <span className="font-medium">{t("navbar.lessons")}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <img src={review} alt="Review" className="h-6 w-6" />
                <span className="font-medium">{t("navbar.review")}</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                onClick={handleMobileLinkClick}
              >
                <img src={handlist} alt="Vocabulary" className="h-6 w-6" />
                <span className="font-medium">{t("navbar.vocabulary")}</span>
              </a>
            </nav>

            {/* Mobile Language Switcher */}
            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">
                  Language
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => i18n.changeLanguage("en")}
                    className={`px-3 py-1 rounded text-sm font-medium transition ${
                      i18n.language === "en"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => i18n.changeLanguage("vn")}
                    className={`px-3 py-1 rounded text-sm font-medium transition ${
                      i18n.language === "vn"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    VN
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="border-t border-slate-200 pt-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full h-11 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 shadow-lg shadow-blue-300/40 hover:scale-[1.02] transition">
                  {t("navbar.signIn")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
