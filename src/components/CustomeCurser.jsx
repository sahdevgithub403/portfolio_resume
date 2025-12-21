/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) =>
      setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 bg-white mix-blend-difference rounded-full pointer-events-none z-50 hidden md:block"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
