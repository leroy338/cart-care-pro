import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  isDark: boolean;
  colors: typeof Colors.light | typeof Colors.dark;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeMode>('system');
  
  // Determine if we should use dark mode
  const isDark = theme === 'system' 
    ? systemColorScheme === 'dark'
    : theme === 'dark';
  
  // Get the appropriate colors
  const colors = isDark ? Colors.dark : Colors.light;

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'system') return isDark ? 'light' : 'dark';
      return prev === 'light' ? 'dark' : 'light';
    });
  };

  // Update theme when system theme changes (only if using system theme)
  useEffect(() => {
    if (theme === 'system') {
      // Force re-render when system theme changes
    }
  }, [systemColorScheme, theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      isDark,
      colors,
      setTheme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 