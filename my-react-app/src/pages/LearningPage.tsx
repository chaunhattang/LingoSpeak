import LessonHeader from "../components/Lesson/LessonHeader";
import LessonFooter from "../components/Lesson/LessonFooter";

const SpeakingPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* HEADER */}
      <LessonHeader />

      {/* MAIN */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-2xl bg-white dark:bg-[#1e2936] rounded-xl shadow border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
          {/* IMAGE + WORD */}
          <div className="relative h-64 md:h-80 w-full group overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url(https://media.istockphoto.com/id/1141520118/vi/anh/th%E1%BA%A3m-h%E1%BB%8Da-sinh-th%C3%A1i.jpg?s=612x612&w=0&k=20&c=P2r42RP2CtCX8ZJZsPAERe0t1dh9C_ILrs4EvVfcBDM=)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
              <p className="text-slate-300 text-lg font-medium mb-1">Ô nhiễm</p>

              <div className="flex items-center gap-3">
                <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                  Pollution
                </h1>
                <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-2xl">
                    volume_up
                  </span>
                </button>
              </div>

              <p className="text-slate-400 text-sm mt-2 font-mono">
                /pəˈluː.ʃən/
              </p>
            </div>
          </div>

          {/* RECORD AREA */}
          <div className="p-8 flex flex-col items-center gap-8">
            {/* Waveform giả lập */}
            <div className="flex flex-col items-center gap-3 h-24 justify-center">
              <div className="flex items-center justify-center gap-1 h-12 w-[200px]">
                <div className="w-1.5 bg-primary/40 rounded-full animate-pulse h-full" />
                <div className="w-1.5 bg-primary/60 rounded-full animate-pulse h-3/4" />
                <div className="w-1.5 bg-primary rounded-full animate-pulse h-1/2" />
                <div className="w-1.5 bg-primary/60 rounded-full animate-pulse h-3/4" />
                <div className="w-1.5 bg-primary/40 rounded-full animate-pulse h-full" />
              </div>
              <p className="text-primary font-semibold animate-pulse">
                Đang ghi âm...
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-red-100 bg-red-50 text-red-600 font-bold dark:bg-red-900/20 dark:border-red-900/40 dark:text-red-400">
                <span className="material-symbols-outlined">stop_circle</span>
                <span>Dừng</span>
              </button>

              <button
                disabled
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-200 text-slate-400 font-bold dark:bg-slate-700 dark:text-slate-500 cursor-not-allowed"
              >
                <span>Gửi kết quả</span>
                <span className="material-symbols-outlined text-lg">send</span>
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

export default SpeakingPage;
