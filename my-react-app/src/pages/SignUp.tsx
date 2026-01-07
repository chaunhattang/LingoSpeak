import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("sign up");
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
        <div className="flex flex-col justify-center gap-8 ">
          {/* Logo */}
          <div className="flex items-center gap-3 pb-8">
            {/* <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow">
              <img src={logo} alt="logo" className="rounded-full" />
            </div> */}
            <h2 className="flex items-center text-6xl font-bold tracking-tight gap-1 leading-normal">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Ling
              </span>

              <img src={logo} alt="logo" className="h-12 w-12 inline-block" />

              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Speak
              </span>
            </h2>
          </div>

          <h1 className="text-4xl font-extrabold leading-snug text-slate-900">
            Practice English speaking
            <br />
            <span className="text-blue-600 italic">
              Confidently – Naturally – Every day
            </span>
          </h1>

          <p className="text-slate-600 max-w-xl text-sm leading-relaxed">
            Build your English speaking skills with a smart learning path,
            interactive practice, and real-time feedback.
          </p>

          <div className="flex gap-4">
            <button
              className="
                h-11 px-6 rounded-xl text-white text-sm font-semibold
                bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                shadow-lg shadow-blue-300/40
                hover:scale-[1.03] transition
              "
            >
              Get started
            </button>

            <button
              className="
                h-11 px-6 rounded-xl text-sm font-semibold text-blue-600
                bg-white border border-cyan-300
                hover:bg-blue-50 transition
              "
            >
              Learn more
            </button>
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
                Create your account
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Start your English learning journey today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="
                    mt-2 w-full h-11 px-4 rounded-xl text-sm
                    bg-slate-50 border border-slate-200
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-300/40
                  "
                />
              </div>

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
                    placeholder="Create a password"
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
                Sign Up
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-600">
              Already have an account?
              <a className="ml-1 font-bold text-emerald-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
