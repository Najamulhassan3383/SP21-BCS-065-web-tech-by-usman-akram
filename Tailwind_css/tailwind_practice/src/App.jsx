import ProjectsMain from "./projects/ProjectsMain";
import Hero from "./projects/LoopStudios/Hero";
import Features from "./projects/LoopStudios/Features";
import Creations from "./projects/LoopStudios/Creations";

export default function App() {
  return (
    <div className="LoopStudios">
      <Hero />
      <Features />
      <Creations />
    </div>
  );
}
