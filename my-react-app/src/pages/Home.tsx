import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import lingo from "../assets/images/lingo.png";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

const avatarList = [user1, user2, user3];
const typeQuestion = [
  {
    title: "Luyện nghe & nói",
    icon: "headphones",
    color: "blue",
    description:
      "Luyện phát âm, ngữ điệu và phản xạ giao tiếp qua hội thoại thực tế.",
  },
  {
    title: "Flashcard thông minh",
    icon: "style",
    color: "orange",
    description:
      "Ghi nhớ từ vựng nhanh hơn với flashcard cá nhân hóa theo tiến độ học.",
  },
  {
    title: "Ghi âm & so sánh",
    icon: "mic",
    color: "red",
    description:
      "So sánh giọng nói với người bản xứ để cải thiện phát âm chính xác.",
  },
  {
    title: "Học theo chủ đề",
    icon: "category",
    color: "emerald",
    description:
      "Chọn chủ đề phù hợp với mục tiêu học tập và giao tiếp hằng ngày.",
  },
];
const feedbackUser = [
  {
    img: user1,
    name: "Ngọc Anh",
    role: "Sinh viên năm 2",
    rating: 5,
    feedback:
      "Mình cải thiện phát âm rõ rệt sau vài tuần luyện tập. Các bài nghe – nói rất sát với giao tiếp thực tế.",
  },
  {
    img: user2,
    name: "Minh Tuấn",
    role: "Nhân viên văn phòng",
    rating: 4,
    feedback:
      "Flashcard thông minh giúp mình nhớ từ vựng lâu hơn. Học mỗi ngày 15–20 phút nhưng hiệu quả rõ ràng.",
  },
  {
    img: user3,
    name: "Thu Trang",
    role: "Người mới bắt đầu",
    rating: 5,
    feedback:
      "Giao diện dễ dùng, lộ trình rõ ràng nên mình không bị nản. Có động lực học đều mỗi ngày.",
  },
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
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900  transition-colors duration-200">
      <Navbar />

      <main className="flex flex-1 flex-col items-center bg-slate-100">
        {/* ================= HERO SECTION ================= */}
        <section className="w-full max-w-[1280px] px-6 lg:px-10 py-12 lg:py-20">
          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center lg:gap-20">
            {/* Content */}
            <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-4xl lg:text-5xl">
                  Learn to speak English
                  <br className="hidden lg:block" />
                  <span className="text-primary italic"> simply </span> –
                  effectively
                </h1>
                <p className="text-base text-slate-600  md:text-lg">
                  Improve your vocabulary and communicate confidently with a
                  personalized learning path. Practice anytime, anywhere.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                <button
                  className="h-11 px-6 rounded-xl text-white text-sm font-semibold
                bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                shadow-lg shadow-blue-300/40
                hover:scale-[1.03] transition"
                >
                  Start learning now
                </button>
                <button
                  className="h-11 px-6 rounded-xl text-sm font-semibold text-blue-600
                bg-white border border-cyan-300

                hover:bg-blue-50 transition"
                >
                  Learn more
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500 md:justify-start">
                <div className="flex -space-x-2">
                  {avatarList.map((i) => (
                    <div
                      key={i}
                      className="size-8 rounded-full border-2 border-white  bg-slate-200"
                    >
                      <img
                        src={i}
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <p>+10.000 active learners.</p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100   shadow-2xl lg:aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={lingo}
                    alt="Lingo Speak Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="w-full bg-white  py-16">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
            <div className="mb-12 text-center">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Tính năng
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">Features</h2>
              <p className="mt-4 mx-auto max-w-2xl text-slate-600 ">
                A comprehensive English learning platform, personalized to your
                level, helping you make rapid and sustainable progress every
                day.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {typeQuestion.map((item, index) => {
                const color = colorMap[item.color];

                return (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-background-light p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className={`flex size-14 items-center justify-center rounded-xl 
        ${color.bg} ${color.text} ${color.darkBg} ${color.darkText}`}
                    >
                      <span className="material-symbols-outlined text-3xl">
                        {item.icon}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {item.description}
                      </p>
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
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Cộng đồng
              </span>
              <h2 className="text-3xl font-bold md:text-4xl">
                Feedback người dùng
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {feedbackUser.map((user, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  {/* Avatar */}
                  <img
                    src={user.img}
                    alt={user.name}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
                  />

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="font-bold text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.role}</p>

                      {/* Rating */}
                      <div className="mt-1 flex items-center gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined text-base"
                          >
                            {i < user.rating ? "star" : "star_outline"}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm italic text-slate-700 leading-relaxed">
                      “{user.feedback}”
                    </p>
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
