import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import lingo from "../assets/images/lingo.png";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

const avatarList = [user1, user2, user3];

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
  { bg: string; text: string; darkBg: string; darkText: string }
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
  const { t } = useTranslation();

  const typeQuestion = [
    {
      title: t("home.features.listeningSpeaking.title"),
      icon: "headphones",
      color: "blue",
      description: t("home.features.listeningSpeaking.description"),
    },
    {
      title: t("home.features.smartFlashcards.title"),
      icon: "style",
      color: "orange",
      description: t("home.features.smartFlashcards.description"),
    },
    {
      title: t("home.features.recordingComparison.title"),
      icon: "mic",
      color: "red",
      description: t("home.features.recordingComparison.description"),
    },
    {
      title: t("home.features.learnByTopic.title"),
      icon: "category",
      color: "emerald",
      description: t("home.features.learnByTopic.description"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-light text-slate-900">
      <Navbar />

      <main className="flex-1 pt-24 bg-slate-100">
        {/* HERO */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">
            {/* TEXT */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h1 className="text-4xl lg:text-5xl font-black">
                {t("home.hero.title")}
                <span className="text-primary italic">
                  {" "}
                  {t("home.hero.subtitle")}
                </span>
              </h1>

              <p className="text-slate-600">{t("home.hero.description")}</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button className="h-11 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition">
                  {t("home.hero.startLearning")}
                </button>

                <button className="h-11 px-6 rounded-xl text-blue-600 bg-white border border-cyan-300 hover:bg-blue-50">
                  {t("home.hero.learnMore")}
                </button>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {avatarList.map((i) => (
                    <img
                      key={i}
                      src={i}
                      alt="avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p>{t("home.hero.studentsCount")}</p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex-1">
              <img
                src={lingo}
                alt="lingo"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-white py-16">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{t("home.features.title")}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {typeQuestion.map((item, i) => {
                const color = colorMap[item.color];

                return (
                  <div
                    key={i}
                    className="p-6 rounded-xl border hover:shadow-lg"
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl ${color.bg} ${color.text}`}
                    >
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                    </div>

                    <h3 className="mt-4 font-bold">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-16">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feedbackUser.map((user, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-14 h-14 rounded-full mb-3"
                  />

                  <p className="font-bold">
                    {t(`home.testimonials.user${i + 1}.name`)}
                  </p>

                  <p className="text-sm text-slate-500">
                    {t(`home.testimonials.user${i + 1}.role`)}
                  </p>

                  <p className="text-sm italic mt-2">
                    "{t(`home.testimonials.user${i + 1}.feedback`)}"
                  </p>
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
