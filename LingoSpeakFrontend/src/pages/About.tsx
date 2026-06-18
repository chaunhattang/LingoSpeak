import Navbar from "../components/layout/Navbar";
import aboutKids from "../assets/images/kidAbout.png";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="mt-16 md:mt-20">
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={aboutKids}
                alt={t("about.page.hero.imageAlt")}
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                {t("about.page.hero.title")}
              </h1>

              <p className="text-slate-600 leading-8 text-lg">
                {t("about.page.hero.paragraph1")}
              </p>

              <p className="text-slate-600 leading-8 text-lg">
                {t("about.page.hero.paragraph2")}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-16">
          <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl p-8 text-white text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              {t("about.page.mission.title")}
            </h2>

            <p className="max-w-3xl mx-auto text-blue-50 text-lg leading-relaxed">
              {t("about.page.mission.text")}
            </p>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <div className="md:w-5/12 order-2 md:order-1">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">
                  {t("about.page.story.chapterOne.title")}
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>{t("about.page.story.chapterOne.paragraph1")}</p>

                  <p>{t("about.page.story.chapterOne.paragraph2")}</p>
                </div>
              </div>

              <div className="md:w-7/12 order-1 md:order-2">
                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtypy5Y4KN2mDYs67m0ggHACSU9IEyijdOch2TFiVs_ruKkxvAMo9qNffPAACA5J0LLUQPMtukQIeAS5UM3PcU9nUzS-DdZhXm6JMMfNfICCdx6Xz1JnmnjzXYtttVLPZKcNXy4w_-CjCAZb6xQI5Cxk4mSOje9Jw4Z41SMXweC0jiKX7P15-JPgn-42tQlW7lcX3S6TY2linpc10_Sq6VtJqe2WjpZs0jkbYz_gEEjJXqgET8MjesCgwvxtjhcLMbkqy6WJbmdfbf"
                      alt={t("about.page.story.teamImageAlt")}
                      className="w-full h-full object-cover border border-slate-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
              <div className="md:w-5/12">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">
                  {t("about.page.story.chapterTwo.title")}
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>{t("about.page.story.chapterTwo.paragraph1")}</p>

                  <p>{t("about.page.story.chapterTwo.paragraph2")}</p>
                </div>

                <div className="flex gap-12 mt-12">
                  <div>
                    <span className="block text-4xl font-black text-slate-900">
                      50k+
                    </span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                      {t("about.page.story.learnersLabel")}
                    </span>
                  </div>

                  <div>
                    <span className="block text-4xl font-black text-slate-900">
                      500+
                    </span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                      {t("about.page.story.topicsLabel")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-7/12">
                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoXWCikCQdq6yUYOptYWqmnbUsNKh808QgTIFdgO3tGt68UZrerOT4oxNfDJ5y1smrOJIw4VvrK-36-A5qarSbwFpItkQlkSCixiilXWi-i6MB5iar7cPQo8psWNac97egWmdIettDWfFY5rY4a3MXC2lgz7Vk_TR60u-ym4ao8bqxZJ-cozzFlmxGiKWrPq6XrkGUclX7RCRJh5oFm_BMDCy4HcPoyLOhh1mewu4AtQFMn-haBKjnvKFHbeDds_SA7l9youtjhplr"
                      alt={t("about.page.story.visionImageAlt")}
                      className="w-full h-full object-cover border border-slate-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("about.page.values.title")}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
                <h3 className="font-bold mb-3">
                  {t("about.page.values.people.title")}
                </h3>

                <p className="text-sm text-slate-500">
                  {t("about.page.values.people.description")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
                <h3 className="font-bold mb-3">
                  {t("about.page.values.innovation.title")}
                </h3>

                <p className="text-sm text-slate-500">
                  {t("about.page.values.innovation.description")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
                <h3 className="font-bold mb-3">
                  {t("about.page.values.community.title")}
                </h3>

                <p className="text-sm text-slate-500">
                  {t("about.page.values.community.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 text-center border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {t("about.page.cta.title")}
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto mb-10">
              {t("about.page.cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => navigate("/register")}
                className="h-11 px-20 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition"
              >
                {t("about.page.cta.button")}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
