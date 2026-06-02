import { useState } from "react";
import { getUser, setUser } from "../../utils/auth";
import { updateProfile } from "../../api/auth";
import { toast } from "sonner";

const PersonalInfoForm = () => {
  const user = getUser();
  const [fullName, setFullName] = useState(user?.fullName ?? "");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const updatedUser = await updateProfile(user.id, { fullName });
      setUser(updatedUser);
      toast.success("Cập nhật thành công");
      setTimeout(() => window.location.reload(), 1500);
    } catch {
      toast.error("Không cập nhật được");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border p-8">
      <h2 className="text-xl font-bold mb-6 dark:text-white">
        Thông tin cá nhân
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 font-medium dark:text-white">
            Họ và tên
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium dark:text-white">
            Email
          </label>
          <input
            value={user?.email ?? ""}
            disabled
            className="w-full h-12 px-4 rounded-xl border bg-gray-100"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="
              h-11 px-6 rounded-xl text-white font-bold
              bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
              shadow-xl shadow-blue-300/40
              hover:scale-105 transition
              disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
            "
          >
            {loading ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
