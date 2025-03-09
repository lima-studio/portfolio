import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function SkillsSection() {
  const { t, i18n } = useTranslation();
  const english = i18n.language === "en-US";

  const skills = [
    {
      id: "01",
      name: { en: "strategy", pt: "estratégia" },
      altNames: {
        en: ["positioning"],
        pt: ["posicionamento"],
      },
    },
    {
      id: "02",
      name: { en: "brand", pt: "marca" },
      altNames: {
        en: [
          "logo",
          "visual language",
          "visual identity",
          "brand guidelines",
          "promotional material",
          "mockups",
        ],
        pt: [
          "logo",
          "linguagem visual",
          "identidade visual",
          "guias de marca",
          "material promocional",
          "mockups",
        ],
      },
    },
    {
      id: "03",
      name: { en: "multimedia", pt: "multimídia" },
      altNames: {
        en: ["landing page", "interface", "presentation", "editorial line"],
        pt: ["landing page", "interface", "apresentação", "linha editorial"],
      },
    },
    {
      id: "04",
      name: { en: "AD (art direction)", pt: "DA (direção de arte)" },
      altNames: {
        en: [
          "visual concepts",
          "supervision and management",
          "post-production",
        ],
        pt: ["conceitos visuais", "supervisão e gerenciamento", "pós produção"],
      },
    },
  ];

  const skillText = {
    id: "05",
    name: { en: "", pt: "" },
    description: {
      en: "Every brand has its own needs, and your services deserve to reflect that. Let’s work together to create a personalized design package, tailored to meet your exact demands.",
      pt: "Cada marca tem sua necessidade, e seus serviços merecem refletir isso. Vamos criar junto um pacote de design personalizado, feito sob medida para atender exatamente às suas demandas.",
    },
    altNames: {
      en: ["", "", ""],
      pt: ["", "", ""],
    },
    link: "/contact",
  };

  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState<{ [key: string]: string }>({});
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // useRef para armazenar o timer

  // Função para iniciar a troca de textos
  const handleMouseEnter = (id: string, altNames: string[]) => {
    setActiveSkill(id);

    let index = 0;
    setCurrentText((prev) => ({ ...prev, [id]: altNames[index] }));

    intervalRef.current = setInterval(() => {
      index = (index + 1) % altNames.length; // Loop entre os textos
      setCurrentText((prev) => ({ ...prev, [id]: altNames[index] }));
    }, 500);
  };

  // Função para parar a troca de textos
  const handleMouseLeave = (id: string, originalName: string) => {
    setActiveSkill(null);
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Limpa o timer
      intervalRef.current = null; // Zera a referência
    }
    setCurrentText((prev) => ({ ...prev, [id]: originalName })); // Retorna o texto original
  };

  return (
    <section className="px-5 py-10 mb-20 lg:mb-32" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:ml-[5rem] flex justify-between flex-col gap-6 mb-14 lg:mb-0">
          <div>
            <h1 className="uppercase font-medium mt-5 mb-5">
              {t("home.skills.title")}
            </h1>
            <p className="lg:text-3xl mb-10 lg:mb-32 lg:w-[43rem] ">
              {t("home.skills.description")}
            </p>
          </div>

          <div>
            <img src="/logos/Asset 35.png" alt="Logo" className="h-52" />
          </div>
        </div>

        <div>
          {skills.map((skill) => {
            const isActive = activeSkill === skill.id;
            const displayedText =
              currentText[skill.id] ||
              (english ? skill.name.en : skill.name.pt);

            return (
              <div
                key={skill.id}
                className="relative flex flex-col items-start overflow-hidden min-h-[6em]"
                onMouseEnter={() =>
                  handleMouseEnter(
                    skill.id,
                    english ? skill.altNames.en : skill.altNames.pt
                  )
                }
                onMouseLeave={() =>
                  handleMouseLeave(
                    skill.id,
                    english ? skill.name.en : skill.name.pt
                  )
                }
              >
                <motion.h1
                  className={`text-[#cdcdcd] hover:text-secondary transition-colors text-5xl xl:text-6xl 2xl:text-7xl cursor-pointer hover:font-light font-medium`}
                  animate={{ opacity: isActive ? 0.7 : 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {displayedText}
                </motion.h1>
              </div>
            );
          })}
          <motion.div className="font-normal text-xl text-black max-w-3xl mt-[7rem]">
            <p>
              {english ? skillText.description.en : skillText.description.pt}
            </p>
            {skillText.link && (
              <div className="mt-3">
                <a
                  href={skillText.link}
                  className="text-secondary underline underline-offset-4 font-medium text-sm uppercase"
                >
                  {t("home.partners.quote_button")}
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
