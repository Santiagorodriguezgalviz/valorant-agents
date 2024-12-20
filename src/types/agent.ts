export interface Ability {
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  role: {
    displayName: string;
    description: string;
    displayIcon: string;
  };
  abilities: Ability[];
  background: string;
}