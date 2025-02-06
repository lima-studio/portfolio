import Footer from "@/components/footer";
import { InteractiveHoverButton } from "@/components/interactive-hover-button";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project-card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/projects";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="px-5 mb-20  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-32  h-[500px]  items-start ">
          <BlurFade inView>
            <h1 className="text-3xl font-semibold mt-40 ">{t("projects.title")}</h1>
          </BlurFade>
          <BlurFade inView className="space-y-10 mt-40">
            <div>
              <p className="text-lg md:text-3xl">{t("projects.description")}</p>
            </div>

            <div>
              <InteractiveHoverButton
                colors={{
                  primary: "secondary",
                  hover: "primary",
                }}
                icon={<Plus
                  size={18}
                />}
                onClick={() => window.open("/contact", "_blank")}>
                {t("projects.button")}
              </InteractiveHoverButton>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} inView>
          <Separator className="bg-gray-300" />
        </BlurFade>

        <div className="space-y-5 py-16">
          <BlurFade inView>
            <h2 className="font-normal text-lg">
              {t("projects.visual_identity")}
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <BlurFade key={index} inView className="h-[450px]">
                <ProjectCard key={index} project={project} />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
