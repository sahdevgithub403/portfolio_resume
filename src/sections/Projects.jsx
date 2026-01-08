import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import TextReveal from "../components/TextReveal";

const Projects = () => {
  return (
    <section
      id="work"
      className="bg-zinc-950 px-6 md:px-12 py-32 text-white"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          
          {/* Title */}
          <h2 className="text-[14vw] md:text-[6rem] leading-[0.9] font-black tracking-tighter">
            <TextReveal text="Selected  Works" />
          </h2>

          {/* Subtitle */}
          <p className="max-w-sm text-zinc-500 font-mono text-sm text-left md:text-right">
            A collection of technical projects focusing on scalability,
            security, and performance.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-4" />

        {/* Projects */}
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
