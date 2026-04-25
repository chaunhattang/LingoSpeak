import { useParams } from "react-router-dom";
import { useState } from "react";
import LessonHeader from "../components/Lesson/LessonHeader";
import LessonFooter from "../components/Lesson/LessonFooter";

const ANSWER = "RECYCLING";

const WordLesson = () => {
  const { slug } = useParams<{ slug: string }>();

  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);

  if (!slug) return null;

  const letters = ["R", "E", "", "Y", "C", "", "I", "N", "G"];

  // 🔊 TEXT TO SPEECH
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    window.speechSynthesis.cancel(); // tránh chồng âm
    window.speechSynthesis.speak(utterance);
  };

  // input handler
  const handleChange = (index: number, value: string) => {
    if (!/^[a-zA-Z]?$/.test(value)) return;

    setInputs((prev) => ({
      ...prev,
      [index]: value.toUpperCase(),
    }));
  };

  // check answer
  const handleCheck = () => {
    const finalWord = letters.map((c, i) => (c ? c : inputs[i] || "")).join("");

    if (finalWord.length !== ANSWER.length) {
      setResult("wrong");
      return;
    }

    setResult(finalWord === ANSWER ? "correct" : "wrong");
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <LessonHeader />

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* LEFT */}
          <div className="p-8 bg-gradient-to-br from-sky-50 via-white to-blue-50 border-b md:border-b-0 md:border-r border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9"
              className="rounded-2xl mb-6 shadow-md"
            />

            <p className="text-xs uppercase tracking-wider text-slate-400 text-center">
              Meaning
            </p>

            <p className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Tái chế
            </p>
          </div>

          {/* RIGHT */}
          <div className="p-8 flex flex-col justify-between">
            {/* TOP */}
            <div className="flex justify-between items-center">
              {/* 🔊 SPEAK BUTTON */}
              <button
                onClick={() => speak("recycling")}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-md hover:scale-105 transition flex items-center justify-center"
              >
                <span className="material-symbols-outlined">volume_up</span>
              </button>

              {/* BADGE */}
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold 
                bg-blue-50 text-blue-600 border border-blue-200"
              >
                VERB
              </span>
            </div>

            {/* INPUT */}
            <div className="flex flex-wrap justify-center gap-3 my-10">
              {letters.map((c, i) =>
                c ? (
                  <div
                    key={i}
                    className="w-12 h-16 flex items-center justify-center rounded-xl bg-slate-100 text-2xl font-bold shadow-sm"
                  >
                    {c}
                  </div>
                ) : (
                  <input
                    key={i}
                    maxLength={1}
                    value={inputs[i] || ""}
                    onChange={(e) => handleChange(i, e.target.value)}
                    className="w-12 h-16 text-center border-2 border-blue-200 rounded-xl text-2xl font-bold bg-white focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
                  />
                ),
              )}
            </div>

            {/* FEEDBACK */}
            {result && (
              <div
                className={`text-center mb-4 font-bold px-4 py-2 rounded-xl ${
                  result === "correct"
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
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
                bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400
                hover:opacity-90 shadow-lg transition"
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
