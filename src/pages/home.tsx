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
    <div style={{ maxWidth: "120rem" }}>
      <Navbar />
      <Header />
      <WhoSection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <DepoimentsSection />
      <PartnersSection />
      <div className="h-[70em] md:h-[60em] lg:h-[45rem] flex justify-center items-center">
        <div>
          <img
            className="w-full h-full "
            src="/logos/logo_ida_volta.gif"
            alt="logo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
