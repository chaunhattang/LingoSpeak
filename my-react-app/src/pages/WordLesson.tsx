import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import LessonHeader from "../components/Lesson/LessonHeader";
import LessonFooter from "../components/Lesson/LessonFooter";

const ANSWER = "RECYCLING";

const WordLesson = () => {
  const { slug } = useParams<{ slug: string }>();

  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  if (!slug) return null;

  const letters = ["R", "E", "", "Y", "C", "", "I", "N", "G"];

  // 🔊 TEXT TO SPEECH
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // INPUT
  const handleChange = (index: number, value: string) => {
    if (!/^[a-zA-Z]?$/.test(value)) return;

    setInputs((prev) => ({
      ...prev,
      [index]: value.toUpperCase(),
    }));

    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // CHECK
  const handleCheck = () => {
    const finalWord = letters.map((c, i) => (c ? c : inputs[i] || "")).join("");

    if (finalWord.length !== ANSWER.length) {
      setResult("wrong");
      return;
    }

    setResult(finalWord === ANSWER ? "correct" : "wrong");
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-slate-50">
      <LessonHeader />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* LEFT */}
          <div className="p-8 bg-white border-b md:border-b-0 md:border-r border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9"
              className="rounded-2xl mb-6 shadow-md"
            />

            <p className="text-xs uppercase tracking-wider text-slate-400 text-center">
              Meaning
            </p>

            <p className="text-3xl font-bold text-center text-slate-800">
              Tái chế
            </p>
          </div>

          {/* RIGHT */}
          <div className="p-8 flex flex-col justify-between">
            {/* TOP */}
            <div className="flex justify-between items-center">
              {/* 🔊 SPEAK */}
              <button
                onClick={() => speak("recycling")}
                className="w-12 h-12 rounded-full bg-primary text-white shadow-md 
                hover:scale-105 active:scale-95 transition flex items-center justify-center"
              >
                <span className="material-symbols-outlined">volume_up</span>
              </button>

              {/* BADGE */}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                VERB
              </span>
            </div>

            {/* INPUT */}
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
                    ref={(el) => {
                      if (el) inputRefs.current[i] = el;
                    }}
                    maxLength={1}
                    value={inputs[i] || ""}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleCheck();
                    }}
                    className="w-12 h-16 text-center border-2 border-slate-200 rounded-xl text-2xl font-bold bg-white 
                    focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
                  />
                ),
              )}
            </div>

            {/* FEEDBACK */}
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

            {/* BUTTON */}
            <button
              onClick={handleCheck}
              className="w-full py-4 rounded-xl font-bold text-white 
              bg-primary hover:opacity-90 shadow-lg transition
              active:scale-95"
            >
              Check Answer
            </button>
          </div>
        </div>
      </main>

      <LessonFooter />
    </div>
  );
};

export default WordLesson;