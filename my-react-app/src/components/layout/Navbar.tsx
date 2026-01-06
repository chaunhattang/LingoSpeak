import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/logo.png";
import React from "react";
import home from "../../assets/images/home.png";
import newWord from "../../assets/images/newWord.png";
import review from "../../assets/images/review.png";
import handlist from "../../assets/images/handlist.png";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200  bg-background-light/80  backdrop-blur-md">
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center shadow-sm">
              <img
                src={logo}
                alt="Lingo Speak Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              <span style={{ color: "#115E59" }}>Lingo</span>
              <span style={{ color: "#1E4F7A" }}>Speak</span>
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden flex-lg items-center justify-between gap-20 md:flex px-10">
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={home} alt="Home" className="h-10 w-10" />
              Trang chủ
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={newWord} alt="newWord" className="h-10 w-10" />
              Học từ vựng
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={review} alt="review" className="h-10 w-10" />
              Ôn tập
            </a>
            <a
              className="flex flex-col items-center gap-1 flex-lg font-medium text-slate-600 hover:bg-[#CADAD9] hover:text-[#115E59]"
              href="#"
            >
              <img src={handlist} alt="handlist" className="h-10 w-10" />
              Sổ tay
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden h-10 rounded-lg bg-primary/10 px-4 text-sm font-bold text-primary hover:bg-primary/20 sm:flex pt-2">
              Đăng xuất
            </button>
            <div className="size-10 overflow-hidden rounded-full border-2 border-white dark:border-slate-700 bg-slate-200">
              <img
                src={avatar}
                alt="Lingo Speak Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <button className="flex size-10 items-center justify-center rounded-full md:hidden hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
