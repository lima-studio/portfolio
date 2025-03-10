import { useTranslation } from "react-i18next";
import { FaArrowUp, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";
import BlurFade from "./magicui/blur-fade";

export default function Footer() {
  const { t } = useTranslation();
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-gray-100 min-h-[600px] pt-12 rounded-t-3xl w-full flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row items-start space-y-5 lg:space-y-0 lg:items-center">
        <BlurFade className="mt-28 mx-auto space-y-5 w-full flex flex-col items-center">
          <BlurFade inView className="text-4xl md:text-6xl text-center w-full max-w-4xl px-5">
            <p className="uppercase font-medium text-sm mb-5">{t("footer.contact")}</p>
            <p className="text-3xl md:text-6xl font-medium">{t("footer.description")}</p>
          </BlurFade>
          <a
            href="/contact"
            className="md:text-2xl hover:bg-transparent cursor-pointer"
            style={{ color: "#65ae00", fontWeight: "400" }}
          >
            {t("footer.button")} +
          </a>
        </BlurFade>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-primary text-sm font-medium p-4">
        <div className="text-center md:text-left">
          <span className="hidden md:block">
            {t("footer.copyright")} &copy; {new Date().getFullYear()}
          </span>

          <span className="md:hidden">&copy;{new Date().getFullYear()}</span>
        </div>

        <div>
          <span
            className="hidden gap-2 items-center cursor-pointer md:flex"
            onClick={onScrollToTop}
          >
            {t("footer.back_to_top")} <FaArrowUp />
          </span>

          <span
            className="flex gap-2 items-center cursor-pointer md:hidden"
            onClick={onScrollToTop}
          >
            <FaArrowUp />
          </span>
        </div>

        <div className="mt-4 md:mt-0">
          <ul className="hidden gap-5 md:flex">
            <li>
              <a href="http://www.behance.net/limastdio" target="_blank">
                Behance
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/limastdio/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>

            <li>
              <a href="http://www.instagram.net/limastdio" target="_blank">
                Instagram
              </a>
            </li>
          </ul>

          <ul className="flex gap-5 md:hidden">
            <li>
              <a href="http://www.behance.net/limastdio" target="_blank">
                <FaBehance />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/limastdio/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>

            <li>
              <a href="http://www.instagram.net/limastdio" target="_blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
