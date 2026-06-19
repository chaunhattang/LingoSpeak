import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getVocabularyById } from "../api/vocabularies";
import { markConversationStudied } from "../api/userProgress";
import { getUser, setUser } from "../utils/auth";
import { getLearningSteps, getStepPath } from "../utils/learningFlow";
import type { Vocabulary } from "../types/api";
import { API_BASE_URL } from "../api/client";

const getSenderLabel = (t: (key: string) => string, senderName?: string) => {
  if (senderName === "Barista") return t("common.barista");
  if (senderName === "Customer") return t("common.customer");
  return senderName || "";
};

export default function TopicDetailPage() {
  const { t, i18n } = useTranslation();
  const isVietnamese = i18n.language?.startsWith("vi") ?? false;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<Vocabulary | null>(null);
  const topicName = topic?.topicName
    ? isVietnamese
      ? topic.topicName.vietnamese
      : topic.topicName.english
    : "";
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState(false);
  const user = getUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!id) return;
    getVocabularyById(Number(id))
      .then(setTopic)
      .catch(() => navigate("/topics"))
      .finally(() => setLoading(false));
  }, [id]);

  const conversation = topic?.conversation ?? null;

  const isStudied = user && conversation
    ? user.studiedConversationIds.includes(conversation.id)
    : false;

  const studiedVocabCount = topic
    ? topic.vocabularyItems.filter((item) => user?.studiedVocabularyIds.includes(item.id)).length
    : 0;

  const handleMarkStudied = async () => {
    if (!conversation || !user || isStudied) return;
    setMarking(true);
    try {
      await markConversationStudied(conversation.id);
      const updated = {
        ...user,
        studiedConversationIds: [...user.studiedConversationIds, conversation.id],
      };
      setUser(updated);
    } finally {
      setMarking(false);
    }
  };

  const speakText = (text: string, senderName: string): void => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const speaker2 = conversation?.speaker2Name?.toLowerCase() ?? "";
    const femaleVoice = voices.find((v) => v.name.includes("Zira") || v.name.includes("Female"));
    const maleVoice = voices.find((v) => v.name.includes("David") || v.name.includes("Male"));
    if (senderName.toLowerCase() === speaker2 && femaleVoice) utterance.voice = femaleVoice;
    else if (maleVoice) utterance.voice = maleVoice;
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        {t("topicDetail.notFound")}
      </div>
    );
  }

  const sortedMessages = conversation ? [...conversation.messages].sort((a, b) => a.order - b.order) : [];
  const learningSteps = getLearningSteps(topic);
  const handleStartLearning = () => {
    if (learningSteps.length === 0) return;
    const firstStep = learningSteps[0];
    const path = getStepPath(topic.id, firstStep);
    if (firstStep === "conversation") {
      navigate(path, { state: { conversation: sortedMessages } });
    } else {
      navigate(path);
    }
  };
  const imageUrl = topic.image
    ? `${API_BASE_URL}/uploads/images/${topic.image}`
    : `https://source.unsplash.com/800x300/?${encodeURIComponent(topic.topicName.english)}`;

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen pb-24">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-[#f6f7f8] border-b border-gray-200">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => navigate("/topics")}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
          >
            <span className="material-symbols-outlined text-[#2b8cee]">arrow_back</span>
          </button>

          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-blue-600">
              {topicName}
            </h1>
            <span className="text-[11px] text-gray-400">
              {isVietnamese ? topic.topicName.english : topic.topicName.vietnamese}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-[672px] mx-auto px-4 py-8 space-y-10">
        {/* Topic banner */}
        <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow">
          <img
            src={imageUrl}
            alt={topicName}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=300&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="text-white font-bold text-xl drop-shadow-md">
              {topicName}
            </span>
          </div>
        </div>

        {/* Start learning */}
        {learningSteps.length > 0 && (
          <button
            onClick={handleStartLearning}
            className="w-full h-12 rounded-xl text-white font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-[1.02] transition flex items-center justify-center gap-2 shadow-lg"
          >
            <span className="material-symbols-outlined">play_circle</span>
            {t("topicDetail.startLearning")}
          </button>
        )}

        {/* Vocabulary section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">{t("topicDetail.vocabulary")}</h2>
            <span className="text-xs text-slate-400">
              {t("topicDetail.learnedCount", { count: studiedVocabCount, total: topic.vocabularyItems.length })}
            </span>
          </div>

          {topic.vocabularyItems.length === 0 ? (
            <p className="text-sm text-slate-400">{t("topicDetail.noVocabulary")}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => navigate(`/topics/${id}/falastcard`)}
                className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col items-center gap-2"
              >
                <span className="material-symbols-outlined text-primary text-2xl">style</span>
                <span className="text-sm font-semibold">{t("topicDetail.flashcard")}</span>
              </button>
              <button
                onClick={() => navigate(`/topics/${id}/word`)}
                className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col items-center gap-2"
              >
                <span className="material-symbols-outlined text-primary text-2xl">spellcheck</span>
                <span className="text-sm font-semibold">{t("topicDetail.wordPractice")}</span>
              </button>
            </div>
          )}
        </section>

        {/* Conversation section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">{t("topicDetail.conversation")}</h2>
            {conversation && (
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: isStudied ? "100%" : "0%" }}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  {isStudied
                    ? t("topicDetail.complete")
                    : t("topicDetail.progress", { count: sortedMessages.length })}
                </span>
              </div>
            )}
          </div>

          {!conversation || sortedMessages.length === 0 ? (
            <p className="text-sm text-slate-400">{t("topicDetail.noConversation")}</p>
          ) : (
            <div className="space-y-6">
              {sortedMessages.map((msg, index) => {
                const isRight = msg.senderName === conversation.speaker2Name;

                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 group ${isRight ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isRight ? "bg-primary-container" : "bg-secondary-container"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined ${
                          isRight ? "text-on-primary-container" : "text-on-secondary-container"
                        }`}
                      >
                        person
                      </span>
                    </div>

                    <div className={`flex flex-col gap-1 max-w-[85%] ${isRight ? "items-end" : ""}`}>
                      <span
                        className={`text-[12px] font-semibold px-1 ${
                          isRight ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {getSenderLabel(t, msg.senderName)}
                      </span>

                      <div
                        className={`p-4 rounded-xl flex justify-between items-start gap-3 shadow ${
                          isRight
                            ? "bg-primary text-white rounded-tr-none flex-row-reverse"
                            : "bg-white rounded-tl-none"
                        }`}
                      >
                        <div className={`space-y-1 ${isRight ? "text-right" : ""}`}>
                          <p className="font-body-lg">
                            {isVietnamese
                              ? msg.translation?.vietnamese
                              : msg.translation?.english}
                          </p>
                          <p
                            className={`text-sm italic ${
                              isRight ? "opacity-90 text-primary-fixed" : "text-on-surface-variant"
                            }`}
                          >
                            {isVietnamese
                              ? msg.translation?.english
                              : msg.translation?.vietnamese}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            speakText(
                              msg.translation?.english ?? "",
                              msg.senderName,
                            )
                          }
                          className={`p-2 rounded-full transition ${
                            isRight
                              ? "hover:bg-white/10 text-white"
                              : "hover:bg-surface-container text-primary"
                          }`}
                        >
                          <span className="material-symbols-outlined text-xl">volume_up</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex flex-col items-center gap-3 pt-4">
                {!isStudied && (
                  <button
                    onClick={handleMarkStudied}
                    disabled={marking}
                    className="h-10 px-6 rounded-xl text-white font-semibold bg-green-500 hover:bg-green-600 transition flex items-center gap-2 shadow-lg disabled:opacity-60"
                  >
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    {marking ? t("topicDetail.marking") : t("topicDetail.markComplete")}
                  </button>
                )}

                <button
                  onClick={() =>
                    navigate(`/topics/${id}/practice`, { state: { conversation: sortedMessages } })
                  }
                  className="h-10 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition flex items-center gap-2 shadow-lg"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    mic
                  </span>
                  {t("topicDetail.startSpeakingPractice")}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Reading section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-800">{t("topicDetail.reading")}</h2>

          {!topic.reading ? (
            <p className="text-sm text-slate-400">{t("topicDetail.noReading")}</p>
          ) : (
            <button
              onClick={() => navigate(`/topics/${id}/reading`)}
              className="w-full p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-primary text-2xl">menu_book</span>
              <div className="text-left flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">
                  {isVietnamese
                    ? topic.reading.title.vietnamese
                    : topic.reading.title.english}
                </p>
                <p className="text-xs text-slate-400 truncate">
                  {isVietnamese
                    ? topic.reading.title.english
                    : topic.reading.title.vietnamese}
                </p>
              </div>
              {user?.studiedReadingPassageIds.includes(topic.reading.id) && (
                <span className="material-symbols-outlined text-green-500 flex-shrink-0">check_circle</span>
              )}
            </button>
          )}
        </section>
      </main>
    </div>
  );
}
