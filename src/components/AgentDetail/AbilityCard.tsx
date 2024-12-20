import { motion } from 'framer-motion';
import { Ability } from '../../types/agent';

interface AbilityCardProps {
  ability: Ability;
  delay: number;
}

export function AbilityCard({ ability, delay }: AbilityCardProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
      className="group relative overflow-hidden rounded-lg bg-[rgb(var(--card))] p-4 hover:bg-[rgb(var(--accent))/0.1] transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg bg-[rgb(var(--accent))/0.1] p-2 flex items-center justify-center">
          <img
            src={ability.displayIcon}
            alt={ability.displayName}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">
            {ability.displayName}
          </h3>
          <p className="text-[rgb(var(--foreground))/0.8] text-sm leading-relaxed">
            {ability.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}