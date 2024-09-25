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
            name: "Direção de arte",
            description: "Criamos conteúdo multimídia que vai além do comum, proporcionando experiências visuais e interativas para conectar emocionalmente as marcas aos seus clientes."
        },
        {
            id: "05",
            name: "Serviços personalizados",
            description: "Cada marca é única, e seus serviços também podem ser. Entre em contato, e criaremos um pacote de design personalizado sob medida para atender às suas necessidades específicas."
        }
    ]
    return (
        <section className="container px-5 mx-auto flex items-center py-10 relative" id="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 ">
                <div>
                    <h1 className="uppercase mb-5">Habilidades</h1>

                    <BlurFade inView delay={0.2} className="max-w-[500px]">
                        <p className="md:text-2xl">
                            Acreditamos no design como uma poderosa forma de criar valor para as pessoas e para os negócios.
                        </p>
                    </BlurFade>
                </div>

                <div className="space-y-5">
                    {skills.map((skill, index) => (
                        <BlurFade
                            key={skill.id}
                            className="flex gap-5"
                            inView
                            delay={index * 0.1}
                        >
                            <div>
                                <h1 className="uppercase text-secondary font-bold ">{skill.id}</h1>
                            </div>
                            <div>
                                <h1 className="uppercase text-secondary font-bold mb-5 ">{skill.name}</h1>
                                <p>{skill.description}</p>
                            </div>
                        </BlurFade>
                    ))}
                    <BlurFade inView>
                        <a href={"/contact"} className="text-secondary underline-offset-2 underline uppercase text-sm font-bold px-10">
                            Solicite orçamento
                        </a>
                    </BlurFade>


                </div>
            </div>
        </section>
    )
}

export default SkillsSection