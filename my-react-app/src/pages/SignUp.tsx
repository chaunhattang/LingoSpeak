import { useState } from "react";
import logo from "../assets/images/logo.png";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-x-hidden">
      {/* Left Column: Branding & Features */}
      <aside className="relative w-full lg:w-5/12 bg-primary flex flex-col justify-between p-8 lg:p-12 xl:p-16 overflow-hidden">
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
      </aside>

      {/* Right Column: Sign Up Form */}
      <main className="w-full lg:w-7/12 flex items-center justify-center p-4 py-12 lg:p-8 bg-slate-50 dark:bg-slate-900">
        <div className="w-full max-w-[480px] flex flex-col">
          {/* Card Container */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:border-slate-700 p-8 sm:p-10">
            <div className="flex flex-col gap-2 mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Create your account</h2>
              <p className="text-slate-500 dark:text-slate-400 font-normal">Start your language journey today.</p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="fullname">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">person</span>
                  <input
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-base focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
                    id="fullname"
                    placeholder="Enter your full name"
                    type="text"
                    name="fullname"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">mail</span>
                  <input
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-base focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">lock</span>
                  <input
                    className="w-full h-12 pl-11 pr-12 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-base focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
                    id="password"
                    placeholder="Create a password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer" type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((s) => !s)}>
                    <span className="material-symbols-outlined text-[20px] pt-2">{showPassword ? "visibility_off" : "visibility"}</span>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                  Sign Up
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Đã có tài khoản?
                <a className="font-bold text-primary hover:text-blue-600 transition-colors ml-1" href="#">
                  Sign in
                </a>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8 max-w-xs mx-auto">
            By signing up, you agree to our{" "}
            <a className="underline hover:text-slate-600" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline hover:text-slate-600" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
};
export default SignUp;
