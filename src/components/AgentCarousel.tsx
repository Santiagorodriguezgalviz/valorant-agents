import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Agent } from '../types/agent';
import { useTranslation } from '../hooks/useTranslation';

interface AgentCarouselProps {
  agents: Agent[];
  onSelect: (agent: Agent) => void;
}

export function AgentCarousel({ agents, onSelect }: AgentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useTranslation();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      scale: 0.8,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      scale: 1,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      scale: 0.8,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = agents.length - 1;
      if (nextIndex >= agents.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative h-[700px] w-full overflow-hidden bg-[rgb(var(--card))]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.4 }
          }}
          className="absolute w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--card))] via-transparent to-transparent" />
            <img
              src={agents[currentIndex].fullPortrait}
              alt={agents[currentIndex].displayName}
              className="w-full h-full object-contain"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
            >
              <div className="container mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--foreground))]">
                  {agents[currentIndex].displayName}
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={agents[currentIndex].role.displayIcon}
                    alt={agents[currentIndex].role.displayName}
                    className="w-8 h-8"
                  />
                  <span className="text-xl text-[rgb(var(--accent))]">
                    {t(`roles.${agents[currentIndex].role.displayName}`)}
                  </span>
                </div>
                <p className="text-[rgb(var(--foreground)/0.8)] max-w-2xl text-lg mb-6">
                  {agents[currentIndex].description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelect(agents[currentIndex])}
                  className="px-8 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[rgb(var(--accent))/0.9] transition-colors"
                >
                  {t('carousel.viewDetails')}
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-[rgb(var(--foreground))/0.1 backdrop-blur-sm text-[rgb(var(--foreground))] hover:bg-[rgb(var(--foreground))/0.2] transition-colors"
          onClick={() => paginate(-1)}
          aria-label={t('carousel.prev')}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-[rgb(var(--foreground))/0.1 backdrop-blur-sm text-[rgb(var(--foreground))] hover:bg-[rgb(var(--foreground))/0.2] transition-colors"
          onClick={() => paginate(1)}
          aria-label={t('carousel.next')}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}