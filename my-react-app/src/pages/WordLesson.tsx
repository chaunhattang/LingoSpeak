import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getVocabularyById } from "../api/vocabularies";
import { markVocabularyStudied } from "../api/userProgress";
import { getUser, setUser } from "../utils/auth";
import type { VocabularyItem } from "../types/api";
import LessonHeader from "../components/Lesson/LessonHeader";
import LessonFooter from "../components/Lesson/LessonFooter";

const WordLesson = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [items, setItems] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [loading, setLoading] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const user = getUser();

  useEffect(() => {
    if (!id) return;
    getVocabularyById(Number(id))
      .then((vocab) => setItems(vocab.vocabularyItems))
      .finally(() => setLoading(false));
  }, [id]);

  const currentItem = items[currentIndex];

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Build letter slots: show some letters, hide others
  const buildLetterSlots = (word: string): string[] => {
    const upper = word.toUpperCase();
    return upper.split("").map((ch, i) => {
      // Show every 3rd letter and keep non-alphabetic chars
      if (!/[A-Z]/.test(ch) || i % 3 === 1) return ch;
      return "";
    });
  };

  const letters = currentItem ? buildLetterSlots(currentItem.meaning.english) : [];
  const answer = currentItem?.meaning.english.toUpperCase() ?? "";

  const handleChange = (index: number, value: string) => {
    if (!/^[a-zA-Z]?$/.test(value)) return;
    setInputs((prev) => ({ ...prev, [index]: value.toUpperCase() }));
    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleCheck = async () => {
    const finalWord = letters.map((c, i) => (c ? c : inputs[i] || "")).join("");
    const correct = finalWord === answer;
    setResult(correct ? "correct" : "wrong");

    if (correct && currentItem && user && !user.studiedVocabularyIds.includes(currentItem.id)) {
      try {
        await markVocabularyStudied(currentItem.id);
        const updated = {
          ...user,
          studiedVocabularyIds: [...user.studiedVocabularyIds, currentItem.id],
        };
        setUser(updated);
      } catch {
        // ignore
      }
    }
  };

  const handleNext = () => {
    setInputs({});
    setResult(null);
    inputRefs.current = [];
    if (currentIndex < items.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      navigate(`/notebook`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!currentItem) return null;

  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-slate-50">
      <LessonHeader />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* LEFT */}
          <div className="p-8 bg-white border-b md:border-b-0 md:border-r border-slate-100">
            <img
              src={
                currentItem.image
                  ? `${import.meta.env.VITE_API_URL ?? "https://localhost:44346"}/uploads/images/${currentItem.image}`
                  : `https://source.unsplash.com/400x300/?${encodeURIComponent(currentItem.meaning.english)}`
              }
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop";
              }}
              className="rounded-2xl mb-6 shadow-md w-full object-cover h-48"
            />

            <p className="text-xs uppercase tracking-wider text-slate-400 text-center">Meaning</p>
            <p className="text-3xl font-bold text-center text-slate-800">
              {currentItem.meaning.vietnamese}
            </p>

            {currentItem.description && (
              <p className="text-sm text-slate-500 text-center mt-2">{currentItem.description}</p>
            )}
          </div>

          {/* RIGHT */}
          <div className="p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <button
                onClick={() => speak(currentItem.meaning.english)}
                className="w-12 h-12 rounded-full bg-primary text-white shadow-md hover:scale-105 active:scale-95 transition flex items-center justify-center"
              >
                <span className="material-symbols-outlined">volume_up</span>
              </button>

              {currentItem.wordType && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 uppercase">
                  {currentItem.wordType}
                </span>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-3 my-10">
              {letters.map((c, i) =>
                c ? (
                  <div
                    key={i}
                    className="w-12 h-16 flex items-center justify-center rounded-xl bg-slate-100 text-2xl font-bold"
                  >
                    {c}
                  </div>
                ) : (
                  <input
                    key={i}
                    ref={(el) => { if (el) inputRefs.current[i] = el; }}
                    maxLength={1}
                    value={inputs[i] || ""}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleCheck(); }}
                    className="w-12 h-16 text-center border-2 border-slate-200 rounded-xl text-2xl font-bold bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                  />
                ),
              )}
            </div>

            {result && (
              <div
                className={`text-center mb-4 font-bold px-4 py-2 rounded-xl ${
                  result === "correct"
                    ? "bg-green-50 text-green-600 border border-green-200"
                    : "bg-red-50 text-red-500 border border-red-200"
                }`}
              >
                {result === "correct" ? "🎉 Perfect!" : "❌ Try again"}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={handleCheck}
                className="flex-1 py-4 rounded-xl font-bold text-white bg-primary hover:opacity-90 shadow-lg transition active:scale-95"
              >
                Check Answer
              </button>
              {result === "correct" && (
                <button
                  onClick={handleNext}
                  className="flex-1 py-4 rounded-xl font-bold text-white bg-green-500 hover:opacity-90 shadow-lg transition active:scale-95"
                >
                  {currentIndex < items.length - 1 ? "Next →" : "Finish"}
                </button>
              )}
            </div>

            <p className="text-center text-xs text-slate-400 mt-3">
              {currentIndex + 1} / {items.length}
            </p>
          </div>
        </div>
      </main>

      <LessonFooter />
    </div>
  );
};

export default WordLesson;
