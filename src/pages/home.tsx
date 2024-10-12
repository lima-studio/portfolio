import { DepoimentsSection } from "@/components/home/depoiments-section";
import Header from "@/components/home/header";
import { PartnersSection } from "@/components/home/partners-section";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";
import ProjectsSection from "../components/home/projects-section";
import SkillsSection from "../components/home/skills-section";
import { projects } from "../projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <DepoimentsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
