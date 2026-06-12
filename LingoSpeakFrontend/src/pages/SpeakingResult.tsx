import { useNavigate, useParams } from "react-router-dom";
import applauseSound from "../assets/sounds/applause.mp3";
import { useEffect, useState } from "react";
import { getVocabularyById } from "../api/vocabularies";
import { markConversationStudied } from "../api/userProgress";
import { getUser, setUser } from "../utils/auth";
import { getNextStepPath } from "../utils/learningFlow";
import type { Vocabulary } from "../types/api";

export default function SpeakingResult() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<Vocabulary | null>(null);

  useEffect(() => {
    if (!id) return;
    getVocabularyById(Number(id)).then(setTopic);
  }, [id]);

  useEffect(() => {
    if (!topic?.conversation) return;
    const conversation = topic.conversation;
    const user = getUser();
    if (!user || user.studiedConversationIds.includes(conversation.id)) return;

    markConversationStudied(conversation.id)
      .then(() => {
        setUser({
          ...user,
          studiedConversationIds: [...user.studiedConversationIds, conversation.id],
        });
      })
      .catch(() => {
        // ignore if already marked
      });
  }, [topic]);

  useEffect(() => {
    const audio = new Audio(applauseSound);

    audio.volume = 0.6;

    audio.play().catch(() => {
      console.log("Autoplay blocked");
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col font-body-sm text-on-background relative overflow-hidden">
      {/* Decorative Confetti */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full blur-sm" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-tertiary rounded-full blur-sm" />
        <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-secondary rounded-full blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary-container rounded-full blur-sm" />
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-primary rounded-full blur-sm" />
      </div>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center p-6 z-10 w-full max-w-[672px] mx-auto">
        <div className="w-full bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center relative">
          {/* Icon */}
          <div className="mb-6 relative">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-6xl">👏</span>
            </div>

            <span className="material-symbols-outlined absolute -top-2 -right-2 text-tertiary text-2xl">
              colors_spark
            </span>

            <span className="material-symbols-outlined absolute -bottom-1 -left-2 text-primary text-xl">
              grade
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>

          <p className="text-on-surface-variant mb-8 px-4">
            You have successfully completed the conversation practice session!
          </p>

          {/* Stats */}
          <div className="w-full grid grid-cols-3 gap-4 mb-8">
            {/* Time */}
            <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mb-2 text-3xl">
                timer
              </span>

              <span className="text-sm text-on-surface-variant mb-1">Time</span>

              <span className="font-semibold text-primary">05:42</span>
            </div>

            {/* Accuracy */}
            <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary mb-2 text-3xl">
                target
              </span>

              <span className="text-sm text-on-surface-variant mb-1">
                Accuracy
              </span>

              <span className="font-semibold text-primary">94%</span>
            </div>

            {/* XP */}
            <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center border border-outline-variant/30">
              <span className="material-symbols-outlined text-tertiary mb-2 text-3xl">
                local_fire_department
              </span>

              <span className="text-sm text-on-surface-variant mb-1">
                XP Gained
              </span>

              <span className="font-semibold text-tertiary">+150</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col gap-4">
            <button
              onClick={() => topic && navigate(getNextStepPath(topic, "conversation"))}
              disabled={!topic}
              className="w-full py-4 px-6 bg-primary text-white rounded-lg font-semibold shadow-sm hover:bg-primary/90 transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
              Tiếp tục
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full py-4 px-6 bg-transparent text-secondary rounded-lg border-2 border-outline-variant/50 hover:border-primary hover:text-primary transition flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">replay</span>
              Review Conversation
            </button>

            <button
              onClick={() => navigate("/topics")}
              className="w-full py-2 text-sm text-slate-400 hover:text-primary transition"
            >
              Quay lại danh sách chủ đề
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
