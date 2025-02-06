import { IProjects } from "@/projects";
import { useTranslation } from "react-i18next";
import BlurFade from "../magicui/blur-fade";
import ProjectCard from "../projects/project-card";
import { InteractiveHoverButton } from "../interactive-hover-button";
import { ChevronRight } from "lucide-react";

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
            className="h-[50rem]"
          >
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>

      <div>
        <InteractiveHoverButton
          colors={{
            primary: "gray-300",
            hover: "white/50",
          }}
          width="w-full"
          icon={<ChevronRight
            size={18}
          />}
        >
          {t("home.see_more")}
        </InteractiveHoverButton>
      </div>
    </section>
  );
}

export default ProjectsSection;
