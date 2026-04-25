import { useRef, useState } from "react";
import LessonHeader from "../components/Lesson/LessonHeader";
import LessonFooter from "../components/Lesson/LessonFooter";

const LearningPage = () => {
  const word = "Pollution";

  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef<any>(null);

  // 🔊 TEXT TO SPEECH
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // 🎙 INIT SPEECH RECOGNITION (ONLY ONCE)
  const initRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) return null;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event: any) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    return recognition;
  };

  const startRecording = () => {
    const recognition = initRecognition();
    if (!recognition) return;

    recognitionRef.current = recognition;
    setTranscript("");
    setIsRecording(true);

    recognition.start();
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <LessonHeader />

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* CARD */}
        <div className="w-full max-w-2xl bg-white dark:bg-[#1e2936] rounded-xl shadow border overflow-hidden flex flex-col">
          
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
                  {word}
                </h1>

                {/* 🔊 SPEAK BUTTON */}
                <button
                  onClick={() => speak(word)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition"
                >
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

          {/* SPEAKING AREA */}
          <div className="p-8 flex flex-col items-center gap-6">
            {/* MIC BUTTON */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`
                relative w-16 h-16 rounded-full flex items-center justify-center
                transition-all duration-300 shadow-md
                ${isRecording ? "bg-red-500 text-white scale-110" : "bg-blue-500 text-white"}
              `}
            >
              <span className="material-symbols-outlined text-2xl">mic</span>

              {isRecording && (
                <>
                  <span className="absolute w-full h-full rounded-full bg-red-400 opacity-40 animate-ping" />
                  <span className="absolute w-[140%] h-[140%] rounded-full border-2 border-red-300 animate-pulse" />
                </>
              )}
            </button>

            <p
              className={`font-semibold ${isRecording ? "text-red-500" : "text-blue-500"}`}
            >
              {isRecording ? "Listening..." : "Tap to speak"}
            </p>

            {/* TRANSCRIPT */}
            <div className="w-full p-4 bg-slate-50 rounded-xl border min-h-[60px] text-center text-slate-700">
              {transcript || "Your speech will appear here..."}
            </div>
          </div>
        </div>
      </main>

      <LessonFooter />
    </div>
  );
};

export default LearningPage;
