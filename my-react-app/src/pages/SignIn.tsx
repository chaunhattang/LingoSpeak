import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("sign in");
    console.log("hello");
  }

  return (
    <div className="relative flex min-h-screen w-full flex-row overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased transition-colors duration-200">
      {/* Left Column: Branding (Desktop only) */}
      <aside className="hidden lg:flex lg:w-5/12 relative flex-col justify-center bg-primary overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-3xl" />
          <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] rounded-full bg-white blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-10 xl:px-20 flex flex-col h-full justify-between py-12">
          {/* Decorative circles for background visual interest */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-blue-900/10 blur-2xl pointer-events-none" />

          {/* Logo Area */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center shadow-sm">
              <img src={logo} alt="Lingo Speak Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <h2 className="text-white text-2xl font-bold tracking-tight">Lingo Speak</h2>
          </div>

          {/* Main Features Content */}
          <div className="relative z-10 flex flex-col gap-10 my-12 lg:my-0">
            <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight pb-2">
              Luyện nói tiếng Anh mỗi ngày – <span className="text-blue-100">Tự tin hơn từng từ</span>
            </h1>
            <div className="flex flex-col gap-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[24px]">headphones</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Nghe – nói – ghi âm</h3>
                  <p className="text-blue-100 text-sm font-normal leading-relaxed opacity-90">Luyện phát âm chuẩn bản xứ với công nghệ AI.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[24px]">psychology</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Ghi nhớ từ vựng thông minh</h3>
                  <p className="text-blue-100 text-sm font-normal leading-relaxed opacity-90">Học nhanh, nhớ lâu qua các bài tập tương tác.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[24px]">trending_up</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white">Theo dõi tiến trình học</h3>
                  <p className="text-blue-100 text-sm font-normal leading-relaxed opacity-90">Thấy sự tiến bộ rõ rệt qua từng ngày học.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Footer */}
          <div className="relative z-10 hidden lg:block text-blue-100 text-sm font-medium">© 2026 Lingo Speak. All rights reserved.</div>
        </div>
      </aside>

      {/* Right Column: Sign In Form */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 bg-[#f0f7ff] dark:bg-slate-900 relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-6 left-6 flex items-center gap-2 ">
          <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center shadow-sm">
            <img src={logo} alt="Lingo Speak Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <span className="text-slate-900 dark:text-white font-bold text-xl">Lingo Speak</span>
        </div>

        <div className="w-full max-w-[480px] flex flex-col">
          {/* Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none p-8 sm:p-10 border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col gap-2 mb-8 text-center">
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Sign In</h2>
              <p className="text-slate-500 dark:text-slate-400">Welcome back! Please enter your details.</p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-slate-700 dark:text-slate-200 text-sm font-semibold">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-slate-700 dark:text-slate-200 text-sm font-semibold">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                  <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <span className="material-symbols-outlined text-[20px] pt-2">{showPassword ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>

                <div className="flex justify-end mt-1">
                  <a href="#" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                    Quên mật khẩu?
                  </a>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="mt-4 w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
                Sign In
                <span className="material-symbols-outlined text-[20px]">login</span>
              </button>
            </form>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Chưa có tài khoản?
              <a href="#" className="font-bold text-primary hover:text-primary-dark transition-colors ml-1">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SignIn;
