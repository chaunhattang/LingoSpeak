import { useEffect, useState } from "react";
import {
  getAllVocabularies,
  createVocabulary,
  updateVocabulary,
  deleteVocabulary,
  createVocabularyItem,
  updateVocabularyItem,
  deleteVocabularyItem,
  type VocabularyItemPayload,
} from "../../api/vocabularies";
import type { Vocabulary, VocabularyItem } from "../../types/api";
import { API_BASE_URL } from "../../api/client";

type View = "topics" | "items";

export default function AdminTopicsPage() {
  const [topics, setTopics] = useState<Vocabulary[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<View>("topics");
  const [selectedTopic, setSelectedTopic] = useState<Vocabulary | null>(null);

  // Topic form
  const [showTopicForm, setShowTopicForm] = useState(false);
  const [editingTopic, setEditingTopic] = useState<Vocabulary | null>(null);
  const [topicForm, setTopicForm] = useState({ en: "", vi: "" });
  const [topicImage, setTopicImage] = useState<File | null>(null);
  const [savingTopic, setSavingTopic] = useState(false);

  // Item form
  const [showItemForm, setShowItemForm] = useState(false);
  const [editingItem, setEditingItem] = useState<VocabularyItem | null>(null);
  const [itemForm, setItemForm] = useState<VocabularyItemPayload>({
    meaningEn: "",
    meaningVi: "",
    ipa: "",
    wordType: "",
    description: "",
  });
  const [itemImage, setItemImage] = useState<File | null>(null);
  const [savingItem, setSavingItem] = useState(false);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = () => {
    setLoading(true);
    getAllVocabularies()
      .then(setTopics)
      .finally(() => setLoading(false));
  };

  // --- Topic CRUD ---
  const openNewTopic = () => {
    setEditingTopic(null);
    setTopicForm({ en: "", vi: "" });
    setTopicImage(null);
    setShowTopicForm(true);
  };

  const openEditTopic = (topic: Vocabulary) => {
    setEditingTopic(topic);
    setTopicForm({ en: topic.topicName.english, vi: topic.topicName.vietnamese });
    setTopicImage(null);
    setShowTopicForm(true);
  };

  const handleSaveTopic = async () => {
    setSavingTopic(true);
    try {
      if (editingTopic) {
        await updateVocabulary(editingTopic.id, topicForm.en, topicForm.vi, topicImage ?? undefined);
      } else {
        await createVocabulary(topicForm.en, topicForm.vi, topicImage ?? undefined);
      }
      setShowTopicForm(false);
      fetchTopics();
    } finally {
      setSavingTopic(false);
    }
  };

  const handleDeleteTopic = async (id: number) => {
    if (!confirm("Xoá chủ đề này và toàn bộ từ vựng bên trong?")) return;
    await deleteVocabulary(id);
    fetchTopics();
  };

  // --- Item CRUD ---
  const openTopicItems = (topic: Vocabulary) => {
    setSelectedTopic(topic);
    setView("items");
  };

  const openNewItem = () => {
    setEditingItem(null);
    setItemForm({ meaningEn: "", meaningVi: "", ipa: "", wordType: "", description: "" });
    setItemImage(null);
    setShowItemForm(true);
  };

  const openEditItem = (item: VocabularyItem) => {
    setEditingItem(item);
    setItemForm({
      meaningEn: item.meaning.english,
      meaningVi: item.meaning.vietnamese,
      ipa: item.ipa ?? "",
      wordType: item.wordType ?? "",
      description: item.description ?? "",
    });
    setItemImage(null);
    setShowItemForm(true);
  };

  const handleSaveItem = async () => {
    if (!selectedTopic) return;
    setSavingItem(true);
    try {
      const payload = { ...itemForm, image: itemImage ?? undefined };
      if (editingItem) {
        await updateVocabularyItem(selectedTopic.id, editingItem.id, payload);
      } else {
        await createVocabularyItem(selectedTopic.id, payload);
      }
      setShowItemForm(false);
      const updated = await import("../../api/vocabularies").then((m) =>
        m.getVocabularyById(selectedTopic.id),
      );
      setSelectedTopic(updated);
      fetchTopics();
    } finally {
      setSavingItem(false);
    }
  };

  const handleDeleteItem = async (item: VocabularyItem) => {
    if (!selectedTopic || !confirm("Xoá từ vựng này?")) return;
    await deleteVocabularyItem(selectedTopic.id, item.id);
    const updated = await import("../../api/vocabularies").then((m) =>
      m.getVocabularyById(selectedTopic.id),
    );
    setSelectedTopic(updated);
    fetchTopics();
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-8 flex justify-center py-20">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 lg:mt-10 mt-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setView("topics")}
          className={`text-sm font-semibold ${view === "topics" ? "text-primary" : "text-slate-400 hover:text-slate-600"}`}
        >
          Chủ đề từ vựng
        </button>
        {view === "items" && selectedTopic && (
          <>
            <span className="text-slate-300">/</span>
            <span className="text-sm font-semibold text-primary">
              {selectedTopic.topicName.english}
            </span>
          </>
        )}
      </div>

      {view === "topics" ? (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
            <h2 className="text-2xl font-black">Quản lý chủ đề</h2>
            <button
              onClick={openNewTopic}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 self-start sm:self-auto"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Thêm chủ đề
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic) => {
              const imageUrl = topic.image
                ? `${API_BASE_URL}/uploads/images/${topic.image}`
                : `https://source.unsplash.com/400x200/?${encodeURIComponent(topic.topicName.english)}`;
              return (
                <div
                  key={topic.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                >
                  <img
                    src={imageUrl}
                    alt={topic.topicName.english}
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=200&fit=crop";
                    }}
                  />
                  <div className="p-4">
                    <p className="font-bold">{topic.topicName.english}</p>
                    <p className="text-sm text-slate-500">{topic.topicName.vietnamese}</p>
                    <p className="text-xs text-slate-400 mt-1">{topic.vocabularyItems.length} từ vựng</p>

                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => openTopicItems(topic)}
                        className="flex-1 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold hover:bg-slate-200"
                      >
                        Từ vựng
                      </button>
                      <button
                        onClick={() => openEditTopic(topic)}
                        className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"
                      >
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteTopic(topic.id)}
                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-black">
              Từ vựng: {selectedTopic?.topicName.english}
            </h2>
            <button
              onClick={openNewItem}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 self-start sm:self-auto"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Thêm từ
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">Tiếng Anh</th>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">Tiếng Việt</th>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">IPA</th>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">Loại từ</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {(selectedTopic?.vocabularyItems ?? []).map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium">{item.meaning.english}</td>
                    <td className="px-6 py-4 text-slate-500">{item.meaning.vietnamese}</td>
                    <td className="px-6 py-4 text-slate-400">{item.ipa ?? "—"}</td>
                    <td className="px-6 py-4">
                      {item.wordType && (
                        <span className="px-2 py-1 rounded-full text-xs bg-slate-100 text-slate-600 uppercase">
                          {item.wordType}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => openEditItem(item)}
                          className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"
                        >
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item)}
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Topic Form Modal */}
      {showTopicForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold mb-4">
              {editingTopic ? "Chỉnh sửa chủ đề" : "Thêm chủ đề mới"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">Tên tiếng Anh</label>
                <input
                  type="text"
                  value={topicForm.en}
                  onChange={(e) => setTopicForm((f) => ({ ...f, en: e.target.value }))}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">Tên tiếng Việt</label>
                <input
                  type="text"
                  value={topicForm.vi}
                  onChange={(e) => setTopicForm((f) => ({ ...f, vi: e.target.value }))}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">Ảnh chủ đề</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setTopicImage(e.target.files?.[0] ?? null)}
                  className="w-full text-sm"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowTopicForm(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50"
              >
                Huỷ
              </button>
              <button
                onClick={handleSaveTopic}
                disabled={savingTopic || !topicForm.en || !topicForm.vi}
                className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                {savingTopic ? "Đang lưu..." : "Lưu"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Item Form Modal */}
      {showItemForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-bold mb-4">
              {editingItem ? "Chỉnh sửa từ vựng" : "Thêm từ vựng mới"}
            </h3>
            <div className="space-y-3">
              {[
                { key: "meaningEn", label: "Tiếng Anh" },
                { key: "meaningVi", label: "Tiếng Việt" },
                { key: "ipa", label: "IPA (tuỳ chọn)" },
                { key: "wordType", label: "Loại từ (tuỳ chọn)" },
                { key: "description", label: "Mô tả / Ví dụ (tuỳ chọn)" },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="text-sm font-medium text-slate-600 mb-1 block">{label}</label>
                  <input
                    type="text"
                    value={(itemForm as Record<string, string>)[key]}
                    onChange={(e) =>
                      setItemForm((f) => ({ ...f, [key]: e.target.value }))
                    }
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">Ảnh (tuỳ chọn)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setItemImage(e.target.files?.[0] ?? null)}
                  className="w-full text-sm"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowItemForm(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50"
              >
                Huỷ
              </button>
              <button
                onClick={handleSaveItem}
                disabled={savingItem || !itemForm.meaningEn || !itemForm.meaningVi}
                className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                {savingItem ? "Đang lưu..." : "Lưu"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
