import { useNavigate } from "react-router-dom";

const LessonHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-20 bg-gradient-to-r from-slate-50 via-white to-sky-50 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* LEFT - Exit */}
        <button
          onClick={() => navigate("/lesson")}
          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition text-blue-500">
            arrow_back
          </span>

          <span className="font-medium">Exit lesson</span>
        </button>

        {/* CENTER - Title */}
        <h1 className="font-semibold text-slate-800 text-base md:text-lg flex items-center gap-2">
          {/* blue status dot */}
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-md shadow-blue-200" />

          <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Speaking Practice
          </span>
        </h1>

        <div />
      </div>
    </header>
  );
};

export default LessonHeader;
