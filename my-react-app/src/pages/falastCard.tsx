import Flashcard from "../components/practice/Flashcard";
import { useNavigate, useParams } from "react-router-dom";

export default function FalastCard() {
  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 max-w-3xl mx-auto">
      {/* Header */}

      <div className="w-full flex justify-between items-center mb-8">
        <button onClick={() => navigate(-1)} className="p-2">
          ✖
        </button>

        <div className="flex-grow mx-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-full bg-blue-500 w-1/3 rounded-full" />
          </div>
        </div>

        <div className="flex items-center text-blue-600 font-semibold">
          ❤️ 5
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-8">New Word</h1>

      <Flashcard />

      <button
        onClick={() => navigate(`/lesson/${slug}/learning`)}
        className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 rounded-full shadow-md mt-8"
      >
        Tiếp tục →
      </button>
    </div>
  );
}
