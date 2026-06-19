import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getVocabularyById } from "../api/vocabularies";
import { markReadingStudied } from "../api/userProgress";
import { getUser, setUser } from "../utils/auth";
import RecordingToolbar from "../components/vocabulary/RecordingToolbar";
import { getNextStepPath } from "../utils/learningFlow";
import type { Vocabulary } from "../types/api";

export default function ReadingPracticePage() {
  const { t, i18n } = useTranslation();
  const isVietnamese = i18n.language?.startsWith("vi") ?? false;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<Vocabulary | null>(null);
  const [loading, setLoading] = useState(true);
  const [finishing, setFinishing] = useState(false);

  useEffect(() => {
    if (!id) return;
    getVocabularyById(Number(id))
      .then(setTopic)
      .finally(() => setLoading(false));
  }, [id]);

  const speak = (text: string) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleFinish = async () => {
    if (!topic || !topic.reading) return;
    const user = getUser();
    const reading = topic.reading;
    if (user && !user.studiedReadingPassageIds.includes(reading.id)) {
      setFinishing(true);
      try {
        await markReadingStudied(reading.id);
        setUser({
          ...user,
          studiedReadingPassageIds: [
            ...user.studiedReadingPassageIds,
            reading.id,
          ],
        });
      } catch {
        // ignore if already marked
      } finally {
        setFinishing(false);
      }
    }
    navigate(getNextStepPath(topic, "reading"));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!topic || !topic.reading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-400">{t("readingPractice.noReading")}</p>
        <button
          onClick={() => navigate(`/topics/${id}`)}
          className="text-primary underline"
        >
          {t("readingPractice.backToTopic")}
        </button>
      </div>
    );
  }

  const { reading } = topic;

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32 relative">
      {" "}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => navigate(`/topics/${id}`)}
          className="w-11 h-11 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition"
        >
          <span className="material-symbols-outlined text-slate-600">
            close
          </span>
        </button>
      </div>
      <main className="max-w-[800px] mx-auto px-4 py-12">
        <div className="flex flex-col gap-6">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">
              {t("readingPractice.title")}
            </p>
            <h1 className="text-2xl font-bold text-primary break-words">
              {isVietnamese ? reading.title.vietnamese : reading.title.english}
            </h1>
            <p className="text-sm text-slate-500 italic break-words">
              {isVietnamese ? reading.title.english : reading.title.vietnamese}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-4 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">
                {t("readingPractice.content")}
              </span>
              <button
                  onClick={() => speak(reading.content.english)}
                className="w-10 h-10 rounded-full bg-primary text-white shadow-md hover:scale-105 active:scale-95 transition flex items-center justify-center flex-shrink-0"
              >
                <span className="material-symbols-outlined">volume_up</span>
              </button>
            </div>
            <p className="text-lg leading-relaxed text-slate-800 whitespace-pre-wrap break-words">
              {isVietnamese ? reading.content.vietnamese : reading.content.english}
            </p>
            <p className="text-sm leading-relaxed text-slate-500 italic whitespace-pre-wrap break-words">
              {isVietnamese ? reading.content.english : reading.content.vietnamese}
            </p>
          </div>

          <button
            onClick={handleFinish}
            disabled={finishing}
            className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 rounded-full shadow-md font-semibold disabled:opacity-60"
          >
            {finishing ? t("readingPractice.finishing") : t("readingPractice.finish")}
          </button>
        </div>
      </main>
      <RecordingToolbar />
    </div>
  );
}
