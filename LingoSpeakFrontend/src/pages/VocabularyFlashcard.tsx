import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Flashcard from "../components/practice/Flashcard";
import { getVocabularyById } from "../api/vocabularies";
import { markVocabularyStudied } from "../api/userProgress";
import { getUser, setUser } from "../utils/auth";
import { getNextStepPath } from "../utils/learningFlow";
import type { Vocabulary, VocabularyItem } from "../types/api";

export default function VocabularyFlashcard() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [vocab, setVocab] = useState<Vocabulary | null>(null);
  const [items, setItems] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [topicName, setTopicName] = useState("");
  const user = getUser();

  useEffect(() => {
    if (!id) return;
    getVocabularyById(Number(id))
      .then((vocab) => {
        setVocab(vocab);
        setItems(vocab.vocabularyItems);
        setTopicName(vocab.topicName.english);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const currentItem = items[currentIndex];
  const progress = items.length > 0 ? (currentIndex / items.length) * 100 : 0;
  const isStudied = (itemId: number) =>
    user?.studiedVocabularyIds.includes(itemId) ?? false;

  const handleNext = async () => {
    if (!currentItem) return;
    if (!isStudied(currentItem.id) && user) {
      try {
        await markVocabularyStudied(currentItem.id);
        const updated = {
          ...user,
          studiedVocabularyIds: [...user.studiedVocabularyIds, currentItem.id],
        };
        setUser(updated);
      } catch {
        // ignore if already marked
      }
    }
    if (currentIndex < items.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else if (vocab) {
      const nextPath = getNextStepPath(vocab, "flashcard");
      if (vocab.conversation && nextPath === `/topics/${id}/practice`) {
        const sortedMessages = [...vocab.conversation.messages].sort(
          (a, b) => a.order - b.order,
        );
        navigate(nextPath, { state: { conversation: sortedMessages } });
      } else {
        navigate(nextPath);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-400">Chủ đề này chưa có từ vựng nào.</p>
        <button
          onClick={() => navigate(`/topics/${id}`)}
          className="text-primary underline"
        >
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 max-w-3xl mx-auto">
      <div className="w-full flex justify-between items-center mb-8">
        <button
          onClick={() => navigate(`/topics/${id}`)}
          className="p-2 text-xl"
        >
          ✖
        </button>

        <div className="flex flex-col items-center flex-grow mx-4">
          <p className="text-sm font-semibold text-slate-500 mb-1">
            {topicName}
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-8">New Word</h1>

      {currentItem && <Flashcard key={currentItem.id} item={currentItem} />}

      <button
        onClick={handleNext}
        className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 rounded-full shadow-md mt-8 font-semibold"
      >
        {currentIndex < items.length - 1 ? "Từ tiếp theo →" : "Hoàn thành"}
      </button>
    </div>
  );
}
