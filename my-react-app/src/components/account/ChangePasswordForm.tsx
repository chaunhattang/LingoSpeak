import { useState, useRef } from "react";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleChangePassword = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (newPassword !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:44346/api/Auth/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user.id,
            currentPassword: currentPassword,
            newPassword: newPassword,
          }),
        },
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        alert(errorMessage);
        return;
      }

      const updatedUser = await response.json();

      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Đổi mật khẩu thành công");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert("Không kết nối được backend");
    }
  };

  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border p-8">
      <h2 className="text-xl font-bold mb-6 dark:text-white">Đổi mật khẩu</h2>

      <div className="space-y-6">
        <div className="relative">
          <input
            ref={currentPasswordRef}
            type={showCurrentPassword ? "text" : "password"}
            placeholder="Mật khẩu cũ"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                newPasswordRef.current?.focus();
              }
            }}
            className="w-full h-12 px-4 pr-12 rounded-xl border"
          />

          <button
            type="button"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            <span className="material-symbols-outlined">
              {showCurrentPassword ? "visibility" : "visibility_off"}
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              ref={newPasswordRef}
              type={showNewPassword ? "text" : "password"}
              placeholder="Mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  confirmPasswordRef.current?.focus();
                }
              }}
              className="w-full h-12 px-4 pr-12 rounded-xl border"
            />

            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <span className="material-symbols-outlined">
                {showNewPassword ? "visibility" : "visibility_off"}
              </span>
            </button>
          </div>

          <div className="relative">
            <input
              ref={confirmPasswordRef}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleChangePassword();
                }
              }}
              className="w-full h-12 px-4 pr-12 rounded-xl border"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <span className="material-symbols-outlined">
                {showConfirmPassword ? "visibility" : "visibility_off"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleChangePassword}
            className="
    h-11 px-6 rounded-xl text-white font-bold
    bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
    shadow-xl shadow-blue-300/40
    hover:scale-105 transition
  "
          >
            Cập nhật mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
