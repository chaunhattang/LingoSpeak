import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("sign in");
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
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow">
              <img src={logo} alt="logo" className="rounded-full" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">LingoSpeak</h2>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-extrabold leading-snug text-slate-900">
              Improve Your English Speaking Skills
              <br />
              <span className="text-blue-600 italic">
                Effective – Practical – Every Day
              </span>
            </h1>

            <p className="text-slate-600 max-w-xl text-sm leading-relaxed">
              Practice speaking daily with a smart learning path to improve
              pronunciation, fluency, and real-life communication naturally.
            </p>
          </div>

          {/* FEATURES (ĐÃ GHÉP) */}
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
                  Listening – Speaking – Recording
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Practice native pronunciation with clear and accurate
                  guidance.
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
                  Smart Vocabulary Memory
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Learn faster and remember longer with interactive lessons.
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
                  Learning Progress Tracking
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Clearly see your improvement day by day.
                </p>
              </div>
            </div>
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
              <h2 className="text-2xl font-bold text-slate-900">Sign In</h2>
              <p className="text-slate-500 text-sm mt-1">
                Welcome back! Please sign in to continue learning.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
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
                  Password
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
                    Forgot password?
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
                Sign In
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-600">
              Don’t have an account?
              <a className="ml-1 font-bold text-emerald-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
