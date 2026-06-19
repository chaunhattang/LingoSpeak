import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function RecordingToolbar() {
  const { t } = useTranslation();
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [time, setTime] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunks = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;

    const recorder = new MediaRecorder(stream);

    recorder.ondataavailable = (e) => {
      chunks.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks.current, { type: "audio/webm" });
      setAudioURL(URL.createObjectURL(blob));
      chunks.current = [];
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
    setRecording(true);
    setTime(0);

    timerRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (timerRef.current) clearInterval(timerRef.current);
    setRecording(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const formatTime = (t: number) => {
    const min = String(Math.floor(t / 60)).padStart(2, "0");
    const sec = String(t % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[720px] z-50">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl px-6 py-4 shadow-2xl border border-white/40 flex items-center gap-6">
        <div className="hidden md:flex flex-col items-center border-r pr-6">
          <span className="text-xs text-slate-400 uppercase">{t("recordingToolbar.time")}</span>
          <span className="font-mono text-lg font-bold text-primary">
            {formatTime(time)}
          </span>
        </div>

        <div className="flex-1 flex items-end justify-center gap-1 h-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-200 ${
                recording
                  ? "bg-gradient-to-t from-blue-400 to-blue-600 animate-pulse"
                  : "bg-slate-300"
              }`}
              style={{
                height: recording ? `${Math.random() * 30 + 10}px` : "12px",
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          {!recording ? (
            <button
              onClick={startRecording}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 h-12 rounded-2xl font-bold flex items-center gap-2 shadow-lg
              hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]
              active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">mic</span>
              {t("recordingToolbar.start")}
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="bg-red-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg
              hover:scale-105 hover:shadow-[0_10px_30px_rgba(239,68,68,0.4)]
              active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">stop</span>
            </button>
          )}
        </div>
      </div>

      {audioURL && (
        <div className="mt-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow border text-center flex flex-col gap-3">
          <p className="text-sm text-slate-500">{t("recordingToolbar.yourRecording")}</p>
          <audio controls src={audioURL} className="w-full" />
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={() => setAudioURL(null)}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 font-semibold"
            >
              {t("recordingToolbar.retake")}
            </button>
            <button
              className="px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500
              hover:scale-105 active:scale-95 transition"
            >
              {t("recordingToolbar.submit")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
