"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <div className="relative">
            {/* Ethiopian Flag Spinner */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-24 h-24"
            >
              {/* Rotating circles with Ethiopian colors */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--ethiopian-green)] shadow-lg shadow-[var(--ethiopian-green)]/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--ethiopian-red)] shadow-lg shadow-[var(--ethiopian-red)]/50" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--ethiopian-yellow)] shadow-lg shadow-[var(--ethiopian-yellow)]/50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--ethiopian-yellow)] shadow-lg shadow-[var(--ethiopian-yellow)]/50" />
              </motion.div>

              {/* Center pulse */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-white"
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-white text-sm font-medium text-center"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
