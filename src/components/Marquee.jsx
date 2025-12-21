/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Marquee = ({ text, repeat = 4 }) => {
  return (
    <div className="relative flex overflow-hidden bg-white text-black py-4 border-y border-black">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {[...Array(repeat)].map((_, i) => (
          <span
            key={i}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mx-8"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
