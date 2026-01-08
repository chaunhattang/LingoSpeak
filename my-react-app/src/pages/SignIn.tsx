import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import img1 from "../assets/images/img1.png";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Đăng nhập");
  }

  return (
    <div
      className="
        min-h-screen w-full flex items-center justify-center
        bg-gradient-to-br from-[#ecfeff] via-[#e0f2fe] to-[#ecfdf5]
        font-display py-2
      "
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 px-6">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center ">
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
            <h1 className="text-3xl font-extrabold leading-snug text-slate-900">
              {t("signin.title")}
              <br />
              <span className="text-blue-600 italic  ">
                {t("signin.subtitle")}
              </span>
            </h1>

            <p className="text-slate-600 max-w-xl text-sm leading-relaxed mb-6">
              {t("signin.description")}
            </p>
          </div>

          <div className="flex gap-4 ">
            <button
              className="
                h-11 px-6 rounded-xl text-white text-sm font-semibold
                bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                shadow-lg shadow-blue-300/40
                hover:scale-[1.03] transition
              "
            >
              {t("signin.startNow")}
            </button>

            <button
              className="
                h-11 px-8 rounded-xl text-sm font-semibold text-blue-600
                bg-white border border-cyan-300
                hover:bg-blue-50 transition
              "
            >
              {t("signin.learnMore")}
            </button>
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
              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {t("signin.email")}
                </label>
                <input
                  type="email"
                  required
                  placeholder="ban@example.com"
                  className="
                    mt-2 w-full h-11 px-4 rounded-xl text-sm
                    bg-slate-50 border border-slate-200
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-300/40
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  {t("signin.password")}
                </label>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
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

                <div className="text-right mt-1">
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    {t("signin.forgotPassword")}
                  </a>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  mt-3 h-11 rounded-xl text-white text-sm font-bold
                  bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                  shadow-xl shadow-blue-300/40
                  hover:scale-[1.03] transition
                "
              >
                {t("signin.signIn")}
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
