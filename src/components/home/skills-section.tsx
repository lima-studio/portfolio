import { motion, useInView } from "framer-motion";
import { useRef, useState, } from "react";
import { useTranslation } from "react-i18next";

function SkillsSection() {
    const { t, i18n } = useTranslation();


    const english = i18n.language === 'en-US';
    const skills = [
        {
            id: "01",
            name: {
                en: "Strategy",
                pt: "Estratégia",
            },
            description: {
                en: "Personalized brand building strategies, certified with the values and goals of each client, resulting in historic and memorable visions.",
                pt: "Estratégias personalizadas de construção de marca, alinhadas com os valores e metas de cada cliente, resultando em visões históricas e memoráveis."
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
                pt: "Desenvolvemos identidades visuais que transcendem o visual, transmitindo a essência e os valores da marca, garantindo reconhecimento e diferenciação no mercado."
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
                pt: "Criamos conteúdos multimídia que vão além do comum, proporcionando experiências visuais e interativas que conectam emocionalmente marcas e seus clientes."
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
                pt: "Cada marca tem suas características únicas, assim como os serviços que oferece. Entre em contato e criaremos um pacote de design sob medida, projetado especificamente para atender às suas necessidades únicas."
            },
            link: true
        },
    ]


    return (
        <section className="px-5 py-10 my-20 md:my-32" id="skills">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:sticky top-20 h-fit lg:flex gap-20 mb-14 lg:mb-0">
                    <h1 className="uppercase font-medium mt-5 mb-5 lg:mb-0">{t('home.skills.title')}</h1>

                    <div>
                        <p className="lg:text-3xl lg:mb-32 mb-10 ">
                            {t('home.skills.description')}
                        </p>
                        <img src="/logos/Asset 35.png" alt="Logo" className="h-52"></img>
                    </div>
                </div>

                <div >
                    <div className="space-y-5">
                        {skills.map((skill) => {
                            const skillRef = useRef<HTMLDivElement | null>(null);
                            const [hasBeenInView, setHasBeenInView] = useState(false);

                            const inView = useInView(skillRef, {
                                margin: "0px 0px -30% 0px",
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
                                    className="overflow-hidden flex flex-col gap-5"
                                >
                                    <div>
                                        <h1 className="text-secondary mb-5 text-7xl 2xl:text-9xl font-extralight  lg:pl-[90px] ">
                                            {english ? skill.name.en : skill.name.pt}
                                        </h1>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={hasBeenInView ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            className="font-normal text-xl text-black max-w-3xl flex gap-5  lg:pl-[55px]"
                                        >
                                            <div>
                                                <p className="text-secondary font-bold">{skill.id}</p>
                                            </div>
                                            <div>
                                                <p className="mb-10">{english ? skill.description.en : skill.description.pt}</p>
                                                {skill.link ? (
                                                    <a href="/contact" className="text-secondary underline underline-offset-4 font-medium">
                                                        REQUEST A QUOTE
                                                    </a>
                                                ) : null}
                                            </div>
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
