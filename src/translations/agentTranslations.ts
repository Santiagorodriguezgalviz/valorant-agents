export const agentTranslations = {
  // Roles
  roles: {
    'Duelist': {
      name: 'Duelista',
      description: 'Los Duelistas son agentes independientes que se destacan en el combate directo y la creación de espacio para el equipo.'
    },
    'Sentinel': {
      name: 'Centinela',
      description: 'Los Centinelas son expertos en defensa y control de área, protegiendo a sus aliados desde la retaguardia.'
    },
    'Controller': {
      name: 'Controlador',
      description: 'Los Controladores se especializan en dividir territorios peligrosos y proporcionar cobertura para el equipo.'
    },
    'Initiator': {
      name: 'Iniciador',
      description: 'Los Iniciadores desafían situaciones peligrosas y abren el camino para su equipo.'
    }
  },
  
  // Agentes
  agents: {
    'Gekko': {
      description: 'Gekko lidera un grupo unido de criaturas calamitosas. Sus compañeros avanzan, dispersando a los enemigos, mientras Gekko los persigue para reagruparse y volver a atacar.',
      abilities: {
        'Wingman': {
          name: 'Wingman',
          description: 'EQUIPA a Wingman. DISPARA para enviar a Wingman hacia adelante buscando enemigos. Wingman desata una explosión concusiva hacia el primer enemigo que ve.'
        },
        'Dizzy': {
          name: 'Dizzy',
          description: 'EQUIPA a Dizzy. DISPARA para enviar a Dizzy volando hacia adelante por el aire. Dizzy carga y luego dispara ráfagas de plasma a los enemigos en su línea de visión.'
        }
        // Añadir más habilidades según sea necesario
      }
    }
    // Añadir más agentes según sea necesario
  }
};