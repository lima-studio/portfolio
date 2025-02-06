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
      <div className="h-[50em] flex justify-center items-center">
        <div>
          <img
            className="w-[900px] h-[500px] "
            src="/logos/logo_ida_volta.gif"
            alt="logo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
