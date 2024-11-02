import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projects/project-card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/projects";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="mx-[5%] mb-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-32 ">
          <BlurFade inView>
            <h1 className="text-3xl font-semibold">{t("projects.title")}</h1>
          </BlurFade>
          <BlurFade inView className="space-y-10">
            <div>
              <p className="text-lg md:text-3xl">{t("projects.description")}</p>
            </div>

            <div>
              <a
                className="bg-secondary px-6 text-white rounded-lg mt-5 min-w-16 w-[250px] text-center py-4"
                href="/contact"
              >
                {t("projects.button")} +
              </a>
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
