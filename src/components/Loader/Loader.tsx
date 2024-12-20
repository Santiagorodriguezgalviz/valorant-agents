import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(var(--background))]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="w-12 h-12 text-[rgb(var(--accent))]" />
      </motion.div>
    </div>
  );
}