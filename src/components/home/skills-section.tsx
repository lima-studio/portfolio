import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function SkillsSection() {
    const skills = [
        {
            id: "01",
            name: "Estratégia",
            description: "Construo estratégias de marcas personalizadas, alinhadas com os valores e metas de cada cliente, resultando em identidades visuais autênticas e memoráveis.",
        },
        {
            id: "02",
            name: "Marca",
            description: "Desenvolvemos identidades visuais que transcendem o visual, transmitindo a essência e os valores da marca, garantindo reconhecimento e diferenciação no mercado."
        },
        {
            id: "03",
            name: "Multimídia",
            description: "Criamos conteúdo multimídia que vai além do comum, proporcionando experiências visuais e interativas para conectar emocionalmente as marcas aos seus clientes."
        },
        {
            id: "04",
            name: "DA",
            description: "Criamos conteúdo multimídia que vai além do comum, proporcionando experiências visuais e interativas para conectar emocionalmente as marcas aos seus clientes."
        },
        {
            id: "05",
            name: "SP",
            description: "Cada marca é única, e seus serviços também podem ser. Entre em contato, e criaremos um pacote de design personalizado sob medida para atender às suas necessidades específicas."
        }
    ];

    return (
        <section className="px-5 py-10 my-32" id="skills">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="sticky top-20 h-fit flex gap-20">
                    <h1 className="uppercase font-thin mt-5">Skills</h1>

                    <div>
                        <p className="md:text-3xl md:mb-32 mb-10">
                            Potencializo o processo de inovação de meus parceiros. Construímos estratégias, marcas e multimídia que criam valor significativo para as pessoas e evolução para os negócios.
                        </p>
                        <img src="/logos/Asset 35.png" alt="Logo" className="h-52"></img>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="space-y-5">
                        {skills.map((skill) => {
                            const skillRef = useRef<HTMLDivElement | null>(null);
                            const [hasBeenInView, setHasBeenInView] = useState(false);

                            const inView = useInView(skillRef, {
                                margin: "0px 0px -20% 0px",
                            });

                            if (inView && !hasBeenInView) {
                                setHasBeenInView(true);
                            }

                            return (
                                <motion.div
                                    key={skill.id}
                                    ref={skillRef}
                                    initial={{ height: "auto" }}
                                    animate={hasBeenInView ? { height: "auto", opacity: 1 } : { height: "5rem", opacity: 0.8 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden flex flex-col gap-5 pl-[110px]"
                                >
                                    <div>
                                        <p className="text-secondary mb-5 text-8xl">
                                            {skill.name}
                                        </p>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={hasBeenInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            className="font-normal text-xl text-black"
                                        >
                                            <p>{skill.description}</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
