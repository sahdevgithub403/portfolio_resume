/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="relative sticky top-24 mb-24 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Content */}
        <div className="p-10 md:p-16 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h3>

            <p className="text-zinc-400 text-lg mb-8 max-w-md">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm rounded-full border border-zinc-700 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 mt-10">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white border-b border-white pb-1 hover:text-blue-500 hover:border-blue-500 transition"
            >
              <Github size={20} />
              Code
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white border-b border-white pb-1 hover:text-blue-500 hover:border-blue-500 transition"
            >
              <ArrowUpRight size={20} />
              Live
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden group">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
