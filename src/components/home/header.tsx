import BlurFade from "../magicui/blur-fade";
import { FadeText } from "../magicui/fade-text";
import TypingAnimation from "../magicui/typing-animation";



export default function Header() {
    return (
        <header className="min-h-[90vh] flex flex-col justify-center container px-5 mx-auto">
            <div className="space-y-5 mb-16">
                <BlurFade blur="10px" delay={0.2}>
                    <TypingAnimation
                        text="Criatividade, estratégia e paixão dão o sabor!"
                        duration={50}
                        className="uppercase text-sm font-normal text-start"
                    />
                </BlurFade>


                <div className="flex flex-col space-y-5">
                    <div className="max-w-7xl">
                        <FadeText
                            text="Design refrescante para pessoas e marcas empolgantes."
                            direction="up"
                            className="text-4xl md:text-5xl lg:text-7xl  xl:text-8xl font-extrabold uppercase  "
                        />
                    </div>


                    <FadeText
                        direction="up"
                        text="Construímos valor para pessoas e marcas através do design que refresca negócios empolgantes e impulsiona a inovação."
                        className="md:text-lg"
                    />
                </div>


            </div>

            <BlurFade className="flex space-x-4">
                <a
                    href="/projects"
                    className="text-black bg-primary px-6 py-3 hover:bg-primary/90 cursor-pointer rounded transition"
                >
                    Projetos
                </a>
                <a
                    className="text-white bg-secondary px-6 py-3 hover:bg-secondary/90 cursor-pointer rounded transition"
                    href="/contact"
                >
                    Orçamento +
                </a>
            </BlurFade>
        </header>

    );
}