import Navbar from "../components/layout/Navbar";
import aboutKids from "../assets/images/kidAbout.png";

import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="mt-16 md:mt-20">
        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={aboutKids}
                alt="about"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Về chúng tôi
              </h1>

              <p className="text-slate-600 leading-8 text-lg">
                Chúng tôi là một đội ngũ gồm những chuyên gia ngôn ngữ và kỹ sư
                công nghệ tâm huyết, cùng chung một mục tiêu: phá bỏ rào cản
                ngôn ngữ cho người Việt.
              </p>

              <p className="text-slate-600 leading-8 text-lg">
                Chúng tôi tập trung vào việc nghiên cứu và ứng dụng các phương
                pháp giáo dục hiện đại nhằm tạo ra tác động thực sự cho cộng
                đồng.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-16">
          <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl p-8 text-white text-center shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Sứ mệnh của chúng tôi</h2>

            <p className="max-w-3xl mx-auto text-blue-50 text-lg leading-relaxed">
              Giúp 1 triệu người Việt tự tin giao tiếp tiếng Anh một cách tự
              nhiên thông qua phương pháp học tập hiện đại, thực hành thực tế và
              công nghệ hỗ trợ.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="space-y-20">
            {/* Chapter 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <div className="md:w-5/12 order-2 md:order-1">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">
                  Câu chuyện của chúng tôi
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Đội ngũ sáng lập Lingo Speak khởi đầu là những người học
                    tiếng Anh đầy nhiệt huyết nhưng thường xuyên cảm thấy bế
                    tắc. Dù đạt điểm cao trong các kỳ thi, chúng tôi vẫn gặp khó
                    khăn khi giao tiếp với người bản xứ.
                  </p>

                  <p>
                    Chúng tôi nhận thấy lỗ hổng nằm ở sự kết nối giữa "biết" và
                    "nói". Đó là lúc ý tưởng về một nền tảng tập trung tối đa
                    vào phản xạ âm thanh được hình thành.
                  </p>
                </div>
              </div>

              <div className="md:w-7/12 order-1 md:order-2">
                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtypy5Y4KN2mDYs67m0ggHACSU9IEyijdOch2TFiVs_ruKkxvAMo9qNffPAACA5J0LLUQPMtukQIeAS5UM3PcU9nUzS-DdZhXm6JMMfNfICCdx6Xz1JnmnjzXYtttVLPZKcNXy4w_-CjCAZb6xQI5Cxk4mSOje9Jw4Z41SMXweC0jiKX7P15-JPgn-42tQlW7lcX3S6TY2linpc10_Sq6VtJqe2WjpZs0jkbYz_gEEjJXqgET8MjesCgwvxtjhcLMbkqy6WJbmdfbf"
                      alt="Team collaborating"
                      className="w-full h-full object-cover border border-slate-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
              <div className="md:w-5/12">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 tracking-tight">
                  Tầm nhìn và Phát triển
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Sau nhiều tháng nghiên cứu cùng các chuyên gia ngôn ngữ,
                    chúng tôi đã phát triển hệ thống "Tam Giác Phản Xạ": Nghe
                    sâu - Viết chuẩn - Nói tự tin.
                  </p>

                  <p>
                    Không chỉ là học từ vựng, mà là học cách bộ não xử lý âm
                    thanh một cách trực diện và tức thì.
                  </p>
                </div>

                <div className="flex gap-12 mt-12">
                  <div>
                    <span className="block text-4xl font-black text-slate-900">
                      50k+
                    </span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                      Học viên
                    </span>
                  </div>

                  <div>
                    <span className="block text-4xl font-black text-slate-900">
                      500+
                    </span>
                    <span className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                      Chủ đề
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:w-7/12">
                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoXWCikCQdq6yUYOptYWqmnbUsNKh808QgTIFdgO3tGt68UZrerOT4oxNfDJ5y1smrOJIw4VvrK-36-A5qarSbwFpItkQlkSCixiilXWi-i6MB5iar7cPQo8psWNac97egWmdIettDWfFY5rY4a3MXC2lgz7Vk_TR60u-ym4ao8bqxZJ-cozzFlmxGiKWrPq6XrkGUclX7RCRJh5oFm_BMDCy4HcPoyLOhh1mewu4AtQFMn-haBKjnvKFHbeDds_SA7l9youtjhplr"
                      alt="Vision"
                      className="w-full h-full object-cover border border-slate-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold text-center mb-12">
              Giá trị cốt lõi
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
                <h3 className="font-bold mb-3">Con người là trung tâm</h3>

                <p className="text-sm text-slate-500">
                  Luôn đặt trải nghiệm học tập của người dùng lên hàng đầu.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
                <h3 className="font-bold mb-3">Đổi mới không ngừng</h3>

                <p className="text-sm text-slate-500">
                  Nghiên cứu và áp dụng công nghệ mới vào giáo dục.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
                <h3 className="font-bold mb-3">Tác động cộng đồng</h3>

                <p className="text-sm text-slate-500">
                  Mang đến cơ hội học tiếng Anh cho nhiều người Việt hơn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Bạn đã sẵn sàng thay đổi?
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto mb-10">
              Đừng để tiếng Anh là rào cản ngăn bạn chạm tới những ước mơ lớn.
              Hãy bắt đầu hành trình nói tiếng Anh tự tin ngay hôm nay.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => navigate("/register")}
                className="h-11 px-20 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:scale-105 transition"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
