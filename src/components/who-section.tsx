import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function WhoSection() {
  const { i18n } = useTranslation();
  const english = i18n.language === "en-US";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(1);

  const elements = [
    {
      id: 0,
      backgroundStyle: {
        backgroundImage: isMobile ? "none" : `url("/images/Lim.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#ffd622",
        backgroundPosition: "right",
        backgroundAttachment: "local",
      },
      linkedin: "https://www.linkedin.com/company/limastdio/",
      who_color: "text-[#8b6e00]",
      span_title: {
        en: "Hello, I'm Limado.",
        pt: "Olá, eu sou Limado.",
        color: "text-[#8b6e00]",
      },
      title: {
        en: "Mascot and symbol. I represent the personality of the brand",
        pt: "Mascote e símbolo. Eu represento a personalidade da marca.",
        color: "text-secondary",
        max_width: "max-w-5xl",
      },
      represent: {
        color: "text-[#8b6e00]",
        max_width: "max-w-sm",
      },
      button: {
        en: "LinkedIn",
        pt: "LinkedIn",
      },
    },
    {
      id: 1,
      backgroundStyle: {
        backgroundImage: `url("/images/LuizLima.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
      linkedin: "https://www.linkedin.com/in/euluizlima/",
      who_color: "text-black",
      span_title: {
        en: "Hello, I’m Lima.",
        pt: "Olá, sou Lima.",
        color: "text-white",
      },
      title: {
        en: "Multidisciplinary Graphic Designer focused on strategy, branding, multimedia, and direction.",
        pt: "Designer Gráfico multidisciplinar com foco em estratégia, marca, multimídia e direção.",
        color: "text-[#b8b8b8]",
        max_width: "max-w-4xl",
      },
      button: {
        en: "LinkedIn",
        pt: "LinkedIn",
      },
    },
  ];

  const handleMouseEnter = () => {
    setCurrentIndex(0); // Muda o conteúdo para o segundo elemento
  };

  const handleMouseLeave = () => {
    setCurrentIndex(1); // Volta para o primeiro elemento
  };

  const selectedElement = elements[currentIndex];

  // Hook para detectar tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Considera mobile quando a largura for menor ou igual a 768px
    };

    // Adiciona listener no evento de resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Chama inicialmente para verificar o estado ao montar o componente

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="who" className="mb-20 md:mb-32 ">
      <motion.div
        className="mx-5 rounded-3xl h-[500px] transition-opacity duration-500"
        style={selectedElement.backgroundStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="px-5 py-10 flex flex-col justify-center h-full gap-5"
          style={{}}
        >
          <motion.span
            className={`text-base ${selectedElement.who_color} font-medium`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {english ? "WHO" : "QUEM"}
          </motion.span>
          <motion.h1
            className={`${selectedElement.title.color} text-5xl md:text-6xl font-medium ${selectedElement.title.max_width}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={`${selectedElement.span_title.color}`}>
              {english
                ? selectedElement.span_title.en
                : selectedElement.span_title.pt}
            </span>
            <br />
            {english ? selectedElement.title.en : selectedElement.title.pt}
          </motion.h1>
          <div className="h-full items-end flex">
            <a
              href={selectedElement.linkedin}
              target="_blank"
              className="min-w-16 w-[250px] text-center py-4 bg-white text-black font-medium h-12 hover:opacity-90 hover:bg-white text-md rounded justify-center flex items-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-sm "
            >
              {english ? selectedElement.button.en : selectedElement.button.pt}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export { WhoSection };
