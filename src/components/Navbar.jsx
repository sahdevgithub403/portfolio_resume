/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center z-50 mix-blend-difference text-white"
    >
      <span className="font-black text-2xl tracking-tighter">SP.</span>

      <div className="hidden md:flex gap-8 font-medium text-sm">
        <a href="#work" className="hover:underline">WORK</a>
        <a href="#about" className="hover:underline">ABOUT</a>
        <a href="#contact" className="hover:underline">CONTACT</a>
      </div>

      <a
        href="mailto:sahdevpuran192@gmail.com"
        className="bg-white text-black px-4 py-2 rounded-full font-bold text-xs hover:scale-110 transition-transform"
      >
        HIRE ME
      </a>
    </motion.nav>
  );
};

export default Navbar;
