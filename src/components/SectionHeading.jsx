import { motion } from "framer-motion";

export default function SectionHeading({ children, className = "text-center mb-12" }) {
  return (
    <motion.h2
      className={`text-4xl font-bold text-cyan-400 ${className}`.trim()}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.h2>
  );
}
