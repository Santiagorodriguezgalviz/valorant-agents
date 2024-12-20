// Utilidad para traducir contenido
export function translateContent(key: string, fallback: string, translations: Record<string, any>) {
  const parts = key.split('.');
  let result = translations;
  
  for (const part of parts) {
    if (result && result[part]) {
      result = result[part];
    } else {
      return fallback;
    }
  }
  
  return typeof result === 'string' ? result : fallback;
}