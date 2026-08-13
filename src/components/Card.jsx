import { motion } from "framer-motion";

export default function Card({ className = "", hoverScale, children }) {
  const classes = `bg-gray-800 p-6 rounded-2xl shadow-lg ${className}`.trim();

  if (hoverScale === undefined) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <motion.div className={classes} whileHover={{ scale: hoverScale }}>
      {children}
    </motion.div>
  );
}
