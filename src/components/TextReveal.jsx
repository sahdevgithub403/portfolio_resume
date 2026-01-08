// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TextReveal = ({ text, delay = 0 }) => {
  return (
    <div className="overflow-hidden">
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.03 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextReveal;
