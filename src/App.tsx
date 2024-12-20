import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AgentList } from './components/AgentList/AgentList';
import { AgentDetail } from './components/AgentDetail/AgentDetail';
import { Carousel } from './components/AgentCarousel/Carousel';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { Header } from './components/Header/Header';
import { ThemeProvider } from './context/ThemeContext';
import { useAgents } from './hooks/useAgents';
import { Loader } from './components/Loader/Loader';

export default function App() {
  const { agents, loading, selectedAgent, setSelectedAgent } = useAgents();

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[rgb(var(--background))]">
        <ThemeToggle />
        <AnimatePresence mode="wait">
          {selectedAgent ? (
            <AgentDetail
              key="detail"
              agent={selectedAgent}
              onBack={() => setSelectedAgent(null)}
            />
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Header />
              <Carousel
                agents={agents}
                onSelect={setSelectedAgent}
              />
              <AgentList
                agents={agents}
                onAgentSelect={setSelectedAgent}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}