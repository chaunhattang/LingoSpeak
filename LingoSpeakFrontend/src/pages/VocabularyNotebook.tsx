import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import { getAllVocabularies } from "../api/vocabularies";
import type { Vocabulary } from "../types/api";
import { getUser } from "../utils/auth";
import { API_BASE_URL } from "../api/client";

export default function VocabularyNotebook() {
  const { t, i18n } = useTranslation();
  const isVietnamese = i18n.language?.startsWith("vi") ?? false;
  const navigate = useNavigate();
  const [topics, setTopics] = useState<Vocabulary[]>([]);
  const [loading, setLoading] = useState(true);
  const user = getUser();

  useEffect(() => {
    getAllVocabularies()
      .then(setTopics)
      .finally(() => setLoading(false));
  }, []);

  const getProgress = (vocab: Vocabulary) => {
    if (!user || vocab.vocabularyItems.length === 0) return 0;
    const studied = vocab.vocabularyItems.filter((item) =>
      user.studiedVocabularyIds.includes(item.id),
    ).length;
    return Math.round((studied / vocab.vocabularyItems.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />

      <main
        id="topics"
        className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 mt-16 md:mt-24 scroll-mt-28"
      >
        <h1 className="text-3xl md:text-4xl font-black mb-6">{t("vocabularyNotebook.title")}</h1>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : topics.length === 0 ? (
          <p className="text-center text-slate-400 py-20">{t("vocabularyNotebook.noTopics")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topics.map((topic) => {
              const progress = getProgress(topic);
              const topicName = isVietnamese
                ? topic.topicName.vietnamese
                : topic.topicName.english;
              const imageUrl = topic.image
                ? `${API_BASE_URL}/uploads/images/${topic.image}`
                : `https://source.unsplash.com/400x200/?${encodeURIComponent(topic.topicName.english)}`;

              return (
                <div
                  key={topic.id}
                  onClick={() => navigate(`/notebook/${topic.id}/falastcard`)}
                  className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#e7edf3] dark:border-[#2a3b4d] overflow-hidden cursor-pointer"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={imageUrl}
                      alt={topic.topicName.english}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=200&fit=crop";
                      }}
                    />
                    <div className="absolute bottom-3 left-4 z-20">
                      <span className="text-white font-bold text-lg drop-shadow-md">
                        {topicName}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="bg-[#e7edf3] dark:bg-[#2a3b4d] text-[#4c739a] dark:text-slate-300 px-2 py-1 rounded-md font-medium text-xs">
                        {isVietnamese
                          ? topic.topicName.english
                          : topic.topicName.vietnamese}
                      </span>
                      <span className="text-[#4c739a] font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">translate</span>
                        {t("vocabularyNotebook.wordsCount", { count: topic.vocabularyItems.length })}
                      </span>
                    </div>

                    <div className="mt-auto pt-2">
                      <span
                        className={`text-xs font-semibold ${
                          progress > 0 ? "text-primary" : "text-slate-400"
                        }`}
                      >
                        {progress > 0
                          ? t("vocabularyNotebook.learnedProgress", { percent: progress })
                          : t("vocabularyNotebook.notLearned")}
                      </span>
                      <div className="w-full bg-[#e7edf3] dark:bg-[#2a3b4d] rounded-full h-2 mt-1">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
