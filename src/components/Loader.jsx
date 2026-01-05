import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ visible = false }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: 0, opacity: 0.6 }}
            exit={{ scale: 0.8, opacity: 0.6 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="text-white font-semibold"
            >
              Loading...
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
