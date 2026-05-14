import { useState } from "react";

const PersonalInfoForm = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [fullName, setFullName] = useState(user.fullName || "");

  const handleSave = async () => {
    try {
      const response = await fetch(
        "https://localhost:44346/api/Auth/update-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.id,
            fullName: fullName,
            email: user.email,
            passwordHash: user.passwordHash,
          }),
        },
      );

      const updatedUser = await response.json();

      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Cập nhật thành công");

      window.location.reload();
    } catch (error) {
      alert("Không cập nhật được");
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
            value={user.email || ""}
            disabled
            className="w-full h-12 px-4 rounded-xl border bg-gray-100"
          />
        </div>

        <div className="flex justify-end">
          <button
            className="
    h-11 px-6 rounded-xl text-white font-bold
    bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
    shadow-xl shadow-blue-300/40
    hover:scale-105 transition
  "
          >
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
