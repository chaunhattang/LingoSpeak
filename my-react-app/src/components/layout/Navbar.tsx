import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/logo.png";
import React from "react";
import home from "../../assets/images/home.png";
import newWord from "../../assets/images/newWord.png";
import review from "../../assets/images/review.png";
import handlist from "../../assets/images/handlist.png";

const Navbar: React.FC = () => {
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
            <h2 className="flex items-center text-5xl font-bold tracking-tight gap-1 leading-normal">
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
              Danh sách bài học
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
              Sổ tay từ vựng
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="h-11 px-6 rounded-xl text-white text-sm font-semibold
                bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                shadow-lg shadow-blue-300/40
                hover:scale-[1.03] transition"
            >
              Đăng nhập
            </button>
            <div className="size-11 overflow-hidden rounded-full border-2 border-cyan-200 dark:border-slate-700 bg-slate-200">
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
