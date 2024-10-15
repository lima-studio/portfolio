import { depoiments } from "@/depoiments";
import { motion, useInView } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Props {
    activeDepoiment: number,
    setActiveDepoiment: Dispatch<SetStateAction<number>>
}
// Componente específico para mobile
export const MobileDepoiments = () => {
    const { t, i18n } = useTranslation();
    const english = i18n.language === 'en-US';

    return (
        <section className="px-4 py-8">
            <div className="bg-[#cdcdcd] grid grid-cols-1 gap-6 px-4 py-6 rounded-lg">
                <div>
                    {depoiments.map((depoiment, _) => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: false, margin: "0% 0px 0% 0px", });

                        return (
                            <motion.div
                                key={depoiment.name}
                                className="space-y-5 mb-[100px]" // Menor espaço para mobile
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0.1 }}
                                transition={{ duration: 0.5 }}
                                ref={ref}
                            >
                                <motion.h2
                                    initial={{ color: "#2b2b2b" }}
                                    animate={{ color: inView ? "black" : "#2b2b2b" }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl font-normal"
                                >
                                    {depoiment.name}
                                </motion.h2>

                                <div className="h-full">
                                    <p className="font-medium mb-4 text-sm">{t("home.what_they_say_about_us")}</p>
                                    <div className=" text-black text-3xl">

                                        <motion.p
                                            key={depoiment.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {
                                                english
                                                    ? depoiment.depoiment.en
                                                    : depoiment.depoiment.pt
                                            }
                                        </motion.p>
                                    </div>

                                    <div className="text-[#555555]  mt-6">
                                        <p className="font-semibold text-base uppercase">{depoiment.owner.name}</p>
                                        <p className="font-semibold text-sm">
                                            {depoiment.name} - <span className="font-normal">
                                                {english ? depoiment.owner.role.en : depoiment.owner.role.pt}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// Componente específico para desktop
export const DesktopDepoiments = ({ activeDepoiment, setActiveDepoiment }: Props) => {
    const { t, i18n } = useTranslation();
    const english = i18n.language === 'en-US';

    return (
        <section className="px-6 py-10">
            <div className="bg-[#cdcdcd] grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-8 rounded-lg ">
                <div>
                    {depoiments.map((depoiment, index) => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px", });

                        useEffect(() => {
                            if (inView) {
                                setActiveDepoiment(index);
                            }
                        }, [inView, index]);

                        return (
                            <motion.div
                                key={depoiment.name}
                                className="space-y-20 mb-[500px]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: inView ? 1 : 0.1 }}
                                transition={{ duration: 0.5 }}
                                ref={ref}
                            >
                                <motion.h2
                                    initial={{ color: "#2b2b2b" }}
                                    animate={{ color: inView ? "black" : "#2b2b2b" }}
                                    transition={{ duration: 0.5 }}
                                    className="text-6xl font-normal"
                                >
                                    {depoiment.name}
                                </motion.h2>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="h-full">
                    <div className="sticky top-1/3">
                        <p className="pl-20 font-medium mb-5">{t("home.what_they_say_about_us")}</p>
                        <div className="flex text-black text-5xl ">
                            <div>
                                <img
                                    src={'/images/icons8-quote-left-96.png'}
                                    alt={depoiments[activeDepoiment].name}
                                    className="mr-20 h-12"
                                />
                            </div>
                            <motion.p
                                key={depoiments[activeDepoiment].name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mr-20"
                            >
                                {
                                    english
                                        ? depoiments[activeDepoiment].depoiment.en
                                        : depoiments[activeDepoiment].depoiment.pt
                                }
                            </motion.p>
                        </div>

                        <div className="text-[#555555] pl-20 mt-10">
                            <p className="font-semibold text-xl uppercase">{depoiments[activeDepoiment].owner.name}</p>
                            <p className="font-semibold text-lg">
                                {depoiments[activeDepoiment].name} - <span className="font-normal">
                                    {english ? depoiments[activeDepoiment].owner.role.en : depoiments[activeDepoiment].owner.role.pt}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
