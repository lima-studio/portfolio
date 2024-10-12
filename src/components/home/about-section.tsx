import BlurFade from "../magicui/blur-fade"


function AboutSection() {
    return (
        <section className="px-5 h-[500px] flex items-center py-10" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 ">
                <div className="flex gap-20">
                    <BlurFade inView>
                        <h1 className="uppercase font-thin mt-5">Skills</h1>
                    </BlurFade>

                    <BlurFade inView delay={0.2}>
                        <p className="md:text-3xl">Potencializo o processo de inovação de meu parceiros. Construímos estratégias, marcas e multimídia que criam valor significativo para as pessoas e evolução para os negócios.</p>
                    </BlurFade>
                </div>

                <div>
                    <div>
                        <p className="text-8xl text-secondary font-extralight">Estratégia</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection