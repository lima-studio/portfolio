import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import BlurFade from "./magicui/blur-fade";
import { FadeText } from "./magicui/fade-text";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"; // Importando o framer-motion para animação

export default function Navbar() {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [menuOpen]);

  const handleNavigation = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }

    setMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 70;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <nav className="lg:fixed w-full z-50 py-5 bg-white mb-10">
      <div className="flex justify-between px-[2vw] xl:px-[3vw] 2xl:px-[5vw] h-full items-center">
        <BlurFade>
          <a href="/" className="mixBlendMode">
            <img
              src={"/logos/Ativo 8.png"}
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
          </a>
        </BlurFade>

        {/* Menu de navegação para telas grandes */}
        <ul className="font-medium text-end hidden md:flex gap-5">
          <li>
            <a href="/projects" className="relative hover: transition group">
              <FadeText
                text={t("navbar.links.works")}
                direction="up"
                framerProps={{
                  hidden: { opacity: 0 },
                  show: {
                    transition: { delay: 0.25 },
                  },
                }}
                className="text-xl"
              />
            </a>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("#about")}
              className="relative hover: transition group"
            >
              <FadeText
                text={t("navbar.links.about")}
                direction="up"
                framerProps={{
                  hidden: { opacity: 0 },
                  show: {
                    transition: { delay: 0.5 },
                  },
                }}
                className="text-xl"
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("#skills")}
              className="relative hover: transition group"
            >
              <FadeText
                text={t("navbar.links.skills")}
                direction="up"
                framerProps={{
                  hidden: { opacity: 0 },
                  show: {
                    transition: { delay: 1 },
                  },
                }}
                className="text-xl"
              />
            </button>
          </li>
          <li>
            <a href="/contact" className="relative hover: transition group">
              <FadeText
                text={t("navbar.links.contact")}
                direction="up"
                framerProps={{
                  hidden: { opacity: 0 },
                  show: {
                    transition: { delay: 1.25 },
                  },
                }}
                className="text-xl"
              />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
        </ul>

        {/* Menu Hamburger para mobile */}
        <div className="md:hidden flex ">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            <MdOutlineMenu />
          </button>
        </div>

        {/* Menu Mobile */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 left-0 bg-white py-5 px-5 md:hidden h-screen z-50"
        >
          <div className="md:hidden flex w-full justify-end items-end ">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
              <IoMdClose />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-5">
            <li>
              <a
                href="/projects"
                className="text-xl"
                onClick={() => handleNavigation("#projects")}
              >
                {t("navbar.links.works")}
              </a>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("#about")}
                className="text-xl"
              >
                {t("navbar.links.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("#skills")}
                className="text-xl"
              >
                {t("navbar.links.skills")}
              </button>
            </li>
            <li>
              <a href="/contact" className="text-xl">
                {t("navbar.links.contact")}
              </a>
            </li>
          </ul>

          <div className="mt-5">
            <div className="flex justify-center gap-4">
              <button
                className={`${language === "en-US" ? "font-bold" : ""}`}
                onClick={() => changeLanguage("en-US")}
              >
                EN
              </button>
              <span>/</span>
              <button
                className={`${language === "pt-BR" ? "font-bold" : ""}`}
                onClick={() => changeLanguage("pt-BR")}
              >
                PT
              </button>
            </div>
            <div className="flex justify-center gap-5 mt-4">
              <a href="https://wa.link/df9y7a" target="_blank">
                <FaWhatsapp size={30} className="cursor-pointer text-secondary" />
              </a>
              <a href="http://www.instagram.net/limastdio" target="_blank">
                <FaInstagram
                  size={30}
                  className="cursor-pointer text-secondary"
                />
              </a>
            </div>
          </div>
        </motion.div>

        <BlurFade className="hidden lg:flex items-center space-x-5 ">
          <div>
            <button
              className={`${language === "en-US" ? "font-bold" : ""}`}
              onClick={() => changeLanguage("en-US")}
            >
              EN
            </button>
            /
            <button
              className={`${language === "pt-BR" ? "font-bold" : ""}`}
              onClick={() => changeLanguage("pt-BR")}
            >
              PT
            </button>
          </div>
          <div className="flex">
            <a href="https://wa.link/df9y7a" target="_blank">
              <FaWhatsapp size={30} className="cursor-pointer text-secondary" />
            </a>
            <a href="http://www.instagram.net/limastdio" target="_blank">
              <FaInstagram
                size={30}
                className="cursor-pointer text-secondary"
              />
            </a>
          </div>
        </BlurFade>
      </div>
    </nav>
  );
}
