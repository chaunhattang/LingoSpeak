import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const LessonSpeakingPractice = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  // conversation là mảng ConversationMessage: { senderName, translation: {english, vietnamese}, order }
  const conversation: { senderName: string; translation: { english: string; vietnamese: string }; order: number }[] =
    location.state?.conversation || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSentence = conversation[currentIndex];

  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleNext = () => {
    setAudioUrl(null);
    if (currentIndex < conversation.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate(`/topics/${id}/result`);
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const speakText = (text: string, speaker: string): void => {
    if (!window.speechSynthesis) {
      alert("Browser does not support speech");
      return;
    }

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    if (!voices.length) {
      synth.onvoiceschanged = () => speakText(text, speaker);
      return;
    }

    const femaleVoice = voices.find(
      (v) =>
        v.name.includes("Zira") ||
        v.name.includes("Female") ||
        v.name.includes("Google US English"),
    );
    const maleVoice = voices.find(
      (v) =>
        v.name.includes("David") ||
        v.name.includes("Male") ||
        v.name.includes("Google UK English"),
    );

    if (speaker.toLowerCase() === "customer" && femaleVoice) {
      utterance.voice = femaleVoice;
    }
    if (speaker.toLowerCase() === "barista" && maleVoice) {
      utterance.voice = maleVoice;
    }

    utterance.lang = "en-US";
    utterance.rate = 1;

    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    synth.cancel();
    synth.speak(utterance);
  };

  const startListening = async () => {
    if (isListening) return;
    setAudioUrl(null);

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl((prevUrl) => {
          if (prevUrl) URL.revokeObjectURL(prevUrl);
          return url;
        });
      };

      mediaRecorder.start();

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;

      setIsListening(true);

      recognition.onspeechend = () => recognition.stop();
      recognition.onend = () => {
        setIsListening(false);
        if (mediaRecorder.state !== "inactive") mediaRecorder.stop();
      };

      recognition.start();
    } catch (error) {
      console.error(error);
      alert("Microphone permission denied");
    }
  };

  return (
    <div className="bg-background font-body-sm text-on-background h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 flex items-center justify-between px-4 h-16 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-50 rounded-full transition-all duration-200 active:scale-95 text-gray-500"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-blue-600">
              Luyện hội thoại: Tại quán cà phê
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{
                    width: `${
                      conversation.length
                        ? ((currentIndex + 1) / conversation.length) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {currentIndex + 1} / {conversation.length}
              </span>
            </div>
          </div>
        </div>

        <button className="p-2 hover:bg-gray-50 rounded-full transition-all duration-200 active:scale-95 text-gray-500">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-3 pb-24">
        <div className="max-w-[672px] w-full space-y-8">
          {/* Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-48 sm:h-64 w-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGhqHFbZZEjz12z6uKFQqeyN-Q4gloLKcZIbrZhq1zGgmdnLez69Dx4m9Yy8p6cjneZLyS4v5xP3jA960qMiVkyWet2dGuPsR6MKtTGDKtgCY71IE1TE2Ct2Qx3jarhsoQuTDdM4pSE-rQDqai5V5hN4o2rbYMCGkzi3yD2zMRLS0KMaE6AUNE7ZrDb6UBPF63mLNpsiwihB7IF6fkui9JXN3zpxaJiN7F3iAtJSvbw5zKx4daEc0RU6qiCJ_fRDH5SlEUK0jKGg"
                alt="coffee shop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase">
                  {currentSentence?.senderName}
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                  {currentSentence?.translation?.english}
                </h2>
                <p className="text-gray-500">{currentSentence?.translation?.vietnamese}</p>
              </div>

              <div className="flex items-end justify-center gap-1.5 h-12 py-2">
                <div className="w-1.5 bg-blue-300 rounded-full h-3" />
                <div className="w-1.5 bg-blue-400 rounded-full h-8" />
                <div className="w-1.5 bg-blue-600 rounded-full h-10" />
                <div className="w-1.5 bg-blue-400 rounded-full h-6" />
                <div className="w-1.5 bg-blue-300 rounded-full h-4" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-2 w-full max-w-screen-md mx-auto px-4 sm:px-6 py-2">
            <div className="flex items-center justify-between w-full">
              {/* Previous */}
              <button
                onClick={() => {
                  setAudioUrl(null);
                  if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                  } else {
                    navigate(-1);
                  }
                }}
                className="
                  flex items-center gap-1 text-white rounded-xl
                  bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                  shadow transition hover:scale-105
                  px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base
                "
              >
                <span className="material-symbols-outlined">navigate_before</span>
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Center buttons */}
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() =>
                    speakText(
                      currentSentence?.translation?.english || "",
                      currentSentence?.senderName || "",
                    )
                  }
                  className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full transition shadow-xl ${
                    isSpeaking
                      ? "bg-blue-600 text-white animate-pulse"
                      : "bg-blue-100 hover:opacity-90"
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">
                    volume_up
                  </span>
                </button>

                <button
                  onClick={startListening}
                  className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full text-white transition shadow-xl ${
                    isListening
                      ? "bg-red-500 animate-pulse"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">
                    mic
                  </span>
                </button>

                <button
                  disabled={!audioUrl}
                  onClick={() => {
                    if (audioUrl) new Audio(audioUrl).play();
                  }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full transition shadow-xl ${
                    audioUrl
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl sm:text-4xl">
                    play_arrow
                  </span>
                </button>
              </div>

              {/* Next */}
              <button
                onClick={handleNext}
                className="
                  flex items-center gap-1 text-white rounded-xl
                  bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                  shadow transition hover:scale-105
                  px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base
                "
              >
                <span className="hidden sm:inline">
                  {currentIndex === conversation.length - 1 ? "Finish" : "Next"}
                </span>
                <span className="material-symbols-outlined">
                  {currentIndex === conversation.length - 1
                    ? "check"
                    : "navigate_next"}
                </span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 text-center">
              Nhấn vào micrô để bắt đầu nói
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonSpeakingPractice;
