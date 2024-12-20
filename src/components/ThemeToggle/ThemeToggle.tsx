import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeColor } from '../../types/theme';

const colorOptions: { color: ThemeColor; label: string }[] = [
  { color: 'red', label: 'Ruby' },
  { color: 'blue', label: 'Ocean' },
  { color: 'green', label: 'Emerald' },
  { color: 'purple', label: 'Amethyst' },
  { color: 'orange', label: 'Sunset' },
];

export function ThemeToggle() {
  const { theme, setMode, setColor } = useTheme();
  const [showColors, setShowColors] = useState(false);

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 z-50">
      <AnimatePresence>
        {showColors && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex gap-2 bg-[rgb(var(--card))] p-2 rounded-lg shadow-lg"
          >
            {colorOptions.map(({ color, label }) => (
              <motion.button
                key={color}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setColor(color)}
                className={`w-8 h-8 rounded-full shadow-lg transition-transform relative
                  ${color === 'red' ? 'bg-red-500' : ''}
                  ${color === 'blue' ? 'bg-blue-500' : ''}
                  ${color === 'green' ? 'bg-green-500' : ''}
                  ${color === 'purple' ? 'bg-purple-500' : ''}
                  ${color === 'orange' ? 'bg-orange-500' : ''}
                  ${theme.color === color ? 'ring-2 ring-white' : ''}
                `}
              >
                {theme.color === color && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full ring-2 ring-white"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="sr-only">{label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2 bg-[rgb(var(--card))] p-2 rounded-lg shadow-lg">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowColors(!showColors)}
          className="p-2 rounded-full hover:bg-[rgb(var(--accent))/0.1 text-[rgb(var(--accent))]"
          aria-label="Theme colors"
        >
          <Palette className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setMode(theme.mode === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full hover:bg-[rgb(var(--accent))/0.1 text-[rgb(var(--accent))]"
          aria-label={theme.mode === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme.mode === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </div>
  );
}