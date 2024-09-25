import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project-card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/projects";


export default function ProjectsPage() {
    return (
        <div>
            <Navbar />
            <div className="container px-5 mx-auto mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-32 ">
                    <BlurFade inView>
                        <h1 className="text-3xl font-semibold" >
                            Meus projetos
                        </h1>
                    </BlurFade>
                    <BlurFade inView className="space-y-10">
                        <div>
                            <p className="text-lg md:text-3xl" >
                                Descubra meus projetos mais impactantes, onde a criatividade e a qualidade se destacam. Veja como cada detalhe transforma ideias em visuais marcantes, trazendo inovação e excelência a cada trabalho.
                            </p>
                        </div>

                        <div>
                            <a
                                className="bg-secondary px-6 py-3 text-white rounded-lg mt-5"
                                href="/contact"
                            >
                                Orçamento +
                            </a>
                        </div>
                    </BlurFade>
                </div>

                <BlurFade delay={0.2} inView>
                    <Separator className="bg-gray-300" />
                </BlurFade>

                <div className="space-y-5 py-16">
                    <BlurFade inView >
                        <h2 className="font-mono">Identidade visual de marcas</h2>
                    </BlurFade>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {projects.map((project, index) => (
                            <BlurFade key={index} inView className="h-[450px]">
                                <ProjectCard
                                    key={index}
                                    project={project}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    )
}