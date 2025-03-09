import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";
import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveHoverButton } from "../interactive-hover-button";
import { ChevronRight, Plus } from "lucide-react";
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const { t } = useTranslation();

  // Chama useMediaQuery fora de qualquer condicional
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Usando o hook useScroll
  const { scrollY } = useScroll();

  // Define valores de opacidade e font-size com base em scrollY e se está em mobile
  const opacity = useTransform(scrollY, [0, 500], [1, isMobile ? 1 : 0.5]);
  const fontSize = useTransform(scrollY, [0, 500], [isMobile ? '2rem' : '6rem', isMobile ? '2rem' : '8rem']);

  return (
    <header className="flex flex-col justify-center items-center min-h-[70vh] lg:min-h-[90vh] mx-5 mb-10 lg:mb-0">
      <div>
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
          <p className="text-md lg:text-xl text-center">
            {t("home.header.sub_title.1")}<br />
            {t("home.header.sub_title.2")}
          </p>
        </BlurFade>

        <BlurFade className="flex space-y-4 lg:space-y-0 lg:space-x-4 justify-center flex-col lg:flex-row" delay={0.6}>
          <InteractiveHoverButton
            colors={{
              primary: "primary",
              hover: "secondary",
            }}
            width="w-full md:w-[250px]"
            icon={<ChevronRight size={18} />}
            onClick={() => window.open("/projects", "_self")}
          >
            {t("home.buttons.project")}
          </InteractiveHoverButton>
          <InteractiveHoverButton
            colors={{
              primary: "secondary",
              hover: "primary",
            }}
            width="w-full md:w-[250px]"
            icon={<Plus size={18} />}
            onClick={() => window.open("/contact", "_self")}
          >
            {t("home.buttons.quote")}
          </InteractiveHoverButton>
        </BlurFade>
      </div>
    </header>
  );
}
