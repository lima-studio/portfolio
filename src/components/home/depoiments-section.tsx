import { depoiments } from "@/depoiments";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface IDepoiments {
    name: string;
    depoiment: string;
}

export const DepoimentsSection = () => {
    const [activeDepoiment, setActiveDepoiment] = useState(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const inView = useInView(sectionRef, {
        margin: "-50% 0px -50% 0px",
    });


    const handleScroll = (event: WheelEvent) => {

        const delta = Math.sign(event.deltaY);

        setActiveDepoiment((prevIndex) => {
            const lastIndex = depoiments.length - 1;

            if (delta > 0) {
                const index = prevIndex < depoiments.length - 1 ? prevIndex + 1 : prevIndex

                if (index === lastIndex) document.body.style.overflow = "auto";
                if(index !== lastIndex) document.body.style.overflow = "hidden";


                return index;
            } else {
                const index = prevIndex > 0 ? prevIndex - 1 : prevIndex

                if (index === 0) document.body.style.overflow = "auto";
                if(index !== 0) document.body.style.overflow = "hidden";

                return index;
            }
        });

    };

    useEffect(() => {
        if (inView) {
            window.addEventListener("wheel", handleScroll, { passive: true });

            document.body.style.overflow = "hidden";

            return () => {
                window.removeEventListener("wheel", handleScroll);
            };
        } else {
            document.body.style.overflow = "auto";
        }
    }, [inView]);

    return (
        <section className="px-6 py-10" >
            <div className="bg-black grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-8 rounded-lg  items-center">
                <div ref={sectionRef}>
                    {depoiments.map((depoiment, index) => {
                        const titleRef = useRef(null);
                        const isInView = useInView(titleRef, { margin: "0px 0px 0% 0px" });

                        return (
                            <motion.div
                                key={depoiment.name}
                                className="space-y-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeDepoiment === index ? 1 : 0.1 }}
                                transition={{ duration: 0.25 }}
                            >
                                <motion.h2
                                    ref={titleRef}
                                    initial={{ color: "#2b2b2b" }} // Inicialmente cinza escuro
                                    animate={isInView ? { color: "#fff" } : {}} // Mudar para branco se estiver visível
                                    transition={{ duration: 0.25 }}
                                    className={`text-5xl font-normal`}
                                >
                                    {depoiment.name}
                                </motion.h2>
                            </motion.div>
                        );
                    })}
                </div>
                {/* Div onde o depoimento vai aparecer */}
                <div className="text-white text-5xl flex">
                    <div>
                        <img src={'/images/icons8-quote-left-96.png'} alt={depoiments[activeDepoiment].name} className="mr-20 opacity-10" />
                    </div>
                    <motion.p
                        key={depoiments[activeDepoiment].name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mr-20"
                    >
                        {depoiments[activeDepoiment].depoiment}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
