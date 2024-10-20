import { DepoimentsSection } from "@/components/home/depoiments-section";
import Header from "@/components/home/header";
import { PartnersSection } from "@/components/home/partners-section";
import Navbar from "@/components/navbar";
import { WhoSection } from "@/components/who-section";
import Footer from "../components/footer";
import ProjectsSection from "../components/home/projects-section";
import SkillsSection from "../components/home/skills-section";
import { projects } from "../projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhoSection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <DepoimentsSection />
      <PartnersSection />
      <div className="h-[500px] flex justify-center items-center mb-20 md:mb-32">
        <div className="w-[150px] h-[250px]">
          <img
            className="w-full h-full "
            src="/logos/Ativo 8.png"
            alt="logo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
