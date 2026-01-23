import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const HomeFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-14">
        {/* Top */}
        <div className="grid grid-cols-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 [&>div]:w-full1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                <img
                  src={logo}
                  alt="Lingo Speak Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div> */}
              <h2 className="flex items-center text-4xl font-bold tracking-tight gap-1 leading-normal">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Ling
                </span>

                <img src={logo} alt="logo" className="h-12 w-12 inline-block" />

                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Speak
                </span>
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              {t("footer.company")}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Khóa học
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Từ vựng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gói Vip
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              {t("footer.support")}
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Câu hỏi thường gặp (FAQ)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trung tâm hỗ trợ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              {t("footer.ContactUs")}
            </h4>

            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/lingospeak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-primary hover:text-white transition-colors"
              >
                <FaFacebookF size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:support@lingospeak.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-primary hover:text-white transition-colors"
              >
                <MdEmail size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/lingospeak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-primary hover:text-white transition-colors"
              >
                <FaSquareInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-5 border-t border-slate-200 dark:border-slate-800 
        pt-6 flex flex-col items-center justify-center"
        >
          <p className="text-xs text-slate-500 text-center">
            {t("footer.copyright").replace(
              "2024",
              new Date().getFullYear().toString(),
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default HomeFooter;
