import { useState } from "react";
import LessonHeader from "../components/Lesson/LessonHeader";
import LessonFooter from "../components/Lesson/LessonFooter";

const LearningPage = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 flex flex-col min-h-screen transition-colors duration-200 font-display">
      {/* HEADER */}
      <LessonHeader />

      {/* MAIN */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 w-full max-w-3xl mx-auto">
        <div className="w-full flex flex-col items-center gap-8 py-8">
          {/* Audio */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />

            <button className="relative flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white dark:bg-slate-800 border-4 border-primary/10 hover:border-primary text-primary shadow-lg transition-all active:scale-95">
              <span className="material-symbols-outlined text-[48px]">
                headphones
              </span>
              <span className="text-sm font-bold mt-1">Play Audio</span>
            </button>
          </div>

          {/* Instructions */}
          <div className="text-center space-y-1">
            <p className="text-lg font-medium">Listen carefully</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Type the word you hear in the box below
            </p>
          </div>

          {/* Input */}
          <div className="w-full max-w-md space-y-4">
            <div className="relative">
              <input
                autoFocus
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type here..."
                className="w-full px-6 py-4 text-center text-xl md:text-2xl font-bold rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
              />

              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 pointer-events-none">
                keyboard
              </span>
            </div>

            <button className="w-full py-3.5 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:translate-y-0.5 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>Kiểm tra</span>
            </button>

            <div className="text-center pt-2">
              <button className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary font-medium underline underline-offset-4">
                Hiện đáp án & nghĩa
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <LessonFooter />
    </div>
  );
};

export default LearningPage;
