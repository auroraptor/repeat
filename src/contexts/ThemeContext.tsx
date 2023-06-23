import React from 'react';

export type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);