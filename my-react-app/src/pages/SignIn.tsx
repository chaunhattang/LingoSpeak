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
        relative flex min-h-screen w-full overflow-hidden font-display antialiased
        bg-gradient-to-br from-[#ecfeff] via-[#e0f2fe] to-[#ecfdf5]
        transition-colors duration-300
      "
    >
      {/* LEFT BRAND */}
      <aside
        className="
          hidden lg:flex lg:w-5/12 relative flex-col justify-center
          bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute right-[-15%] top-[-15%] w-[520px] h-[520px] rounded-full bg-white blur-3xl" />
          <div className="absolute left-[-15%] bottom-[-15%] w-[420px] h-[420px] rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 px-16 py-12 flex flex-col h-full justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <img src={logo} alt="logo" className="rounded-full" />
            </div>
            <h2 className="text-white text-2xl font-bold">Lingo Speak</h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10">
            <h1 className="text-white text-5xl font-extrabold leading-tight drop-shadow-lg">
              Luyện nói tiếng Anh mỗi ngày <br />
              <span className="text-emerald-100 italic">
                Tự tin hơn từng từ
              </span>
            </h1>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "headphones",
                  title: "Nghe – nói – ghi âm",
                  desc: "Luyện phát âm chuẩn bản xứ với công nghệ AI.",
                },
                {
                  icon: "psychology",
                  title: "Ghi nhớ từ vựng thông minh",
                  desc: "Học nhanh, nhớ lâu qua bài tập tương tác.",
                },
                {
                  icon: "trending_up",
                  title: "Theo dõi tiến trình học",
                  desc: "Thấy sự tiến bộ rõ rệt mỗi ngày.",
                },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div
                    className="
                      h-12 w-12 flex items-center justify-center rounded-xl
                      bg-white/25 backdrop-blur-md text-white
                      ring-1 ring-white/40
                      transition-all duration-300
                      group-hover:scale-110 group-hover:bg-white/40
                    "
                  >
                    <span className="material-symbols-outlined text-[26px]">
                      {f.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">{f.title}</h3>
                    <p className="text-emerald-100 text-sm opacity-90">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-emerald-100 text-sm mt-5">© 2026 Lingo Speak</p>
        </div>
      </aside>

      {/* RIGHT FORM */}
      <main className="flex-1 flex items-center justify-center p-6 animate-[fadeIn_0.6s_ease-out]">
        <div className="w-full max-w-[460px]">
          <div
            className="
              bg-white/80 backdrop-blur-2xl rounded-3xl p-10
              shadow-2xl shadow-blue-200/50
              border border-blue-100
              ring-1 ring-blue-200/40
            "
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>
              <p className="text-slate-500 mt-1">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="
                    mt-2 w-full h-12 px-4 rounded-xl
                    bg-slate-50 border border-slate-200
                    focus:outline-none
                    focus:ring-4 focus:ring-blue-300/40
                    focus:border-blue-400
                    transition
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
                      w-full h-12 px-4 rounded-xl
                      bg-slate-50 border border-slate-200
                      focus:outline-none
                      focus:ring-4 focus:ring-blue-300/40
                      focus:border-blue-400
                      transition
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
                    <span className="material-symbols-outlined">
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
                  mt-4 h-12 rounded-xl text-white font-bold
                  bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500
                  hover:scale-[1.03]
                  shadow-xl shadow-blue-300/40
                  transition-all duration-300
                "
              >
                Sign In
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-slate-600">
            Don’t have an account?
            <a className="ml-1 font-bold text-emerald-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
