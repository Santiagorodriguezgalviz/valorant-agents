import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Gamepad2 } from 'lucide-react';

export function Header() {
  const { t } = useTranslation();

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-[rgb(var(--card))] border-b border-[rgb(var(--foreground)/0.1)]"
    >
      <div className="absolute inset-0 valorant-gradient opacity-50" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Gamepad2 className="w-12 h-12 text-[rgb(var(--accent))]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--foreground))]"
          >
            {t('header.title')}
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[rgb(var(--foreground)/0.7)] text-lg max-w-2xl"
        >
          {t('header.subtitle')}
        </motion.p>
      </div>
    </motion.header>
  );
}