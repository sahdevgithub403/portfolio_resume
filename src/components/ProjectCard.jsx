// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"],
  });

  // Scroll-based animations
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.article
      ref={ref}
      style={{ scale, opacity, y }}
      className="relative sticky top-23 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {project.title}
            </h3>

            <p className="text-zinc-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-xs sm:text-sm rounded-full border border-zinc-700/70 text-zinc-300 bg-zinc-900/60 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex gap-8 mt-12">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-white text-sm font-medium"
            >
              <Github size={18} />
              <span className="relative">
                Code
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
              </span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-white text-sm font-medium"
            >
              <ArrowUpRight size={18} />
              <span className="relative">
                Live
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden group min-h-[260px] sm:min-h-[340px]"
        >
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
