import { depoiments } from "@/depoiments";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const DepoimentsSection = () => {
    const [activeDepoiment, setActiveDepoiment] = useState(1);
    const { t, i18n } = useTranslation();

    const english = i18n.language === 'en-US'

    return (
        <section className="px-6 py-10">
            <div className="bg-[#cdcdcd] grid grid-cols-2 gap-10 px-5 py-8 rounded-lg ">
                {/* Lista de depoimentos */}
                <div>
                    {depoiments.map((depoiment, index) => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px", });

                        useEffect(() => {
                            if (inView) {
                                setActiveDepoiment(index); // Salva o índice ao entrar na visão
                            }
                        }, [inView, index]); // Executa o efeito quando inView ou index muda

                        return (
                            <motion.div
                                key={depoiment.name}
                                className="space-y-20 mb-[500px]" // Aumenta o espaçamento entre os depoimentos
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0.1 }}
                                transition={{ duration: 0.5 }} // Tempo maior para uma transição mais suave
                                ref={ref}
                            >
                                <motion.h2
                                    initial={{ color: "#2b2b2b" }}
                                    animate={{ color: inView ? "black" : "#2b2b2b" }} // Muda a cor dependendo da visualização
                                    transition={{ duration: 0.5 }} // Tempo maior para uma transição mais suave
                                    className="text-6xl font-normal"
                                >
                                    {depoiment.name}
                                </motion.h2>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Depoimento ativo */}
                {/* Div onde o depoimento vai aparecer */}
                <div className=" h-full">

                    <div className="sticky top-1/3">
                        <p className="pl-20 font-bold mb-5">{t("home.what_they_say_about_us")}</p>
                        <div className="flex text-black text-5xl ">
                            <div>
                                <img src={'/images/icons8-quote-left-96.png'} alt={depoiments[activeDepoiment].name} className="mr-20 " />
                            </div>
                            <motion.p
                                key={depoiments[activeDepoiment].name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mr-20"
                            >
                                {
                                    english ? depoiments[activeDepoiment].depoiment.en : depoiments[activeDepoiment].depoiment.pt
                                }
                            </motion.p>
                        </div>

                        <div className="text-[#555555] pl-20 mt-10">
                            <p className="font-bold text-lg uppercase">{depoiments[activeDepoiment].owner.name}</p>
                            <p className="font-bold">
                                {depoiments[activeDepoiment].name} - <span className="font-normal">{
                                    english ? depoiments[activeDepoiment].owner.role.en : depoiments[activeDepoiment].owner.role.pt
                                }</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
