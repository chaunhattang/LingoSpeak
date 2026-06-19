import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LessonHeader from "../components/Lesson/LessonHeader";

interface ConversationLine {
  speaker: string;
  text: string;
  translation: string;
}

const conversationData: ConversationLine[] = [
  {
    speaker: "Barista",
    text: "Good morning! What can I get for you today?",
    translation: "Chào buổi sáng! Tôi có thể giúp gì cho bạn hôm nay?",
  },
  {
    speaker: "Customer",
    text: "I'd like a large latte, please.",
    translation: "Cho tôi một ly latte cỡ lớn.",
  },
  {
    speaker: "Barista",
    text: "Sure. Would you like anything else?",
    translation: "Được thôi. Bạn có muốn thêm gì không?",
  },
  {
    speaker: "Customer",
    text: "No, that's all. Thank you.",
    translation: "Không, vậy là đủ rồi. Cảm ơn bạn.",
  },
];

const getSpeakerLabel = (t: (key: string) => string, speaker: string) => {
  if (speaker === "Barista") return t("common.barista");
  if (speaker === "Customer") return t("common.customer");
  return speaker;
};

export default function SpeakingConversation() {
  const { t, i18n } = useTranslation();
  const isVietnamese = i18n.language?.startsWith("vi") ?? false;
  const navigate = useNavigate();
  const { slug } = useParams();

  const handleStartPractice = () => {
    navigate(`/lesson/${slug}/practice`);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* HEADER */}
      <LessonHeader />

      {/* MAIN */}
      <main className="flex-grow max-w-3xl mx-auto w-full px-6 py-8 space-y-6">
        {/* TITLE */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">{t("speakingConversation.title")}</h1>

          <p className="text-slate-500">{t("speakingConversation.topic", { slug })}</p>
        </div>

        {/* CONVERSATION */}
        <div className="space-y-4">
          {conversationData.map((line, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow border"
            >
              <p className="font-semibold text-primary">{getSpeakerLabel(t, line.speaker)}</p>

              <p className="text-lg mt-1">{isVietnamese ? line.translation : line.text}</p>

              <p className="text-sm text-slate-500 italic mt-2">
                {isVietnamese ? line.text : line.translation}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={handleStartPractice}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl font-bold shadow hover:opacity-90 transition"
        >
          {t("speakingConversation.startButton")}
        </button>
      </main>

      {/* FOOTER */}

    </div>
  );
}
