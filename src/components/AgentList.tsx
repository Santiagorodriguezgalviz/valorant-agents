import { useState } from 'react';
import { motion } from 'framer-motion';
import { AgentCard } from './AgentCard';
import { Search, Filter } from 'lucide-react';
import { Agent } from '../types/agent';

interface AgentListProps {
  agents: Agent[];
  onAgentSelect: (agent: Agent) => void;
}

export function AgentList({ agents, onAgentSelect }: AgentListProps) {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('');

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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search agents..."
            className="w-full pl-10 pr-4 py-2 bg-neutral-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Filter className="w-6 h-6 text-gray-400" />
          {roles.map(role => (
            <button
              key={role}
              className={`px-4 py-2 rounded-lg ${
                selectedRole === role
                  ? 'bg-red-500 text-white'
                  : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
              onClick={() => setSelectedRole(role === selectedRole ? '' : role)}
            >
              {role}
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