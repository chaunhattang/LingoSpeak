import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import bears from "../assets/images/bears.jpg";
import ran from "../assets/images/ran.jpg";
import ayumi from "../assets/images/ayumi.jpg";
import hattori from "../assets/images/hattori.jpg";

const avatarList = [ran, ayumi, hattori];
const typeQuestion = [
  {
    icon: "headphones",
    title: "Luyện nghe & nói",
    color: "blue",
  },
  {
    icon: "style",
    title: "Flashcard thông minh",
    color: "orange",
  },
  {
    icon: "mic",
    title: "Ghi âm & so sánh",
    color: "red",
  },
  {
    icon: "category",
    title: "Học theo chủ đề",
    color: "emerald",
  },
];
const feedbackUser = [
  { img: ran, name: "Ran Mouri", feedback: "Ứng dụng giúp luyện phát âm chuẩn, dễ hiểu, cải thiện kỹ năng giao tiếp nhanh." },
  { img: ayumi, name: "Rayumi Yoshida", feedback: "Nội dung phong phú, nhiều tình huống thực tế, hỗ trợ học tiếng Anh hiệu quả." },
  { img: hattori, name: "Heiji Hattori", feedback: "Giao diện thân thiện, dễ sử dụng, tạo động lực học tập mỗi ngày liên tục." },
];
const colorMap: Record<
  string,
  {
    bg: string;
    text: string;
    darkBg: string;
    darkText: string;
  }
> = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    darkBg: "dark:bg-blue-900/5",
    darkText: "dark:text-blue-400",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    darkBg: "dark:bg-orange-900/5",
    darkText: "dark:text-orange-400",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    darkBg: "dark:bg-red-900/5",
    darkText: "dark:text-red-400",
  },
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    darkBg: "dark:bg-emerald-900/5",
    darkText: "dark:text-emerald-400",
  },
};
const Home: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-ligh text-slate-900  transition-colors duration-200">
      <Navbar />

      <main className="flex flex-1 flex-col items-center bg-slate-100">
        {/* ================= HERO SECTION ================= */}
        <section className="w-full max-w-[1280px] px-6 lg:px-10 py-12 lg:py-20">
          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center lg:gap-20">
            {/* Content */}
            <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Học nói tiếng Anh <br className="hidden lg:block" />
                  <span className="text-primary">đơn giản</span> – hiệu quả
                </h1>
                <p className="text-base text-slate-600  md:text-lg">Nâng cao vốn từ vựng và tự tin giao tiếp với lộ trình học tập được cá nhân hóa. Luyện tập mọi lúc, mọi nơi.</p>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                <button className="h-12 min-w-[160px] rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105 active:scale-95">Bắt đầu học ngay</button>
                <button className="h-12 min-w-[160px] rounded-xl border border-slate-200  bg-white  px-6 text-base font-bold text-slate-700  hover:bg-slate-50 transition-colors">Tìm hiểu thêm</button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500 md:justify-start">
                <div className="flex -space-x-2">
                  {avatarList.map((i) => (
                    <div key={i} className="size-8 rounded-full border-2 border-white  bg-slate-200">
                      <img src={i} alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                  ))}
                </div>
                <p>+10.000 học viên đang hoạt động</p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100   shadow-2xl lg:aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={bears} alt="Lingo Speak Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="w-full bg-white  py-16">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">Tính năng</span>
              <h2 className="text-3xl font-bold md:text-4xl">Tính năng nổi bật</h2>
              <p className="mt-4 mx-auto max-w-2xl text-slate-600 ">Công cụ hỗ trợ toàn diện giúp bạn chinh phục tiếng Anh tự nhiên nhất.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {typeQuestion.map((item, index) => {
                const color = colorMap[item.color];

                return (
                  <div key={index} className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-background-light p-6 transition hover:-translate-y-1 hover:shadow-lg">
                    <div
                      className={`flex size-14 items-center justify-center rounded-xl 
        ${color.bg} ${color.text} ${color.darkBg} ${color.darkText}`}
                    >
                      <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">Học tập hiệu quả với trải nghiệm tương tác trực quan.</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="w-full py-16 lg:py-24">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">Cộng đồng</span>
              <h2 className="text-3xl font-bold md:text-4xl">Feedback người dùng</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {feedbackUser.map((user, i) => (
                <div key={i} className="flex flex-row items-center gap-6 rounded-2xl bg-white  p-6 shadow-sm ring-1 ring-slate-200 ">
                  {/* Khối bên trái: Hình ảnh */}
                  <div className="shrink-0">
                    <img src={user.img} alt={user.name} className="w-20 h-20 object-cover rounded-full ring-2 ring-primary/10" />
                  </div>

                  {/* Khối bên phải: Nội dung văn bản */}
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-slate-900  leading-tigh pb-3">{user.name}</p>
                    <p className="text-sm font-medium text-black italic mb-1">{user.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
