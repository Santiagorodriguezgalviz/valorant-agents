import { motion } from 'framer-motion';
import { Agent } from '../../types/agent';
import { AgentRole } from '../AgentDetail/AgentRole';
import { useTranslation } from '../../hooks/useTranslation';

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer hover-card"
      onClick={onClick}
    >
      <div className="relative group overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        <motion.img
          src={agent.fullPortrait}
          alt={agent.displayName}
          className="w-full h-[500px] object-cover object-center rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3 mb-2">
            <AgentRole role={agent.role.displayName} />
            <span className="text-sm text-white/80">{t(`roles.${agent.role.displayName}`)}</span>
          </div>
          
          <motion.h3
            className="text-2xl font-bold text-white mb-2"
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
            {agent.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}