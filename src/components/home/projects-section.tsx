import { IProjects } from "@/projects";
import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";
import ProjectCard from "../projects/project-card";

function ProjectsSection({ projects }: { projects: IProjects[] }) {
    const projectsData = projects.filter(project => project.homepage);
    const {
        t
    } = useTranslation()

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

            <BlurFade inView className="w-1/2 flex justify-end">
                <span className="text-xl md:text-3xl ">
                    {t('home.and_stop_here')}
                </span>
            </BlurFade>
        </section >
    )
}

export default ProjectsSection;
