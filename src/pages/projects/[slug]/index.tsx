import Footer from "@/components/footer";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/navbar";
import ScrollDown from "@/components/projects/scroll-down";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/projects";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function WorkPage() {
  const params = useParams();
  const { slug } = params;
  const project = projects.find((project) => project.slug === slug);
  const { t, i18n } = useTranslation();

  if (!project) {
    return (
      <div>
        <h1>Projeto não encontrado</h1>
      </div>
    );
  }

  const english = i18n.language === "en-US";

  return (
    <div>
      <Navbar />
      <header
        className="h-[500px] lg:min-h-screen relative"
        style={{
          backgroundImage: `url("${project.primary_image_url}")`, // Adicione aspas ao redor da URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40">
          <ScrollDown />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-black bg-opacity-25"></div>
      </header>

      <section className="px-5 py-16 flex flex-col gap-12">
        <div className="space-y-5">
          <BlurFade inView>
            <h1 className="text-5xl md:text-8xl">{project.name}</h1>
          </BlurFade>
          <BlurFade className="max-w-7xl" inView delay={0.2}>
            <p className="text-lg md:text-3xl ">
              {english ? project.description.en : project.description.pt}
            </p>
          </BlurFade>

          <Separator className="bg-black" />
        </div>
        <div className="flex gap-5">
          <BlurFade inView delay={0.4}>
            <a
              className="bg-primary px-6 text-white rounded-lg mt-5 min-w-16 w-[250px] text-center py-4"
              href={"#about"}
            >
              {t("projects_details.buttons.read_more")}
            </a>
          </BlurFade>

          <BlurFade inView delay={0.8}>
            <a
              href={"/contact"}
              className="bg-secondary px-6 text-white rounded-lg min-w-16 w-[250px] text-center py-4"
            >
              {t("projects_details.buttons.start_project")}
            </a>
          </BlurFade>
        </div>
      </section>

      <section className="px-5 lg:mt-52">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <BlurFade inView>
            <div className="sticky top-20 self-start pb-16 space-y-4 font-normal">
              <div className="space-y-5 max-w-[95%]">
                <div className="flex justify-between">
                  <span>{t("projects_details.brand")}</span>
                  <span>{project.brand}</span>
                </div>
                <Separator className="bg-black" />
              </div>

              <div className="space-y-5 max-w-[95%]">
                <div className="flex justify-between">
                  <span>{t("projects_details.category")}</span>
                  <span>
                    {english ? project.category.en : project.category.pt}
                  </span>
                </div>
                <Separator className="bg-black" />
              </div>

              <div className="space-y-5 max-w-[95%]">
                <div className="flex justify-between">
                  <span>{t("projects_details.country")}</span>
                  <span>
                    {english ? project.country.en : project.country.pt}
                  </span>
                </div>

                <Separator className="bg-black" />
              </div>
            </div>
          </BlurFade>

          <div className="space-y-5">
            <div>
              <BlurFade inView>
                <img
                  src={project.primary_image_url}
                  alt={project.name}
                  className="w-full rounded-lg"
                />
                <div className="lg:py-24 lg:px-10 mt-10 lg:mt-0" id="about">
                  <h2 className="text-4xl mb-5">
                    {t("projects_details.about")}
                  </h2>
                  <p className="lg:text-3xl opacity-50">
                    {english ? project.about.en : project.about.pt}
                  </p>
                </div>
              </BlurFade>
            </div>
            <div className="flex flex-col gap-5">
              {project.images.map((image, index) => {
                const isVideo = image.endsWith(".mp4");
                return (
                  <BlurFade
                    inView
                    key={image}
                    delay={0.3}
                    className="w-full h-full"
                  >
                    {isVideo ? (
                      <video
                        src={image}
                        className="w-full rounded-2xl object-cover h-[600px]"
                        controls={false}
                        autoPlay
                        key={index}
                      />
                    ) : (
                      <img
                        src={image}
                        className="w-full rounded-2xl object-cover"
                        alt={project.name}
                        key={index}
                      />
                    )}
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 mt-10 lg:mt-52 lg:mb-52 mb-10">
        <BlurFade inView className="mb-10">
          <h2 className="text-4xl mb-5">
            {t("projects_details.latest_project")}
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <BlurFade inView key={index} delay={index * 0.1}>
              <a
                href={`/projects/${project.slug}`}
                key={index}
                className="w-full  group relative cursor-pointer"
              >
                <img
                  src={project.primary_image_url}
                  alt={project.name}
                  className="rounded-lg w-full lg:h-[400px] object-cover"
                />

                <div className="absolute top-0 left-0 right-0  w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg" />
              </a>
            </BlurFade>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
