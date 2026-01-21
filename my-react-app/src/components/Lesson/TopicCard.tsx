// src/components/TopicCard.tsx
// src/components/TopicCard.tsx
import type { Topic } from "./Topics";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  topic: Topic;
}

const TopicCard = ({ topic }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/lesson/${topic.slug}`)}
      className="group flex flex-col bg-white dark:bg-[#1a2632] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#e7edf3] dark:border-[#2a3b4d] overflow-hidden cursor-pointer h-full"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div
          className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${topic.image})` }}
        />
        <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
          <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-[20px]">
              {topic.icon}
            </span>
          </div>
          <span className="text-white font-bold text-lg drop-shadow-md">
            {t(topic.title)}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex justify-between items-center text-sm">
          <span className="bg-[#e7edf3] dark:bg-[#2a3b4d] text-[#4c739a] dark:text-slate-300 px-2 py-1 rounded-md font-medium text-xs">
            {t(topic.title)}
          </span>
          <span className="text-[#4c739a] font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              translate
            </span>
            {topic.words} {t("lesson.words")}
          </span>
        </div>

        <div className="mt-auto pt-2">
          <span
            className={`text-xs font-semibold ${
              topic.progress > 0 ? "text-primary" : "text-slate-400"
            }`}
          >
            {topic.progress > 0
              ? t("lesson.learned", { percent: topic.progress })
              : t("lesson.notStarted")}
          </span>

          <div className="w-full bg-[#e7edf3] dark:bg-[#2a3b4d] rounded-full h-2 mt-1">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${topic.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopicCard;
