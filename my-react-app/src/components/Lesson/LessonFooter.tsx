import { useNavigate, useParams, useLocation } from "react-router-dom";

const LessonFooter = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const path = location.pathname;

  // ===== VOCABULARY =====
  const isFlashcard = path === `/notebook/${slug}/falastcard`;
  const isWordPage = path === `/notebook/${slug}/word`;
  const isVocabularyLearning = path === `/notebook/${slug}/learning`;

  // ===== LESSON =====
  const isLessonConversation = path === `/lesson/${slug}`;

  const isLessonLearning = path === `/lesson/${slug}/learning`;

  return (
    <footer className="w-full border-t border-slate-200 bg-gradient-to-r from-slate-50 via-white to-sky-50 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* PREVIOUS */}
        <button
          onClick={() => {
            if (isWordPage) {
              navigate(`/notebook/${slug}/falastcard`);
            } else if (isVocabularyLearning) {
              navigate(`/notebook/${slug}/word`);
            } else if (isLessonLearning) {
              navigate(`/lesson/${slug}`);
            }
          }}
          disabled={isFlashcard}
          className="flex items-center gap-2 px-4 py-2 rounded-xl transition font-medium
                     text-blue-600 hover:bg-blue-50"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Previous
        </button>

        {/* NEXT */}
        <button
          onClick={() => {
            if (isFlashcard) {
              navigate(`/notebook/${slug}/word`);
            } else if (isWordPage) {
              navigate(`/notebook/${slug}/learning`);
            } else if (isLessonConversation) {
              navigate(`/lesson/${slug}/learning`);
            } else if (isLessonLearning) {
              navigate(`/lesson/${slug}/practice`);
            }
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium 
                     bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400
                     shadow-md hover:shadow-lg transition"
        >
          Next
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </footer>
  );
};

export default LessonFooter;
