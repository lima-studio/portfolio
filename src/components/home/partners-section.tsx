import BlurFade from "../magicui/blur-fade";

export function PartnersSection() {
    return (
        <div className="px-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 my-40">
                <div className="flex  flex-col ">
                    <div className="space-y-5 mb-16">
                        <BlurFade inView>
                            <h1 className="uppercase font-thin">Partners</h1>
                        </BlurFade>

                        <BlurFade inView delay={0.2}>
                            <p className="md:text-6xl font-medium">
                                <span className="opacity-30">And I'm not alone!</span>
                                <br />
                                I rely on support professionals for specific deliverables.
                            </p>
                        </BlurFade>

                        <BlurFade inView delay={0.2} className="max-w-xl ">
                            <p className="md:text-md font-bold opacity-80">
                                Modular teams are formed to meet specific demands in projects and adjacent solutions.
                            </p>
                        </BlurFade>
                    </div>

                    <BlurFade inView delay={0.2}>
                        <a
                            className="bg-black px-10 py-4 text-white rounded-lg font-bold"
                            href="/contact"
                        >
                            Request a Quote
                        </a>
                    </BlurFade>
                </div>
            </div>


            <div className="h-[500px] flex justify-center">
                <div className="w-[150px] h-[250px]">
                    <img
                        className="w-full h-full "
                        src="/logos/Ativo 8.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}