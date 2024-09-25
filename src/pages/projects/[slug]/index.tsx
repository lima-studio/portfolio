import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/navbar";
import ScrollDown from "@/components/projects/scroll-down";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/projects";
import { useParams } from "react-router-dom";

export default function WorkPage() {
    const params = useParams();
    const { slug } = params;
    const project = projects.find(project => project.slug === slug);

    if (!project) {
        return (
            <div>
                <h1>Projeto não encontrado</h1>
            </div>
        )
    }


    return (
        <div >
            <Navbar
                scrollNav={false}
                stickyNav={false}
            />
            <header className="min-h-screen relative"
                style={{
                    backgroundImage: `url("${project.primary_image_url}")`, // Adicione aspas ao redor da URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40">
                    <ScrollDown />

                </div>

                <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-black bg-opacity-25"></div>
            </header>

            <section className="container px-5 mx-auto py-16 flex flex-col  gap-12">
                <div className="space-y-5">
                    <BlurFade inView>
                        <h1 className="text-5xl md:text-8xl" >{project.name}</h1>
                    </BlurFade>
                    <BlurFade className="max-w-7xl" inView delay={0.2} >
                        <p className="text-lg md:text-3xl ">{project.about}</p>
                    </BlurFade>

                    <Separator className="bg-black" />

                </div>
                <div className="flex gap-5">
                    <BlurFade inView delay={0.4} >
                        <a
                            className="bg-primary px-6 py-3 text-white rounded-lg mt-5"
                            href={"#about"}
                        >
                            Ler mais
                        </a>
                    </BlurFade>

                    <BlurFade inView delay={0.8} >
                        <a
                            href={'/contact'}
                            className="bg-secondary px-6 py-3 text-white rounded-lg"
                        >
                            Iniciar Projeto
                        </a>

                    </BlurFade>
                </div>
            </section>

            <section className="container px-5 mx-auto mt-52">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
                    <BlurFade inView>
                        <div className="sticky top-20 self-start pb-16 space-y-4 font-mono">
                            <div className="space-y-5">
                                <div className="flex justify-between">
                                    <span>
                                        MARCA
                                    </span>

                                    <span>
                                        {project.brand}
                                    </span>
                                </div>

                                <Separator className="bg-black" />
                            </div>


                            <div className="space-y-5">
                                <div className="flex justify-between">
                                    <span>
                                        CATEGORIA
                                    </span>

                                    <span>
                                        {project.category}
                                    </span>
                                </div>

                                <Separator className="bg-black" />
                            </div>


                            <div className="space-y-5">
                                <div className="flex justify-between">
                                    <span>
                                        PAIS
                                    </span>

                                    <span>
                                        {project.country}
                                    </span>
                                </div>

                                <Separator className="bg-black" />
                            </div>


                            <div className="space-y-5">
                                <div className="flex justify-between">
                                    <span>
                                        ANO
                                    </span>

                                    <span>
                                        {project.year}
                                    </span>
                                </div>

                                <Separator className="bg-black" />
                            </div>

                        </div>
                    </BlurFade>

                    <div className="space-y-5">
                        <div>
                            <BlurFade inView>
                                <img src={project.primary_image_url} alt={project.name} className="w-full rounded-lg" />
                                <div className="py-24 px-10" id="about">
                                    <h2 className="text-3xl mb-5">Sobre</h2>
                                    <p className="text-lg">{project.about}</p>
                                </div>
                            </BlurFade>

                        </div>
                        {project.images.map((image, index) => {
                            const isVideo = image.endsWith('.mp4');
                            return (
                                <BlurFade inView key={image} delay={0.2}>
                                    {isVideo ? (
                                        <video
                                            src={image}
                                            className="w-full rounded"
                                            controls={false}
                                            autoPlay
                                            key={index}
                                        />
                                    ) : (
                                        <img
                                            src={image}
                                            className="w-full rounded"
                                            alt={project.name}
                                            key={index}
                                        />
                                    )}
                                </BlurFade>
                            );
                        })}

                    </div>
                </div>
            </section>
            <section className="container px-5 mx-auto mt-52 mb-52">
                <BlurFade inView className="mb-10">
                    <h2 className="text-3xl mb-5">Últimos projetos</h2>
                </BlurFade>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {projects.map((project, index) => (
                        <BlurFade inView key={index} delay={index * 0.2} >
                            <a
                                href={`/projects/${project.slug}`}
                                key={index} className="w-full h-64 group relative cursor-pointer">
                                <img
                                    src={project.primary_image_url}
                                    alt={project.name}
                                    className="rounded-lg w-full h-full object-cover"
                                />

                                <div className="absolute top-0 left-0 right-0  w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg" />
                            </a>
                        </BlurFade>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}