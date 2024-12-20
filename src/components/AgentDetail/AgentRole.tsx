import { Shield, Swords, Eye, Bomb } from 'lucide-react';

const roleIcons = {
  'Sentinel': Shield,
  'Duelist': Swords,
  'Initiator': Eye,
  'Controller': Bomb,
} as const;

interface AgentRoleProps {
  role: keyof typeof roleIcons;
}

export function AgentRole({ role }: AgentRoleProps) {
  const RoleIcon = roleIcons[role] || Shield;
  
  return (
    <RoleIcon className="w-8 h-8 text-[rgb(var(--accent))]" />
  );
}