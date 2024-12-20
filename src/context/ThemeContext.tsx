import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, ThemeColor, ThemeMode } from '../types/theme';

interface ThemeContextType {
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  setColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeColors = {
  red: {
    accent: '255 70 84',
  },
  blue: {
    accent: '66 153 225',
  },
  green: {
    accent: '72 187 120',
  },
  purple: {
    accent: '159 122 234',
  },
  orange: {
    accent: '237 137 54',
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>({ mode: 'dark', color: 'red' });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme.mode);
    
    const colors = themeColors[theme.color];
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  const setMode = (mode: ThemeMode) => {
    setTheme(prev => ({ ...prev, mode }));
  };

  const setColor = (color: ThemeColor) => {
    setTheme(prev => ({ ...prev, color }));
  };

  return (
    <ThemeContext.Provider value={{ theme, setMode, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};