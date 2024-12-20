import { useState, useEffect } from 'react';
import { Agent } from '../types/agent';
import { getAgents } from '../services/api';

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();
        setAgents(data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return {
    agents,
    loading,
    selectedAgent,
    setSelectedAgent
  };
}