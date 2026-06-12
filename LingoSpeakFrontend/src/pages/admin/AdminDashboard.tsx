import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllUsers } from "../../api/admin";
import { getAllVocabularies } from "../../api/vocabularies";

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ users: 0, conversations: 0, topics: 0, words: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAllUsers(), getAllVocabularies()])
      .then(([users, vocabs]) => {
        const totalWords = vocabs.reduce((sum, v) => sum + v.vocabularyItems.length, 0);
        const withConversation = vocabs.filter((v) => v.conversation !== null).length;
        setStats({
          users: users.length,
          conversations: withConversation,
          topics: vocabs.length,
          words: totalWords,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { label: t("admin.dashboard.accounts"), value: stats.users, icon: "group", color: "bg-blue-500" },
    { label: t("admin.dashboard.topics"), value: stats.topics, icon: "menu_book", color: "bg-emerald-500" },
    { label: t("admin.dashboard.words"), value: stats.words, icon: "translate", color: "bg-violet-500" },
    { label: t("admin.dashboard.conversations"), value: stats.conversations, icon: "chat", color: "bg-amber-500" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 mt-16 lg:mt-10 ">
      <h2 className="text-2xl font-black mb-6">{t("admin.dashboard.title")}</h2>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4"
            >
              <div className={`${card.color} p-3 rounded-xl text-white`}>
                <span className="material-symbols-outlined text-[28px]">{card.icon}</span>
              </div>
              <div>
                <p className="text-3xl font-black">{card.value}</p>
                <p className="text-sm text-slate-500">{card.label}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
