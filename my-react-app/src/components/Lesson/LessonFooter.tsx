const LessonFooter = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button className="flex items-center gap-2 px-5 py-3 rounded-lg font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="hidden sm:inline">Từ trước</span>
        </button>

        <div className="hidden sm:flex gap-1.5 opacity-50">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>

        <button className="flex items-center gap-2 px-5 py-3 rounded-lg text-white font-bold bg-slate-900 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600">
          <span className="hidden sm:inline">Từ tiếp theo</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </footer>
  );
};

export default LessonFooter;
