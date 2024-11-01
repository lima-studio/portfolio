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
      <div className="h-[70em] md:h-[60em] lg:h-[40em] flex justify-center items-center">
        <div className="w-[200px] h-[350px]">
          <img className="w-full h-full " src="/logos/Ativo 8.png" alt="logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
