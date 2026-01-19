import { useParams } from "react-router-dom";

const WordLesson = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-background-light px-6 py-8">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <button className="flex items-center gap-2 text-primary font-semibold">
          ← Thoát
        </button>

        <div className="flex-1 max-w-md mx-10">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span className="text-primary font-bold">5 / 20</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full">
            <div className="h-2 w-1/4 bg-primary rounded-full" />
          </div>
        </div>

        <span className="material-symbols-outlined">settings</span>
      </div>

      {/* TITLE */}
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
          Fill in the blanks
        </span>
        <h1 className="text-3xl font-bold mt-4">Complete the word</h1>
        <p className="text-slate-500 mt-2">
          Type the missing letters to complete the vocabulary.
        </p>
      </div>

      {/* CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow border grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT */}
        <div className="p-8 border-r">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            className="rounded-xl mb-6"
          />
          <p className="text-sm text-slate-500 text-center">
            MEANING (VIETNAMESE)
          </p>
          <p className="text-2xl font-bold text-center">Vé lên máy bay</p>
        </div>

        {/* RIGHT */}
        <div className="p-8 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <button className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              🔊
            </button>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
              NOUN
            </span>
          </div>

          {/* WORD INPUT (demo tĩnh) */}
          <div className="flex flex-wrap justify-center gap-3 my-10">
            {["B", "O", "A", "", "D", "I", "N", "G"].map((c, i) =>
              c ? (
                <div
                  key={i}
                  className="w-12 h-16 flex items-center justify-center bg-slate-100 rounded-lg text-2xl font-bold"
                >
                  {c}
                </div>
              ) : (
                <input
                  key={i}
                  maxLength={1}
                  className="w-12 h-16 text-center border-2 border-primary rounded-lg text-2xl font-bold focus:outline-none"
                />
              )
            )}
          </div>

          <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg">
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordLesson;
