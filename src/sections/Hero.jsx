/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen bg-zinc-950 text-white px-6 md:px-12 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[14vw] leading-[0.8] font-black uppercase">
          Sahdev <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-500">
            Puran
          </span>
        </h1>
      </motion.div>

      <div className="flex justify-between mt-12 border-t border-zinc-800 pt-6 text-zinc-400">
        <p>FULL STACK DEVELOPER<br />INDIA</p>
        <p className="text-white font-bold">SCROLL TO EXPLORE</p>
      </div>
    </section>
  );
};

export default Hero;
