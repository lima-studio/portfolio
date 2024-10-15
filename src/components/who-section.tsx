import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

function WhoSection() {
    const { i18n } = useTranslation();
    const english = i18n.language === 'en-US';

    const elements = [
        {
            id: 0,
            backgroundStyle: {
                backgroundImage: `url("/images/who-background-lim.png")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "#ffd622",
                backgroundPosition: "center left",
                backgroundAttachment: "local",
                transform: "scaleX(-1)",
            },
            who_color: "text-[#8b6e00]",
            span_title: {
                en: "Hello, I'm Lim.",
                pt: "Olá, eu sou o Lim.",
                color: "text-[#8b6e00]"
            },
            title: {
                en: "Mascot and symbol of Lima Stdio.",
                pt: "Mascote e símbolo do Lima Studio.",
                color: "text-secondary",
                max_width: "max-w-xl"
            },
            represent: {
                en: "I represent the personality and carry the last name of my creator.",
                pt: "Eu represento a personalidade e carrego o sobrenome do meu criador.",
                color: "text-[#8b6e00]",
                max_width: "max-w-sm"
            },
            button: {
                en: "Threads",
                pt: "Tópicos"
            },
        },
        {
            id: 1,
            backgroundStyle: {
                backgroundImage: `url("/images/LuizLima_02.png")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
            who_color: "text-black",
            span_title: {
                en: "Hello, my name is Luiz Lima,",
                pt: "Olá, meu nome é Luiz Lima,",
                color: "text-white"
            },
            title: {
                en: "Graphic Designer and Art Director.",
                pt: "Designer gráfico e Diretor de arte",
                color: "text-black",
                max_width: "max-w-3xl"
            },
            represent: {
                en: "I enhance the innovation process of my partners. We build strategies, brands, and multimedia that create meaningful value for people and drive business growth.",
                pt: "Aprimoro o processo de inovação dos meus parceiros. Construímos estratégias, marcas e multimídia que criam valor significativo para as pessoas e impulsionam o crescimento dos negócios.",
                color: "text-[#555555]",
                max_width: "max-w-2xl"
            },
            button: {
                en: "Linkedin",
                pt: "Tópicos"
            },
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Alternar o elemento a cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
        }, 5000); // 5000 ms = 5 segundos

        return () => clearInterval(interval); // Limpeza do intervalo
    }, []);

    const selectedElement = elements[currentIndex];

    return (
        <section id="who">
            <motion.div
                className="mx-5 rounded-3xl mb-32 min-h-[450px]"
                style={selectedElement.backgroundStyle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }} // Ajuste a duração conforme necessário

            >
                <div
                    className="px-5 py-10 flex flex-col justify-center h-full gap-5"
                    style={{
                        transform: selectedElement.backgroundStyle.transform
                    }}
                >
                    <motion.span
                        className={`text-sm ${selectedElement.who_color} font-semibold`}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {english ? "WHO" : "QUEM"}
                    </motion.span>
                    <motion.h1
                        className={`${selectedElement.title.color} text-6xl font-medium ${selectedElement.title.max_width}`}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className={`${selectedElement.span_title.color}`}>
                            {english ? selectedElement.span_title.en : selectedElement.span_title.pt}
                        </span>
                        <br />
                        {english ? selectedElement.title.en : selectedElement.title.pt}
                    </motion.h1>
                    <motion.p
                        className={`max-w-xl text-lg font-semibold ${selectedElement.represent.color} ${selectedElement.represent.max_width}`}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {english ? selectedElement.represent.en : selectedElement.represent.pt}
                    </motion.p>
                    <Button
                        className="bg-white text-black font-medium w-32 h-12 hover:opacity-90 hover:bg-white text-md"
                    >
                        {english ? selectedElement.button.en : selectedElement.button.pt}
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}

export { WhoSection };
