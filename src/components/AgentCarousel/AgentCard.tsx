import { motion } from 'framer-motion';
import { Agent } from '../../types/agent';
import { useTranslation } from '../../hooks/useTranslation';

interface AgentCardProps {
  agent: Agent;
  isSelected: boolean;
  onClick: () => void;
}

export function AgentCard({ agent, isSelected, onClick }: AgentCardProps) {
  const { translateAgent } = useTranslation();

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isSelected ? 1.1 : 1,
        zIndex: isSelected ? 10 : 1
      }}
      className={`relative cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-10' : 'z-0'
      }`}
      onClick={onClick}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <motion.img
          src={agent.fullPortrait}
          alt={agent.displayName}
          className="w-full h-[500px] object-cover object-center rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {agent.displayName}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-300 line-clamp-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {translateAgent(`agent.${agent.displayName}.description`, agent.description)}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}