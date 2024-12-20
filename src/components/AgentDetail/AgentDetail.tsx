import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Agent } from '../../types/agent';
import { useTranslation } from '../../hooks/useTranslation';
import { AbilityCard } from './AbilityCard';
import { AgentRole } from './AgentRole';

interface AgentDetailProps {
  agent: Agent;
  onBack: () => void;
}

export function AgentDetail({ agent, onBack }: AgentDetailProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[rgb(var(--background))]"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--accent))/0.1] to-transparent" />
        
        <div className="container mx-auto px-4 py-8 relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center gap-2 text-[rgb(var(--foreground))/0.7 hover:text-[rgb(var(--accent))] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('common.back')}
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={agent.fullPortrait}
                alt={agent.displayName}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <AgentRole role={agent.role.displayName} />
                  <h1 className="text-4xl md:text-6xl font-bold">{agent.displayName}</h1>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[rgb(var(--accent))] font-semibold">
                    {t(`roles.${agent.role.displayName}`)}
                  </span>
                </div>
                <p className="text-[rgb(var(--foreground))/0.8 text-lg leading-relaxed">
                  {agent.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold">{t('common.abilities')}</h2>
                <div className="grid gap-4">
                  {agent.abilities.map((ability, index) => (
                    <AbilityCard
                      key={ability.displayName}
                      ability={ability}
                      delay={0.5 + index * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}