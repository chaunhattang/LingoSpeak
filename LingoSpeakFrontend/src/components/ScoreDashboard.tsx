import { useEffect, useState } from "react";

export default function ScoreDashboard() {
  const [scores, setScores] = useState({
    accuracy: 0,
    fluency: 0,
    pronunciation: 0,
  });

  // fake animation load
  useEffect(() => {
    setTimeout(() => {
      setScores({
        accuracy: 92,
        fluency: 85,
        pronunciation: 78,
      });
    }, 300);
  }, []);

  const Item = ({
    label,
    value,
    color,
    icon,
  }: {
    label: string;
    value: number;
    color: string;
    icon: string;
  }) => (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
          <span className="material-symbols-outlined text-base">{icon}</span>
          {label}
        </div>

        <span className="text-xl font-bold" style={{ color }}>
          {value}%
        </span>
      </div>

      <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${value}%`,
            background: `linear-gradient(to right, ${color}, ${color}aa)`,
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition">
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-primary">insights</span>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Latest Session
        </h3>
      </div>

      {/* SCORE LIST */}
      <div className="flex flex-col gap-6">
        <Item
          label="Accuracy"
          value={scores.accuracy}
          color="#22c55e"
          icon="verified"
        />

        <Item
          label="Fluency"
          value={scores.fluency}
          color="#3b82f6"
          icon="speed"
        />

        <Item
          label="Pronunciation"
          value={scores.pronunciation}
          color="#f59e0b"
          icon="graphic_eq"
        />
      </div>

      {/* AI FEEDBACK */}
      <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <span className="material-symbols-outlined text-primary text-base">
            auto_awesome
          </span>
          AI Feedback
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Your pronunciation is quite clear, but you should focus more on stress
          in longer words like <b>deforestation</b>. Try slowing down slightly
          to improve fluency.
        </p>
      </div>
    </div>
  );
}
