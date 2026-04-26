import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const conversation = [
  {
    speaker: "Barista",
    text: "Good morning! What can I get for you today?",
    translation: "Chào buổi sáng! Tôi có thể giúp gì cho bạn hôm nay?",
  },
  {
    speaker: "Customer",
    text: "Hi! I'd like a large latte, please.",
    translation: "Chào! Cho tôi một ly latte cỡ lớn nhé.",
  },
  {
    speaker: "Barista",
    text: "Sure. Would you like that hot or iced?",
    translation: "Chắc chắn rồi. Bạn muốn dùng nóng hay đá?",
  },
  {
    speaker: "Customer",
    text: "I'll have it iced, please.",
    translation: "Cho tôi dùng đá, làm ơn.",
  },
  {
    speaker: "Barista",
    text: "Got it. Do you want any flavor syrup or extra sugar?",
    translation: "Đã rõ. Bạn có muốn thêm siro hương vị hay đường không?",
  },
  {
    speaker: "Customer",
    text: "No thanks, just the latte. But can I get oat milk instead of regular milk?",
    translation:
      "Không cảm ơn, chỉ latte thôi. Nhưng tôi có thể đổi sang sữa yến mạch thay vì sữa thường không?",
  },
  {
    speaker: "Barista",
    text: "Of course! That'll be an extra 50 cents. Anything else?",
    translation: "Tất nhiên rồi! Sẽ thêm 50 cent nhé. Còn gì nữa không?",
  },
  {
    speaker: "Customer",
    text: "Yes, I'll also take a blueberry muffin.",
    translation: "Vâng, cho tôi lấy thêm một chiếc bánh muffin việt quất.",
  },
  {
    speaker: "Barista",
    text: "Perfect. Your total is $8.50. Will you be paying with card or cash?",
    translation:
      "Tuyệt vời. Tổng cộng là 8.50 đô la. Bạn sẽ thanh toán bằng thẻ hay tiền mặt?",
  },
  {
    speaker: "Customer",
    text: "I'll pay with card. Here you go.",
    translation: "Tôi sẽ trả bằng thẻ. Đây ạ.",
  },
];

export default function ConversationPage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const speakText = (text: string, speaker: string): void => {
    if (!window.speechSynthesis) {
      alert("Browser does not support speech");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();

    // tìm giọng nữ
    const femaleVoice = voices.find(
      (voice) => voice.name.includes("Zira") || voice.name.includes("Female"),
    );

    // tìm giọng nam
    const maleVoice = voices.find(
      (voice) => voice.name.includes("David") || voice.name.includes("Male"),
    );

    // chọn voice theo speaker
    if (speaker.toLowerCase() === "customer" && femaleVoice) {
      utterance.voice = femaleVoice;
    }

    if (speaker.toLowerCase() === "barista" && maleVoice) {
      utterance.voice = maleVoice;
    }

    utterance.lang = "en-US";
    utterance.rate = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-16 w-full  bg-[#f6f7f8] border-b border-gray-200">
        {" "}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
          >
            <span className="material-symbols-outlined text-[#2b8cee]">
              arrow_back
            </span>
          </button>

          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-blue-600">
              Luyện hội thoại: Tại quán cà phê
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: "10%" }}
                />
              </div>

              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                0/{conversation.length} practiced
              </span>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
          <span className="material-symbols-outlined text-slate-500">
            more_vert
          </span>
        </button>
      </header>

      {/* Main */}
      <main className="max-w-[672px] mx-auto px-4 py-8">
        <div className="space-y-6">
          {conversation.map((line, index) => {
            const isUser = line.speaker.toLowerCase() === "customer";

            return (
              <div
                key={index}
                className={`flex items-start gap-3 group ${
                  isUser ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isUser ? "bg-primary-container" : "bg-secondary-container"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined ${
                      isUser
                        ? "text-on-primary-container"
                        : "text-on-secondary-container"
                    }`}
                  >
                    {isUser ? "person" : "coffee_maker"}
                  </span>
                </div>

                {/* Bubble */}
                <div
                  className={`flex flex-col gap-1 max-w-[85%] ${
                    isUser ? "items-end" : ""
                  }`}
                >
                  <span
                    className={`text-[12px] font-semibold px-1 ${
                      isUser ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {line.speaker}
                  </span>

                  <div
                    className={`p-4 rounded-xl flex justify-between items-start gap-3 shadow ${
                      isUser
                        ? "bg-primary text-white rounded-tr-none flex-row-reverse"
                        : "bg-white rounded-tl-none"
                    }`}
                  >
                    <div className={`space-y-1 ${isUser ? "text-right" : ""}`}>
                      <p className="font-body-lg">{line.text}</p>

                      <p
                        className={`text-sm italic ${
                          isUser
                            ? "opacity-90 text-primary-fixed"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {line.translation}
                      </p>
                    </div>

                    <button
                      onClick={() => speakText(line.text, line.speaker)}
                      className={`p-2 rounded-full transition ${
                        isUser
                          ? "hover:bg-white/10 text-white"
                          : "hover:bg-surface-container text-primary"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        volume_up
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Start Speaking */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() =>
                navigate(`/lesson/${slug}/practice`, {
                  state: { conversation },
                })
              }
              className="h-10 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition flex items-center gap-2 shadow-lg"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{
                  fontVariationSettings: "'FILL' 1",
                }}
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
