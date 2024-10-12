import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import BlurFade from "../magicui/blur-fade"



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
    ]
    return (
        <section className="px-5  flex items-center py-10 my-32" id="sklls">
            <div className="grid grid-cols-1 md:grid-cols-2  ">
                <div className="flex gap-20">
                    <BlurFade inView>
                        <h1 className="uppercase font-thin mt-5">Skills</h1>
                    </BlurFade>

                    <BlurFade inView delay={0.2}>
                        <p className="md:text-3xl">Potencializo o processo de inovação de meu parceiros. Construímos estratégias, marcas e multimídia que criam valor significativo para as pessoas e evolução para os negócios.</p>
                    </BlurFade>
                </div>

                <div className="flex items-center justify-center">
                    <div className="space-y-5">
                        {skills.map((skill, _) => {
                            const skillRef = useRef<HTMLDivElement | null>(null);
                            const inView = useInView(skillRef, {
                                margin: "-20% 0px -20% 0px",
                            })
                            return (
                                <motion.div
                                key={skill.id}
                                ref={skillRef}
                                initial={{ height: "auto" }} // Initial state with just the title
                                animate={inView ? { height: "auto", opacity: 1 } : { height: "5rem", opacity: 0.8 }} // Height transition
                                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                                className="overflow-hidden flex flex-col gap-5"
                              >
                                <div>
                                  <h1 className="text-secondary font-light mb-5 text-8xl">
                                    {skill.name}
                                  </h1>
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 1}}
                                    className="font-normal text-xl text-black"
                                  >
                                    <p>{skill.description}</p>
                                  </motion.div>
                                </div>
                              </motion.div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SkillsSection