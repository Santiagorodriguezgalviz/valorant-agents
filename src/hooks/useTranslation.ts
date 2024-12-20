import { en } from '../translations/en';

export function useTranslation() {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = en;
    
    for (const k of keys) {
      value = value[k];
      if (!value) return key;
    }
    
    return value;
  };

  return {
    t,
    translateAgent: (key: string, fallback: string) => fallback // For now, we'll use English content
  };
}