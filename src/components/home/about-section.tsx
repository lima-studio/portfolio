import BlurFade from "../magicui/blur-fade"


function AboutSection() {
    return (
        <section className="container px-5 mx-auto h-[500px] flex items-center py-10" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 ">
                <div>
                    <h1 className="uppercase mb-5">Quem</h1>
                    <BlurFade className="space-y-5 flex md:space-x-5 flex-col md:flex-row" inView>
                        <img
                            src="/images/luiz-image.png"
                            alt="Luiz"
                            className="w-[200px] h-[200px] object-cover rounded-lg "
                        />

                        <div>
                            <p className="text-4xl lg:text-5xl mb-2">Luiz Lima, <br></br>muito prazer!</p>
                            <p className="uppercase font-bold">Designer freelancer</p>
                        </div>
                    </BlurFade>
                </div>

                <BlurFade inView delay={0.2}>
                    <p className="md:text-2xl">Potencializo o processo de inovação de meu parceiros. Construímos estratégias, marcas e multimídia que criam valor significativo para as pessoas e evolução para os negócios.</p>
                </BlurFade>
            </div>
        </section>
    )
}

export default AboutSection