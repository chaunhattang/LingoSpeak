import { useParams } from "react-router-dom";
import LessonHeader from "../components/Lesson/LessonHeader";
import LessonFooter from "../components/Lesson/LessonFooter";

const WordLesson = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return null;

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 flex flex-col min-h-screen font-display">
      {/* HEADER */}
      <LessonHeader />

      {/* MAIN */}
      <main className="flex-grow flex items-center justify-center p-4 max-w-5xl mx-auto w-full">
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow border grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* LEFT */}
          <div className="p-8 border-b md:border-b-0 md:border-r dark:border-slate-700">
            <img
              src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9"
              className="rounded-xl mb-6"
            />
            <p className="text-sm text-slate-500 text-center">
              MEANING (VIETNAMESE)
            </p>
            <p className="text-2xl font-bold text-center">Tái chế</p>
          </div>

          {/* RIGHT */}
          <div className="p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <button className="w-12 h-12 rounded-full bg-primary/10 text-primary">
                🔊
              </button>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                NOUN
              </span>
            </div>

            {/* WORD INPUT */}
            <div className="flex flex-wrap justify-center gap-3 my-10">
              {["R", "E", "", "Y", "C", "", "I", "N", "G"].map((c, i) =>
                c ? (
                  <div
                    key={i}
                    className="w-12 h-16 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-lg text-2xl font-bold"
                  >
                    {c}
                  </div>
                ) : (
                  <input
                    key={i}
                    maxLength={1}
                    className="w-12 h-16 text-center border-2 border-primary rounded-lg text-2xl font-bold bg-transparent focus:outline-none"
                  />
                ),
              )}
            </div>

            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold">
              Check Answer
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <LessonFooter />
    </div>
  );
};

export default WordLesson;
