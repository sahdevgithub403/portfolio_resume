import { Layout, Server, Database, Code2 } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 bg-zinc-950 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight sticky top-32">
            I build digital experiences that are{" "}
            <span className="text-blue-500">fast</span>,{" "}
            <span className="text-purple-500">scalable</span>, and{" "}
            <span className="text-white">visually stunning</span>.
          </h2>
        </div>

        {/* Right Side */}
        <div className="space-y-12 text-zinc-400 text-lg md:text-xl leading-relaxed">
          <p>
            I’m a Full Stack Developer focused on building reliable, scalable
            applications using Java Spring Boot and React. I care deeply about
            clean architecture and performance.
          </p>

          <p>
            Currently pursuing my B.Tech in Computer Science, I enjoy working
            across the stack — from backend APIs to polished frontend
            interfaces.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="border-l border-zinc-700 pl-6 hover:pl-8 transition-all duration-300">
              <div className="mb-2 text-white">
                <Layout />
              </div>
              <h3 className="text-white font-bold text-xl">Frontend</h3>
              <p className="text-sm mt-1">
                React, Tailwind CSS, Framer Motion
              </p>
            </div>

            <div className="border-l border-zinc-700 pl-6 hover:pl-8 transition-all duration-300">
              <div className="mb-2 text-white">
                <Server />
              </div>
              <h3 className="text-white font-bold text-xl">Backend</h3>
              <p className="text-sm mt-1">
                Java, Spring Boot, Node.js
              </p>
            </div>

            <div className="border-l border-zinc-700 pl-6 hover:pl-8 transition-all duration-300">
              <div className="mb-2 text-white">
                <Database />
              </div>
              <h3 className="text-white font-bold text-xl">Database</h3>
              <p className="text-sm mt-1">
                MySQL, MongoDB, PostgreSQL
              </p>
            </div>

            <div className="border-l border-zinc-700 pl-6 hover:pl-8 transition-all duration-300">
              <div className="mb-2 text-white">
                <Code2 />
              </div>
              <h3 className="text-white font-bold text-xl">DevOps</h3>
              <p className="text-sm mt-1">
                Docker, Jenkins, AWS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
