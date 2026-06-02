import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/images/img1.png";
import { login } from "../api/auth";
import { toast } from "sonner";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await login({ email, password });
      toast.success("Đăng nhập thành công");
      navigate("/");
    } catch (error: any) {
      const msg = error.response?.data?.message ?? "Sai email hoặc mật khẩu";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        relative min-h-screen w-full flex items-center justify-center
        bg-gradient-to-br from-[#ecfeff] via-[#e0f2fe] to-[#ecfdf5]
        font-display
      "
    >
      <Link
        to="/"
        className="
          absolute top-3 right-3 z-50
          w-8 h-8 sm:w-9 sm:h-9
          flex items-center justify-center
          rounded-full bg-white
          shadow-md border border-slate-200
          hover:bg-gray-100 active:scale-95 transition
        "
      >
        <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-slate-600">
          close
        </span>
      </Link>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 px-6">
        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-extrabold leading-snug text-slate-900">
              {t("signin.title")}
              <br />
              <span className="text-blue-600 italic">{t("signin.subtitle")}</span>
            </h1>
            <p className="text-slate-600 max-w-xl text-sm leading-relaxed mb-6">
              {t("signin.description")}
            </p>
          </div>
          <div>
            <img src={img1} alt="img1" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center">
          <div
            className="
              w-full max-w-md bg-white/80 backdrop-blur-2xl
              rounded-3xl p-8
              shadow-2xl shadow-blue-200/50
              border border-blue-100
            "
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {t("signin.formTitle")}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {t("signin.welcomeBack")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {t("signin.email")}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ban@example.com"
                  className="
                    mt-2 w-full h-11 px-4 rounded-xl text-sm
                    bg-slate-50 border border-slate-200
                    focus:outline-none focus:ring-4 focus:ring-blue-300/40
                  "
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {t("signin.password")}
                </label>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="
                      w-full h-11 px-4 rounded-xl text-sm
                      bg-slate-50 border border-slate-200
                      focus:outline-none focus:ring-4 focus:ring-blue-300/40
                    "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
                <div className="text-right mt-1">
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    {t("signin.forgotPassword")}
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  mt-3 h-11 rounded-xl text-white text-sm font-bold
                  bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                  shadow-xl shadow-blue-300/40
                  hover:scale-[1.03] transition
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                "
              >
                {loading ? "Đang đăng nhập..." : t("signin.signIn")}
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-600">
              {t("signin.noAccount")}
              <Link
                to="/register"
                className="ml-1 font-bold text-emerald-600 hover:underline"
              >
                {t("signin.signUp")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
