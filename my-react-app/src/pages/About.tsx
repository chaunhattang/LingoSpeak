import Navbar from "../components/layout/Navbar";
import logo from "../assets/images/logo.png";

const features = [
  {
    icon: "record_voice_over",
    title: "Luyện nghe & nói",
    desc: "Thực hành hội thoại thực tế cùng phản xạ giao tiếp tự nhiên.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "style",
    title: "Flashcard thông minh",
    desc: "Ghi nhớ từ vựng nhanh hơn với flashcard cá nhân hóa theo tiến độ.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: "mic",
    title: "Ghi âm & so sánh",
    desc: "So sánh giọng nói với người bản xứ để cải thiện phát âm.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: "menu_book",
    title: "Học theo chủ đề",
    desc: "Chọn chủ đề phù hợp với mục tiêu học tập và giao tiếp hằng ngày.",
    color: "bg-violet-50 text-violet-600",
  },
];

const stack = [
  { name: "React + TypeScript", icon: "code", color: "text-blue-500" },
  { name: "Tailwind CSS", icon: "palette", color: "text-cyan-500" },
  { name: "ASP.NET Core 8", icon: "dns", color: "text-purple-500" },
  { name: "SQL Server", icon: "storage", color: "text-orange-500" },
  { name: "Entity Framework Core", icon: "layers", color: "text-green-500" },
  { name: "JWT Authentication", icon: "lock", color: "text-red-500" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <main className="max-w-[900px] mx-auto px-4 md:px-10 py-16 mt-16 md:mt-24 space-y-16">
        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Ling
            </span>
            <img src={logo} alt="logo" className="h-14 w-14" />
            <span className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Speak
            </span>
          </div>
          <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
            Nền tảng học tiếng Anh thông minh — giúp bạn luyện nói, tích lũy từ vựng và tự tin giao tiếp mỗi ngày.
          </p>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Phiên bản 1.0.0
          </span>
        </section>

        {/* Mission */}
        <section className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white text-center shadow-lg">
          <span className="material-symbols-outlined text-4xl mb-3 block">emoji_objects</span>
          <h2 className="text-2xl font-black mb-3">Sứ mệnh của chúng tôi</h2>
          <p className="text-blue-50 leading-relaxed max-w-xl mx-auto">
            LingoSpeak được xây dựng với mục tiêu giúp người học tiếng Anh tại Việt Nam tiếp cận ngôn ngữ một cách tự nhiên và hiệu quả — không áp lực, không nhàm chán, chỉ cần 15–20 phút mỗi ngày.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">Tính năng nổi bật</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${f.color}`}>
                  <span className="material-symbols-outlined text-[22px]">{f.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-slate-800">{f.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">Công nghệ sử dụng</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stack.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <span className={`material-symbols-outlined text-[22px] ${s.color}`}>{s.icon}</span>
                <span className="text-sm font-semibold text-slate-700">{s.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dev info */}
        <section className="text-center space-y-2 pb-8">
          <p className="text-slate-400 text-sm">
            Được phát triển bởi{" "}
            <span className="font-semibold text-slate-600">LingoSpeak Team</span>
          </p>
          <p className="text-slate-400 text-sm">
            © 2026 LingoSpeak. Tất cả quyền được bảo lưu.
          </p>
        </section>
      </main>
    </div>
  );
}
