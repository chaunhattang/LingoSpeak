import type { VocabularyItem } from "../../types/api";

interface Props {
  item: VocabularyItem;
}

export default function FlashcardBack({ item }: Props) {
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-8">
      <button
        onClick={(e) => {
          e.stopPropagation();
          speak(item.meaning.english);
        }}
        className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition shadow"
      >
        <span className="material-symbols-outlined">volume_up</span>
      </button>

      <h2 className="text-2xl font-bold text-blue-600 mt-3">{item.meaning.english}</h2>

      {item.ipa && <p className="text-gray-500 mb-4">{item.ipa}</p>}

      <div className="h-px w-16 bg-gray-200 mb-4" />

      <p className="text-lg font-semibold mb-4">{item.meaning.vietnamese}</p>

      {item.description && (
        <div className="bg-gray-100 p-4 rounded-xl w-full text-sm text-center text-slate-600">
          {item.description}
        </div>
      )}

      <div className="mt-4 opacity-60">
        <span className="material-symbols-outlined text-4xl animate-pulse">touch_app</span>
      </div>
    </div>
  );
}
