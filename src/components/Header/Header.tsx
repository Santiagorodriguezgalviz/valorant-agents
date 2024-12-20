import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { Gamepad2, Sword, Shield, Crosshair } from 'lucide-react';

export function Header() {
  const { t } = useTranslation();

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative overflow-hidden"
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-[rgb(var(--card))]">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--accent))/0.2] via-transparent to-[rgb(var(--accent))/0.2] animate-gradient" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Animated Icons */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center gap-6 mb-8"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Shield className="w-10 h-10 text-[rgb(var(--accent))]" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Crosshair className="w-16 h-16 text-[rgb(var(--accent))]" />
            </motion.div>
            <motion.div whileHover={{ rotate: -360 }} transition={{ duration: 0.5 }}>
              <Sword className="w-10 h-10 text-[rgb(var(--accent))]" />
            </motion.div>
          </motion.div>

          {/* Title with gradient and glow effect */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gradient glow-text"
          >
            VALORANT AGENTS
          </motion.h1>

          {/* Subtitle with fade in */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[rgb(var(--foreground))/0.8 max-w-2xl font-medium"
          >
            Explore all agents and their unique abilities in the VALORANT universe
          </motion.p>

          {/* Action button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium 
                     hover:bg-[rgb(var(--accent))/0.9] transition-colors shadow-lg 
                     shadow-[rgb(var(--accent))/0.3] flex items-center gap-2"
          >
            <Gamepad2 className="w-5 h-5" />
            Start Exploring
          </motion.button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgb(var(--background))] to-transparent" />
    </motion.header>
  );
}