import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="work" className="bg-zinc-950 px-6 md:px-12 py-32">
      <h2 className="text-white text-[5vw] font-black mb-20">
        Selected Works
      </h2>

      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} index={i} />
      ))}
    </section>
  );
};

export default Projects;
