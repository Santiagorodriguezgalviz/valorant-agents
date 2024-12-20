import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Agent } from '../../types/agent';
import { AgentRole } from '../AgentDetail/AgentRole';
import { useTranslation } from '../../hooks/useTranslation';

interface CarouselProps {
  agents: Agent[];
  onSelect: (agent: Agent) => void;
}

export function Carousel({ agents, onSelect }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useTranslation();

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    })
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next >= agents.length) next = 0;
      if (next < 0) next = agents.length - 1;
      return next;
    });
  };

  const currentAgent = agents[currentIndex];

  return (
    <div className="relative h-[700px] overflow-hidden bg-gradient-to-b from-[rgb(var(--accent))/0.1] to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')]" />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Agent Image */}
            <motion.div 
              className="relative w-[600px] h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))] via-transparent to-transparent" />
              <img
                src={currentAgent.fullPortrait}
                alt={currentAgent.displayName}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Agent Info */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-12 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <AgentRole role={currentAgent.role.displayName} />
                  <span className="text-[rgb(var(--accent))] font-medium">
                    {t(`roles.${currentAgent.role.displayName}`)}
                  </span>
                </div>

                <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--foreground))]">
                  {currentAgent.displayName}
                </h2>

                <p className="text-[rgb(var(--foreground))/0.8] text-lg mb-8 max-w-2xl mx-auto">
                  {currentAgent.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelect(currentAgent)}
                  className="px-8 py-3 bg-[rgb(var(--accent))] text-white rounded-lg font-medium 
                           inline-flex items-center gap-2 hover:bg-[rgb(var(--accent))/0.9] 
                           transition-colors shadow-lg shadow-[rgb(var(--accent))/0.3]"
                >
                  {t('carousel.viewDetails')}
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="p-3 rounded-full bg-[rgb(var(--foreground))/0.1 backdrop-blur-sm 
                   text-[rgb(var(--foreground))] hover:bg-[rgb(var(--foreground))/0.2] 
                   transition-colors"
          aria-label={t('carousel.prev')}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(1)}
          className="p-3 rounded-full bg-[rgb(var(--foreground))/0.1 backdrop-blur-sm 
                   text-[rgb(var(--foreground))] hover:bg-[rgb(var(--foreground))/0.2] 
                   transition-colors"
          aria-label={t('carousel.next')}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Agent Counter */}
      <div className="absolute bottom-8 left-8 z-10">
        <span className="text-[rgb(var(--foreground))/0.6 font-medium">
          {currentIndex + 1} / {agents.length}
        </span>
      </div>
    </div>
  );
}