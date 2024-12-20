import { useState } from 'react';
import { motion } from 'framer-motion';
import { AgentCard } from '../AgentCard/AgentCard';
import { Search, Filter } from 'lucide-react';
import { Agent } from '../../types/agent';
import { useTranslation } from '../../hooks/useTranslation';

interface AgentListProps {
  agents: Agent[];
  onAgentSelect: (agent: Agent) => void;
}

export function AgentList({ agents, onAgentSelect }: AgentListProps) {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const { t } = useTranslation();

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.displayName.toLowerCase().includes(search.toLowerCase());
    const matchesRole = selectedRole ? agent.role.displayName === selectedRole : true;
    return matchesSearch && matchesRole;
  });

  const roles = Array.from(new Set(agents.map(agent => agent.role.displayName)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgb(var(--foreground))/0.5]" />
          <input
            type="text"
            placeholder={t('common.search')}
            className="w-full pl-10 pr-4 py-2 bg-[rgb(var(--card))] rounded-lg text-[rgb(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--accent))]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <Filter className="w-6 h-6 text-[rgb(var(--foreground))/0.5]" />
          {roles.map(role => (
            <button
              key={role}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedRole === role
                  ? 'bg-[rgb(var(--accent))] text-white'
                  : 'bg-[rgb(var(--card))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--accent))/0.1]'
              }`}
              onClick={() => setSelectedRole(role === selectedRole ? '' : role)}
            >
              {t(`roles.${role}`)}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {filteredAgents.map(agent => (
          <AgentCard
            key={agent.uuid}
            agent={agent}
            onClick={() => onAgentSelect(agent)}
          />
        ))}
      </motion.div>
    </div>
  );
}