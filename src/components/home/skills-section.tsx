import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SkillsSection() {
  const { t, i18n } = useTranslation();
  const english = i18n.language === "en-US";

  const skills = [
    {
      id: "01",
      name: {
        en: "Strategy",
        pt: "Estratégia",
      },
      description: {
        en: "Personalized brand building strategies, certified with the values and goals of each client, resulting in historic and memorable visions.",
        pt: "Estratégias personalizadas de construção de marca, alinhadas com os valores e metas de cada cliente, resultando em visões históricas e memoráveis.",
      },
    },
    {
      id: "02",
      name: {
        en: "Brand",
        pt: "Marca",
      },
      description: {
        en: "We develop visual identities that transcend the visual, transmitting the essence and values of the brand, ensuring recognition and differentiation in the market.",
        pt: "Desenvolvemos identidades visuais que transcendem o visual, transmitindo a essência e os valores da marca, garantindo reconhecimento e diferenciação no mercado.",
      },
    },
    {
      id: "03",
      name: {
        en: "Multimedia",
        pt: "Multimédia",
      },
      description: {
        en: "Create multimedia content that goes beyond the ordinary, providing visual and interactive experiences to emotionally connect brands with their customers.",
        pt: "Criamos conteúdos multimídia que vão além do comum, proporcionando experiências visuais e interativas que conectam emocionalmente marcas e seus clientes.",
      },
    },
    {
      id: "04",
      name: {
        en: "DA",
        pt: "DA",
      },
      description: {
        en: "Every brand has its unique characteristics, just like the services it offers. Get in touch, and we will create a tailored design package specifically designed to meet your unique needs.",
        pt: "Cada marca tem suas características únicas, assim como os serviços que oferece. Entre em contato e criaremos um pacote de design sob medida, projetado especificamente para atender às suas necessidades únicas.",
      },
    },
    {
      id: "05",
      description: {
        en: "Every brand has its unique characteristics, just like the services it offers. Get in touch, and we will create a tailored design package specifically designed to meet your unique needs.",
        pt: "Toda marca tem suas características únicas, assim como os serviços que oferece. Entre em contato, e criaremos um pacote de design personalizado especificamente pensado para atender às suas necessidades únicas.",
      },
      link: "/contact",
    },
  ];

  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Função para exibir a descrição ao passar o mouse
  const handleMouseEnter = (id: string) => {
    setActiveSkill(id);
  };

  // Função para esconder a descrição ao remover o mouse
  const handleMouseLeave = () => {
    setActiveSkill(null);
  };

  return (
    <section className="px-5 py-10 mb-20 md:mb-32" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:sticky top-20 h-fit lg:flex gap-20 mb-14 lg:mb-0">
          <div className="flex items-baseline gap-20">
            <h1 className="uppercase font-medium mt-5 mb-5 lg:mb-0">
              {t("home.skills.title")}
            </h1>
            <div>
              <p className="lg:text-3xl mb-10 lg:mb-32">
                {t("home.skills.description")}
              </p>
              <div>
                <img src="/logos/Asset 35.png" alt="Logo" className="h-52" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            {skills.map((skill) => {
              const isActive = activeSkill === skill.id;

              return (
                <div
                  key={skill.id}
                  className="relative flex flex-col items-start overflow-hidden min-h-[11em] sm:min-h-[11em] md:min-h-[10em] lg:min-h-[13em]"
                  onMouseEnter={() => handleMouseEnter(skill.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {skill.name ? (
                    // Exibe o título com animação quando skill.name existe
                    <motion.div
                      className="absolute"
                      animate={isActive ? { opacity: 0 } : { opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <h1 className="text-secondary text-7xl xl:text-8xl 2xl:text-9xl font-semibold lg:pl-[90px] cursor-pointer">
                        {english ? skill.name.en : skill.name.pt}
                      </h1>
                    </motion.div>
                  ) : null}

                  <motion.div
                    className="absolute font-normal text-xl text-black max-w-3xl lg:pl-[90px]"
                    initial={{ opacity: skill.name ? 0 : 1 }}
                    animate={
                      isActive || !skill.name ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="mr-3 text-secondary font-bold">{skill.id}</p>
                    <p>
                      {english ? skill.description.en : skill.description.pt}
                    </p>
                    {skill.link && (
                      <div className="mt-3">
                        <a
                          href={skill.link}
                          className="text-secondary underline underline-offset-4 font-medium"
                        >
                          REQUEST A QUOTE
                        </a>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
