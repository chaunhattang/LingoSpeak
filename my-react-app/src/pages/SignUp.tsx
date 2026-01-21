import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("đăng ký");
  }

  return (
    <div
      className="
        min-h-screen w-full flex items-center justify-center
        bg-gradient-to-br from-[#ecfeff] via-[#e0f2fe] to-[#ecfdf5]
        font-display
      "
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 px-6">
        {/* LEFT CONTENT */}
        <div className="hidden lg:flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <h2 className="flex items-center text-5xl font-bold tracking-tight gap-1 leading-normal">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Ling
              </span>

              <img src={logo} alt="logo" className="h-12 w-12 inline-block" />

              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Speak
              </span>
            </h2>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-extrabold leading-snug text-slate-900">
              {t("signup.title")}
              <br />
              <span className="text-blue-600 italic text-2xl block mt-2">
                {t("signup.subtitle")}
              </span>
            </h1>

            <p className="text-slate-600 max-w-xl text-sm leading-relaxed ">
              {t("signup.description")}
            </p>
          </div>

          {/* FEATURES */}
          <div className="flex flex-col gap-6 mt-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 group">
              <div
                className="
                  flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-xl bg-blue-500/20 text-blue-600
                  backdrop-blur-sm transition-transform
                  group-hover:scale-110
                "
              >
                <span className="material-symbols-outlined text-[24px]">
                  headphones
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {t("signup.features.listenSpeakRecord.title")}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t("signup.features.listenSpeakRecord.description")}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 group">
              <div
                className="
                  flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-xl bg-cyan-500/20 text-cyan-600
                  backdrop-blur-sm transition-transform
                  group-hover:scale-110
                "
              >
                <span className="material-symbols-outlined text-[24px]">
                  psychology
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {t("signup.features.smartVocabulary.title")}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t("signup.features.smartVocabulary.description")}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 group">
              <div
                className="
                  flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-xl bg-emerald-500/20 text-emerald-600
                  backdrop-blur-sm transition-transform
                  group-hover:scale-110
                "
              >
                <span className="material-symbols-outlined text-[24px]">
                  trending_up
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-slate-900">
                  {t("signup.features.trackProgress.title")}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t("signup.features.trackProgress.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PHẦN FORM BÊN PHẢI */}
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
                {t("signup.formTitle")}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {t("signup.startJourney")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {t("signup.email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t("signup.emailPlaceholder")}
                  className="
                    mt-2 w-full h-11 px-4 rounded-xl text-sm
                    bg-slate-50 border border-slate-200
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-300/40
                  "
                />
              </div>

              {/* Mật khẩu */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {t("signup.password")}
                </label>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder={t("signup.passwordPlaceholder")}
                    className="
                      w-full h-11 px-4 rounded-xl text-sm
                      bg-slate-50 border border-slate-200
                      focus:outline-none
                      focus:ring-4 focus:ring-blue-300/40
                    "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute right-4 top-1/2 -translate-y-1/2
                      text-slate-400 hover:text-slate-600
                    "
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Mật khẩu again */}
              <div>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder={t("signup.confirmPasswordPlaceholder")}
                    className="
                      w-full h-11 px-4 rounded-xl text-sm
                      bg-slate-50 border border-slate-200
                      focus:outline-none
                      focus:ring-4 focus:ring-blue-300/40
                    "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      absolute right-4 top-1/2 -translate-y-1/2
                      text-slate-400 hover:text-slate-600
                    "
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Nút đăng ký */}
              <button
                type="submit"
                className="
                  mt-3 h-11 rounded-xl text-white text-sm font-bold
                  bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                  shadow-xl shadow-blue-300/40
                  hover:scale-[1.03] transition
                "
              >
                {t("signup.signUp")}
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-600">
              {t("signup.haveAccount")}
              <Link
                to="/login"
                className="ml-1 font-bold text-emerald-600 hover:underline"
              >
                {t("signup.signIn")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
