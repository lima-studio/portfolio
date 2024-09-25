import { IProjects } from "@/projects";
import BlurFade from "../magicui/blur-fade";
import ProjectCard from "../projects/project-card";

function ProjectsSection({ projects }: { projects: IProjects[] }) {
    const projectsData = projects.filter(project => project.homepage);

    return (
        <section id="projects" className="space-y-5 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projectsData.map((project, index) => (
                    <BlurFade
                        key={index}
                        delay={index * 0.2}
                        inView
                        className="h-[650px]"
                    >
                        <ProjectCard project={project} />
                    </BlurFade>
                ))}
            </div>

            <BlurFade inView className="flex justify-between">
                <span className="text-xl md:text-3xl font-medium">
                    E não para por aqui!
                </span>

                <a
                    className="text-black max-w-[150px] w-full h-[50px] border-black border rounded text-center flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                    href="/projects"
                >
                    Ver mais
                </a>

            </BlurFade>
        </section >
    )
}

export default ProjectsSection;
