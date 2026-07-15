"use client";
import { motion } from "framer-motion";

export default function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}