import { IProjects } from "@/projects";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }: { project: IProjects }) {
  const { i18n } = useTranslation();
  const english = i18n.language === "en-US";

  return (
    <a
      className="rounded-3xl relative overflow-hidden uppercase group cursor-pointer w-full h-full"
      href={`/projects/${project.slug}`}
    >
      <img
        className="w-full h-full min-w-full min-h-full object-cover rounded-3xl"
        src={project.primary_image_url}
        alt={project.name}
      />

      {/* Informações que aparecem ao passar o mouse */}
      <div className="rounded-3xl absolute top-0 left-0 right-0 h-full flex justify-between bg-black bg-opacity-50 p-5 text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <h3>{project.name}</h3>
          <p className="font-light">
            {english ? project.category.en : project.category.pt}
          </p>
        </div>
      </div>
    </a>
  );
}
