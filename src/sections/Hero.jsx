// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-zinc-950 text-white px-6 md:px-12 flex flex-col justify-center overflow-hidden">
      {/* Name + Spline */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-[15vw] sm:text-[12vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase">
            SAHDEV <br />
            <span className="text-zinc-400">PURAN</span>
          </h1>
        </motion.div>

        {/* SPLINE */}
        <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative sr:w-302 w-105 h-235 sm:w-200 sm:h-125"
        >
          <Spline scene="https://prod.spline.design/1n0nVE776xzJgVuw/scene.splinecode" />
        </motion.div>

        </div>
      </div>

     
      {/* Bottom Info */}
      <div className="mt-16 border-t border-zinc-800 pt-8 text-zinc-400 flex justify-between text-sm">
        <div>
          Full Stack Developer
          <br />
          Based in India
        </div>
        <div className="text-white">Scroll to explore ↓</div>
      </div>

      {/* Glow */}
      <div className="absolute top-1/3 left-[-10%] w-[300px] h-[300px] bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px]" />
    </section>
  );
};

export default Hero;
