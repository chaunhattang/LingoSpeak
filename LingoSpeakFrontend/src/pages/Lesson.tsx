import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import { getAllConversations } from "../api/conversations";
import type { Conversation } from "../types/api";
import { getUser } from "../utils/auth";
import { API_BASE_URL } from "../api/client";

export default function Lesson() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const user = getUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    getAllConversations()
      .then(setConversations)
      .catch(() => setError(t("common.loadDataError")))
      .finally(() => setLoading(false));
  }, []);

  const getProgress = (conversationId: number) => {
    if (!user) return 0;
    return user.studiedConversationIds.includes(conversationId) ? 100 : 0;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 mt-16 md:mt-24">
        <h1 className="text-3xl md:text-4xl font-black mb-6">{t("common.conversationTopics")}</h1>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <p className="text-center text-red-400 py-20">{error}</p>
        ) : conversations.length === 0 ? (
          <p className="text-center text-slate-400 py-20">{t("common.noConversations")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conversations.map((conv) => {
              const progress = getProgress(conv.id);
              const imageUrl = conv.image
                ? `${API_BASE_URL}/uploads/images/${conv.image}`
                : `https://source.unsplash.com/400x200/?${encodeURIComponent(conv.topic)}`;

              return (
                <div
                  key={conv.id}
                  onClick={() => navigate(`/lesson/${conv.id}`)}
                  className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#e7edf3] dark:border-[#2a3b4d] overflow-hidden cursor-pointer"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={imageUrl}
                      alt={conv.topic}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?w=400&h=200&fit=crop";
                      }}
                    />
                    <div className="absolute bottom-3 left-4 z-20">
                      <span className="text-white font-bold text-lg drop-shadow-md">
                        {conv.topic}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-xs text-slate-500">
                        {conv.speaker1Name ?? t("common.speaker1")} &amp; {conv.speaker2Name ?? t("common.speaker2")}
                      </span>
                      <span className="text-[#4c739a] font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">chat</span>
                        {conv.messages.length} {t("lesson.lines")}
                      </span>
                    </div>

                    <div className="mt-auto pt-2">
                      <span className={`text-xs font-semibold ${progress > 0 ? "text-primary" : "text-slate-400"}`}>
                        {progress > 0 ? t("lesson.completed") : t("lesson.notStarted")}
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
