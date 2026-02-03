const LessonHeader = () => {
  return (
    <header className="w-full px-4 py-4 md:px-8 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group">
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          <span>Thoát</span>
        </button>

        <h1 className="text-lg md:text-xl font-bold truncate max-w-md text-center">
          Daily Conversation: At the Airport
        </h1>

        <div className="flex flex-col gap-1 w-full md:w-48">
          <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
            <span>Progress</span>
            <span>5 / 20 từ</span>
          </div>
          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LessonHeader;
