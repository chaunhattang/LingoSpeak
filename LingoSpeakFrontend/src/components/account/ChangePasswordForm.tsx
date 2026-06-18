import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { getUser, setUser } from "../../utils/auth";
import { changePassword } from "../../api/auth";
import { toast } from "sonner";

const ChangePasswordForm = () => {
  const { t } = useTranslation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleChangePassword = async () => {
    const user = getUser();
    if (!user) return;

    if (!currentPassword) {
      toast.error(t("profile.changePassword.currentPasswordRequired"));
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error(t("profile.changePassword.confirmMismatch"));
      return;
    }
    if (newPassword.length < 6) {
      toast.error(t("profile.changePassword.newPasswordLength"));
      return;
    }

    setLoading(true);
    try {
      const updatedUser = await changePassword(user.id, newPassword);
      setUser(updatedUser);
      toast.success(t("profile.changePassword.changed"));
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      toast.error(t("profile.changePassword.backendUnavailable"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border p-8">
      <h2 className="text-xl font-bold mb-6 dark:text-white">{t("profile.changePassword.title")}</h2>

      <div className="space-y-6">
        <div className="relative">
          <input
            type={showCurrentPassword ? "text" : "password"}
            placeholder={t("profile.changePassword.oldPassword")}
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
              placeholder={t("profile.changePassword.newPassword")}
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
              placeholder={t("profile.changePassword.confirmPassword")}
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
            disabled={loading}
            className="
              h-11 px-6 rounded-xl text-white font-bold
              bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
              shadow-xl shadow-blue-300/40
              hover:scale-105 transition
              disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
            "
          >
            {loading ? t("profile.changePassword.updating") : t("profile.changePassword.update")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
