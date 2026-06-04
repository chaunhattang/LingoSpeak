import { useEffect, useState } from "react";
import {
  getAllConversations,
  createConversation,
  updateConversation,
  deleteConversation,
  type ConversationPayload,
  type MessagePayload,
} from "../../api/conversations";
import type { Conversation } from "../../types/api";
import { API_BASE_URL } from "../../api/client";

type View = "list" | "detail";

export default function AdminConversationsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<View>("list");
  const [selected, setSelected] = useState<Conversation | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Conversation | null>(null);
  const [form, setForm] = useState<ConversationPayload>({
    topic: "",
    speaker1Name: "",
    speaker2Name: "",
    messages: [],
  });
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = () => {
    setLoading(true);
    getAllConversations()
      .then(setConversations)
      .finally(() => setLoading(false));
  };

  const openNew = () => {
    setEditing(null);
    setForm({ topic: "", speaker1Name: "", speaker2Name: "", messages: [] });
    setImageFile(null);
    setShowForm(true);
  };

  const openEdit = (conv: Conversation) => {
    setEditing(conv);
    setForm({
      topic: conv.topic,
      speaker1Name: conv.speaker1Name ?? "",
      speaker2Name: conv.speaker2Name ?? "",
      messages: [...conv.messages].sort((a, b) => a.order - b.order),
    });
    setImageFile(null);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = { ...form, image: imageFile ?? undefined };
      if (editing) {
        await updateConversation(editing.id, payload);
      } else {
        await createConversation(payload);
      }
      setShowForm(false);
      fetchConversations();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Xoá hội thoại này?")) return;
    await deleteConversation(id);
    fetchConversations();
  };

  const addMessage = () => {
    const msgs = form.messages ?? [];
    setForm((f) => ({
      ...f,
      messages: [
        ...msgs,
        {
          senderName: f.speaker1Name ?? "",
          translation: { english: "", vietnamese: "" },
          order: msgs.length + 1,
        },
      ],
    }));
  };

  const updateMessage = (index: number, patch: Partial<MessagePayload>) => {
    setForm((f) => {
      const msgs = [...(f.messages ?? [])];
      msgs[index] = { ...msgs[index], ...patch };
      return { ...f, messages: msgs };
    });
  };

  const removeMessage = (index: number) => {
    setForm((f) => {
      const msgs = (f.messages ?? []).filter((_, i) => i !== index);
      return { ...f, messages: msgs.map((m, i) => ({ ...m, order: i + 1 })) };
    });
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-8 flex justify-center py-20 ">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 lg:mt-10 mt-16">
      {view === "detail" && selected ? (
        <>
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setView("list")}
              className=" rounded-xl hover:bg-slate-100"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-2xl font-black max-w-2xl mx-auto">
              {selected.topic}
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl max-w-2xl mx-auto">
            {[...selected.messages]
              .sort((a, b) => a.order - b.order)
              .map((msg, i) => {
                const isRight = msg.senderName === selected.speaker2Name;
                return (
                  <div
                    key={i}
                    className={`flex gap-3 ${isRight ? "flex-row-reverse" : ""}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
                      {msg.senderName?.[0] ?? "?"}
                    </div>
                    <div
                      className={`max-w-[80%] p-3 rounded-xl shadow-sm ${
                        isRight ? "bg-primary text-white" : "bg-white"
                      }`}
                    >
                      <p className="text-xs font-semibold mb-1 opacity-70">
                        {msg.senderName}
                      </p>
                      <p className="text-sm font-medium">
                        {msg.translation.english}
                      </p>
                      <p
                        className={`text-xs mt-1 italic ${isRight ? "opacity-80" : "text-slate-400"}`}
                      >
                        {msg.translation.vietnamese}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
            <h2 className="text-2xl font-black">Quản lý hội thoại</h2>
            <button
              onClick={openNew}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 self-start sm:self-auto"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Thêm hội thoại
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">
                    Ảnh
                  </th>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">
                    Chủ đề
                  </th>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">
                    Speaker 1
                  </th>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">
                    Speaker 2
                  </th>
                  <th className="text-left px-6 py-4 text-slate-500 font-semibold">
                    Tin nhắn
                  </th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 ">
                {conversations.map((conv) => (
                  <tr key={conv.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      {conv.image ? (
                        <img
                          src={`${API_BASE_URL}/uploads/images/${conv.image}`}
                          alt={conv.topic}
                          className="w-14 h-10 object-cover rounded-lg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div className="w-14 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-400 text-[18px]">
                            image
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 font-medium">{conv.topic}</td>
                    <td className="px-6 py-4 text-slate-500">
                      {conv.speaker1Name ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {conv.speaker2Name ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-slate-400">
                      {conv.messages.length} tin
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => {
                            setSelected(conv);
                            setView("detail");
                          }}
                          className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            visibility
                          </span>
                        </button>
                        <button
                          onClick={() => openEdit(conv)}
                          className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            edit
                          </span>
                        </button>
                        <button
                          onClick={() => handleDelete(conv.id)}
                          className="p-1.5 rounded-lg text-red-500 hover:bg-red-50"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            delete
                          </span>
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

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">
              {editing ? "Chỉnh sửa hội thoại" : "Thêm hội thoại mới"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {[
                { key: "topic", label: "Chủ đề" },
                { key: "speaker1Name", label: "Speaker 1" },
                { key: "speaker2Name", label: "Speaker 2" },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="text-sm font-medium text-slate-600 mb-1 block">
                    {label}
                  </label>
                  <input
                    type="text"
                    value={form[key as keyof ConversationPayload] as string}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [key]: e.target.value }))
                    }
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>

            {/* Image upload */}
            <div className="mb-4">
              <label className="text-sm font-medium text-slate-600 mb-1 block">
                Ảnh hội thoại (tuỳ chọn)
              </label>
              {editing?.image && !imageFile && (
                <img
                  src={`${API_BASE_URL}/uploads/images/${editing.image}`}
                  alt="current"
                  className="w-full h-32 object-cover rounded-xl mb-2"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              {imageFile && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="preview"
                  className="w-full h-32 object-cover rounded-xl mb-2"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                className="w-full text-sm"
              />
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-semibold text-slate-600">Tin nhắn</p>
                <button
                  onClick={addMessage}
                  className="text-xs px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 font-medium"
                >
                  + Thêm tin
                </button>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {(form.messages ?? []).map((msg, i) => (
                  <div
                    key={i}
                    className="border border-slate-100 rounded-xl p-3 bg-slate-50"
                  >
                    <div className="flex gap-2 mb-2">
                      <select
                        value={msg.senderName}
                        onChange={(e) =>
                          updateMessage(i, { senderName: e.target.value })
                        }
                        className="flex-1 border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none"
                      >
                        <option value="">-- Chọn người nói --</option>
                        <option value={form.speaker1Name}>
                          {form.speaker1Name || "Speaker 1"}
                        </option>
                        <option value={form.speaker2Name}>
                          {form.speaker2Name || "Speaker 2"}
                        </option>
                      </select>
                      <button
                        onClick={() => removeMessage(i)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          close
                        </span>
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="English..."
                      value={msg.translation.english}
                      onChange={(e) =>
                        updateMessage(i, {
                          translation: {
                            ...msg.translation,
                            english: e.target.value,
                          },
                        })
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-xs mb-1 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Tiếng Việt..."
                      value={msg.translation.vietnamese}
                      onChange={(e) =>
                        updateMessage(i, {
                          translation: {
                            ...msg.translation,
                            vietnamese: e.target.value,
                          },
                        })
                      }
                      className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50"
              >
                Huỷ
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.topic}
                className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:opacity-90 disabled:opacity-60"
              >
                {saving ? "Đang lưu..." : "Lưu"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
