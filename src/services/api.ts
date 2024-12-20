const BASE_URL = 'https://valorant-api.com/v1';

export async function getAgents() {
  const response = await fetch(`${BASE_URL}/agents?isPlayableCharacter=true`);
  const data = await response.json();
  return data.data;
}

export async function getAgentById(id: string) {
  const response = await fetch(`${BASE_URL}/agents/${id}`);
  const data = await response.json();
  return data.data;
}