import { API_BASE_URL } from "../../api/client";
import type { VocabularyItem } from "../../types/api";
import { useTranslation } from "react-i18next";

interface Props {
  item: VocabularyItem;
}

const getWordTypeLabel = (t: (key: string) => string, wordType?: string) => {
  switch (wordType?.toUpperCase()) {
    case "NOUN":
      return t("common.wordTypes.noun");
    case "VERB":
      return t("common.wordTypes.verb");
    case "ADJECTIVE":
      return t("common.wordTypes.adjective");
    case "ADVERB":
      return t("common.wordTypes.adverb");
    case "PHRASE":
      return t("common.wordTypes.phrase");
    default:
      return wordType || t("common.wordTypes.other");
  }
};

export default function FlashcardFront({ item }: Props) {
  const { t } = useTranslation();
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const imageUrl = item.image
    ? `${API_BASE_URL}/uploads/images/${item.image}`
    : `https://source.unsplash.com/400x300/?${encodeURIComponent(item.meaning.english)}`;

  return (
    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
      <div className="h-1/2 w-full relative">
        <img
          src={imageUrl}
          alt={item.meaning.english}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop";
          }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            speak(item.meaning.english);
          }}
          className="absolute top-4 left-4 bg-white px-3 py-1 rounded-lg shadow-sm hover:bg-gray-50 transition"
        >
          {t("common.listen")}
        </button>
      </div>

      <div className="h-1/2 p-6 flex flex-col justify-center items-center text-center">
        <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">
          {t("common.meaning")}
        </p>
        <p className="text-3xl font-bold text-slate-800">
          {item.meaning.english}
        </p>
        {item.wordType && (
          <span className="mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 uppercase">
            {getWordTypeLabel(t, item.wordType)}
          </span>
        )}
        <div className="mt-4 opacity-60">
          <span className="material-symbols-outlined text-4xl animate-pulse">
            touch_app
          </span>
        </div>
      </div>
    </div>
  );
}
