import { motion } from 'framer-motion';
import { Agent } from '../types/agent';
import { Shield, Swords, Eye, Bomb } from 'lucide-react';

const roleIcons = {
  'Sentinel': Shield,
  'Duelist': Swords,
  'Initiator': Eye,
  'Controller': Bomb,
};

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  const RoleIcon = roleIcons[agent.role.displayName as keyof typeof roleIcons] || Shield;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 cursor-pointer group"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      
      <img
        src={agent.fullPortrait}
        alt={agent.displayName}
        className="w-full h-[400px] object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center gap-3 mb-2">
          <RoleIcon className="w-5 h-5 text-red-500" />
          <span className="text-sm text-gray-300">{agent.role.displayName}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{agent.displayName}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{agent.description}</p>
      </div>
    </motion.div>
  );
}