import { useNavigate } from "react-router-dom";

const LessonHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-4 py-4 md:px-8 border-b border-slate-200 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => navigate("/lesson")}
          className="flex items-center gap-2 font-bold text-slate-600 hover:text-primary"
        >
          ← Thoát
        </button>

        <h1 className="font-bold text-lg">Lesson Detail</h1>

        <div />
      </div>
    </header>
  );
};

export default LessonHeader;
