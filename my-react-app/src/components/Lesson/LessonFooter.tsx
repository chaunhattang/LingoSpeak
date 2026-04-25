import { useNavigate, useParams, useLocation } from "react-router-dom";

const LessonFooter = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const isWordPage = location.pathname === `/lesson/${slug}`;
  const isLearningPage = location.pathname === `/lesson/${slug}/learning`;

  return (
    <footer className="w-full border-t border-slate-200 bg-gradient-to-r from-slate-50 via-white to-sky-50 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT */}
        <button
          onClick={() => {
            if (isLearningPage) {
              navigate(`/lesson/${slug}`);
            }
          }}
          disabled={isWordPage}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-medium
            ${
              isWordPage
                ? "opacity-40 cursor-not-allowed text-slate-400"
                : "text-blue-600 hover:bg-blue-50"
            }`}
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Previous
        </button>

        {/* CENTER - step indicator (blue system) */}
        <div className="flex items-center gap-2">
          <div
            className={`w-2.5 h-2.5 rounded-full transition ${
              isWordPage
                ? "bg-blue-500 shadow-md shadow-blue-200"
                : "bg-slate-300"
            }`}
          />

          <div
            className={`w-2.5 h-2.5 rounded-full transition ${
              isLearningPage
                ? "bg-sky-500 shadow-md shadow-sky-200"
                : "bg-slate-300"
            }`}
          />

          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-200" />
        </div>

        {/* RIGHT */}
        <button
          onClick={() => {
            if (isWordPage) {
              navigate(`/lesson/${slug}/learning`);
            }
            if (isLearningPage) {
              navigate(`/lesson/${slug}/speaking`);
            }
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium 
                     bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400
                     hover:from-blue-600 hover:via-sky-600 hover:to-cyan-500
                     shadow-md hover:shadow-lg transition"
        >
          Next
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </button>
      </div>
    </footer>
  );
};

export default LessonFooter;
