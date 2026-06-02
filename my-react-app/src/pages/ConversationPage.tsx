import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getConversationById } from "../api/conversations";
import { markConversationStudied } from "../api/userProgress";
import { getUser, setUser } from "../utils/auth";
import type { Conversation } from "../types/api";

export default function ConversationPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState(false);
  const user = getUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (!id) return;
    getConversationById(Number(id))
      .then(setConversation)
      .catch(() => navigate("/lesson"))
      .finally(() => setLoading(false));
  }, [id]);

  const isStudied = user && conversation
    ? user.studiedConversationIds.includes(conversation.id)
    : false;

  const handleMarkStudied = async () => {
    if (!conversation || !user || isStudied) return;
    setMarking(true);
    try {
      await markConversationStudied(conversation.id);
      const updated = {
        ...user,
        studiedConversationIds: [...user.studiedConversationIds, conversation.id],
      };
      setUser(updated);
    } finally {
      setMarking(false);
    }
  };

  const speakText = (text: string, senderName: string): void => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const speaker2 = conversation?.speaker2Name?.toLowerCase() ?? "";
    const femaleVoice = voices.find((v) => v.name.includes("Zira") || v.name.includes("Female"));
    const maleVoice = voices.find((v) => v.name.includes("David") || v.name.includes("Male"));
    if (senderName.toLowerCase() === speaker2 && femaleVoice) utterance.voice = femaleVoice;
    else if (maleVoice) utterance.voice = maleVoice;
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Không tìm thấy hội thoại.
      </div>
    );
  }

  const sortedMessages = [...conversation.messages].sort((a, b) => a.order - b.order);

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen pb-24">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full bg-[#f6f7f8] border-b border-gray-200">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
          >
            <span className="material-symbols-outlined text-[#2b8cee]">arrow_back</span>
          </button>

          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-blue-600">
              {conversation.topic}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: isStudied ? "100%" : "0%" }}
                />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {isStudied ? "Hoàn thành" : `0/${sortedMessages.length} practiced`}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[672px] mx-auto px-4 py-8">
        <div className="space-y-6">
          {sortedMessages.map((msg, index) => {
            const isRight = msg.senderName === conversation.speaker2Name;

            return (
              <div
                key={index}
                className={`flex items-start gap-3 group ${isRight ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isRight ? "bg-primary-container" : "bg-secondary-container"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      isRight ? "text-on-primary-container" : "text-on-secondary-container"
                    }`}
                  >
                    person
                  </span>
                </div>

                <div className={`flex flex-col gap-1 max-w-[85%] ${isRight ? "items-end" : ""}`}>
                  <span
                    className={`text-[12px] font-semibold px-1 ${
                      isRight ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {msg.senderName}
                  </span>

                  <div
                    className={`p-4 rounded-xl flex justify-between items-start gap-3 shadow ${
                      isRight
                        ? "bg-primary text-white rounded-tr-none flex-row-reverse"
                        : "bg-white rounded-tl-none"
                    }`}
                  >
                    <div className={`space-y-1 ${isRight ? "text-right" : ""}`}>
                      <p className="font-body-lg">{msg.translation?.english}</p>
                      <p
                        className={`text-sm italic ${
                          isRight ? "opacity-90 text-primary-fixed" : "text-on-surface-variant"
                        }`}
                      >
                        {msg.translation?.vietnamese}
                      </p>
                    </div>

                    <button
                      onClick={() => speakText(msg.translation?.english ?? "", msg.senderName)}
                      className={`p-2 rounded-full transition ${
                        isRight
                          ? "hover:bg-white/10 text-white"
                          : "hover:bg-surface-container text-primary"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">volume_up</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col items-center gap-3 pt-4">
            {!isStudied && (
              <button
                onClick={handleMarkStudied}
                disabled={marking}
                className="h-10 px-6 rounded-xl text-white font-semibold bg-green-500 hover:bg-green-600 transition flex items-center gap-2 shadow-lg disabled:opacity-60"
              >
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                {marking ? "Đang lưu..." : "Đánh dấu hoàn thành"}
              </button>
            )}

            <button
              onClick={() =>
                navigate(`/lesson/${id}/practice`, { state: { conversation: sortedMessages } })
              }
              className="h-10 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition flex items-center gap-2 shadow-lg"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mic
              </span>
              Start Speaking Practice
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
