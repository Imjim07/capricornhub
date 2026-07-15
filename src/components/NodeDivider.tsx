"use client";
import { motion } from "framer-motion";

export default function NodeDivider() {
  return (
    <div className="node-divider" aria-hidden="true">
      <motion.span
        className="nd-line"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <motion.span
        className="nd-dot"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.25, backgroundColor: "#f59e0b" }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.45, type: "spring", stiffness: 200, damping: 12 }}
      />
    </div>
  );
}