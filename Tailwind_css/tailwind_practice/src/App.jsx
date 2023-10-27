import ProjectsMain from "./projects/ProjectsMain";
import Hero from "./projects/LoopStudios/Hero";
import Features from "./projects/LoopStudios/Features";
import Creations from "./projects/LoopStudios/Creations";
import Footer from "./projects/LoopStudios/Footer";

export default function App() {
  return (
    <div className="LoopStudios">
      <Hero />
      <Features />
      <Creations />
      <Footer />
    </div>
  );
}
