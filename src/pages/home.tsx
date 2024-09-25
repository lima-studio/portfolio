import Header from "@/components/home/header";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";
import AboutSection from "../components/home/about-section";
import ProjectsSection from "../components/home/projects-section";
import SkillsSection from "../components/home/skills-section";
import { projects } from "../projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
