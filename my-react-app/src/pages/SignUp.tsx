import { useState } from "react";
import logo from "../assets/images/logo.png";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-display antialiased overflow-x-hidden">
      {/* LEFT COLUMN */}
      <aside
        className="
        relative w-full lg:w-5/12
        bg-gradient-to-br from-[#C77DFF] via-[#F783AC] to-[#FF758F]
        flex flex-col justify-between
        p-8 lg:p-12 xl:p-16 overflow-hidden"
      >
        {/* Decorations */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <img
              src={logo}
              alt="Lingo Speak"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h2 className="text-white text-2xl font-bold tracking-tight">
            Lingo Speak
          </h2>
        </div>

        {/* Headline + Features */}
        <div className="relative z-10 flex flex-col gap-12 my-12 lg:my-0">
          {/* Headline */}
          <h1 className="text-white font-extrabold tracking-tight">
            <span className="block text-4xl lg:text-5xl leading-[1.25]">
              Practice English
            </span>
            <span className="block text-4xl lg:text-5xl leading-[1.25]">
              speaking every day
            </span>
            <span className="block text-4xl lg:text-5xl italic leading-[1.3] text-pink-100 mt-2">
              Speak with confidence
            </span>
          </h1>

          {/* Features */}
          <div className="flex flex-col gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-white">
                <span className="material-symbols-outlined text-[24px]">
                  headphones
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Listen – Speak – Record
                </h3>
                <p className="text-pink-100 text-sm leading-relaxed opacity-90">
                  Improve native pronunciation with AI-powered feedback.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-white">
                <span className="material-symbols-outlined text-[24px]">
                  psychology
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Smart vocabulary memory
                </h3>
                <p className="text-pink-100 text-sm leading-relaxed opacity-90">
                  Learn faster and remember longer with interactive exercises.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-white">
                <span className="material-symbols-outlined text-[24px]">
                  trending_up
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Track your progress
                </h3>
                <p className="text-pink-100 text-sm leading-relaxed opacity-90">
                  See your improvement clearly day by day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 hidden lg:block text-pink-100 text-sm mt-5">
          © 2026 Lingo Speak. All rights reserved.
        </div>
      </aside>

      {/* RIGHT COLUMN */}
      {/* RIGHT COLUMN */}
      <main
        className="w-full lg:w-7/12 flex items-center justify-center p-6
  bg-gradient-to-br from-[#fff5f9] via-[#fff1f6] to-[#fff8fb]"
      >
        <div className="w-full max-w-[480px]">
          <div
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-10
      shadow-2xl shadow-pink-200/50 border border-pink-100"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Create your account
              </h2>
              <p className="text-slate-500 mt-1">
                Start your language journey today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full h-12 px-4 rounded-xl border
              bg-slate-50 border-slate-200
              focus:outline-none focus:ring-4 focus:ring-pink-300/30
              focus:border-pink-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="mt-2 w-full h-12 px-4 rounded-xl border
              bg-slate-50 border-slate-200
              focus:outline-none focus:ring-4 focus:ring-pink-300/30
              focus:border-pink-400 transition"
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
                    placeholder="Create a password"
                    className="w-full h-12 px-4 pr-12 rounded-xl border
                bg-slate-50 border-slate-200
                focus:outline-none focus:ring-4 focus:ring-pink-300/30
                focus:border-pink-400 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-4 h-12 rounded-xl text-white font-bold
            bg-gradient-to-r from-pink-500 to-purple-500
            hover:from-pink-600 hover:to-purple-600
            shadow-lg shadow-pink-300/40
            active:scale-95 transition-all"
              >
                Sign Up
              </button>
            </form>

            {/* Footer */}
            <p className="mt-8 text-center text-slate-600">
              Already have an account?
              <a className="ml-1 font-bold text-pink-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
