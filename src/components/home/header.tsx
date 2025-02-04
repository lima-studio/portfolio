import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { t } = useTranslation();

  const { scrollY } = useScroll();

  // Opacidade (com uma faixa mais suave)
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  // Tamanho do título (faixa mais suave)
  const fontSize = useTransform(scrollY, [0, 500], ["6rem", "8rem"]);

  return (
    <header className="flex flex-col justify-center items-center min-h-[90vh]">
      <div className="px-[17rem]">
        <BlurFade blur="10px" delay={0.2}>
          <p className="uppercase text-sm font-normal text-center">
            {t("home.header.span")}
          </p>
        </BlurFade>

        <BlurFade className="flex flex-col justify-center items-center space-y-5 relative my-5" delay={0.4}>
          <motion.h1
            style={{ opacity, fontSize }}
            className="mb-2 text-8xl font-medium text-center"
          >
            {t("home.header.title")}
          </motion.h1>
          <p className="text-lg xl:text-xl text-center">
            {t("home.header.sub_title")}
          </p>
        </BlurFade>

        <BlurFade className="flex space-x-4 justify-center" delay={0.6}>
          <a
            href="/projects"
            className="min-w-16 w-[250px] text-center py-4 text-black bg-primary px-8 hover:bg-primary/90 cursor-pointer rounded transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-sm font-medium"
          >
            {t("home.buttons.project")}
          </a>
          <a
            className="min-w-16 w-[250px] text-center py-4 text-black bg-secondary px-8 hover:bg-secondary/90 cursor-pointer rounded transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-sm font-medium"
            href="/contact"
          >
            {t("home.buttons.quote")}
          </a>
        </BlurFade>
      </div>
    </header>
  );
}
