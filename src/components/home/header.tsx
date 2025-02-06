import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";
import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveHoverButton } from "../interactive-hover-button";
import { ChevronRight, Plus } from "lucide-react";

export default function Header() {
  const { t } = useTranslation();

  const { scrollY } = useScroll();


  // Opacidade (com uma faixa mais suave)
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  // Tamanho do título (faixa mais suave)
  const fontSize = useTransform(scrollY, [0, 500], ["6rem", "8rem"]);

  return (
    <header className="flex flex-col justify-center items-center min-h-[90vh]">
      <div >
        <BlurFade blur="10px" delay={0.2}>
          <p className="uppercase text-sm font-normal text-center">
            {t("home.header.span")}
          </p>
        </BlurFade>

        <BlurFade className="flex flex-col justify-center items-center space-y-5 relative mt-5 mb-10" delay={0.4}>
          <motion.h1
            style={{ opacity, fontSize }}
            className="mb-2 text-8xl font-medium text-center"
          >
            {t("home.header.title.1")}<br />
            {t("home.header.title.2")}
          </motion.h1>
          <p className="text-lg xl:text-xl text-center">
            {t("home.header.sub_title.1")}<br />
            {t("home.header.sub_title.2")}
          </p>
        </BlurFade>

        <BlurFade className="flex space-x-4 justify-center" delay={0.6}>
          <InteractiveHoverButton
            colors={{
              primary: "primary",
              hover: "secondary",
            }}
            icon={<ChevronRight
              size={18}
            />}
            onClick={() => window.open("/projects", "_self")}>
            {t("home.buttons.project")}
          </InteractiveHoverButton>
          <InteractiveHoverButton
            colors={{
              primary: "secondary",
              hover: "primary",
            }}
            icon={<Plus
              size={18}
            />}
            onClick={() => window.open("/contact", "_self")}>
            {t("home.buttons.quote")}
          </InteractiveHoverButton>
        </BlurFade>
      </div>
    </header>
  );
}
