import { IProjects } from "@/projects";
import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";
import ProjectCard from "../projects/project-card";

function ProjectsSection({ projects }: { projects: IProjects[] }) {
  const projectsData = projects.filter((project) => project.homepage);
  const { t } = useTranslation();

  return (
    <section id="projects" className="space-y-5 px-5 mb-20 md:mb-32 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project, index) => (
          <BlurFade
            key={index}
            delay={index * 0.2}
            inView
            className="h-[700px]"
          >
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        <BlurFade inView className="flex justify-end">
          <span className="text-xl md:text-3xl ">
            {t("home.and_stop_here")}
          </span>
        </BlurFade>
        <a href="/projects">
          <BlurFade
            inView
            className="text-black font-medium text-base bg-gray-300 rounded text-center flex justify-center items-center h-12"
          >
            {t("home.see_more")}
          </BlurFade>
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;
