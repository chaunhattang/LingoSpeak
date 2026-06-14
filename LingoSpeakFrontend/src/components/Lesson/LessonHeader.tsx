import { useNavigate, useLocation } from "react-router-dom";

const LessonHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getStep = (pathname: string) => {
    if (pathname.includes("flashcard")) return 1;
    if (pathname.includes("learning")) return 3;
    if (pathname.includes("speaking")) return 4;
    return 2; // WordLesson
  };

  const step = getStep(location.pathname);

  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* LEFT */}
        <button
          onClick={() => navigate("/topics/1")}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition">
            arrow_back
          </span>
          Exit
        </button>

        {/* CENTER */}
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-slate-800 text-base">
            Speaking Lesson
          </h1>

          {/* DOT STEP */}
          <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  step === s
                    ? "bg-blue-500 scale-125 shadow-md"
                    : step > s
                      ? "bg-blue-300"
                      : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* PROGRESS BAR */}
          <div className="w-40 h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <div />
      </div>
    </header>
  );
};

export default LessonHeader;
