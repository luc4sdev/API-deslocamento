import { createContext } from 'react';

export const ThemeContext = createContext({
  newTheme: '',
  setNewTheme: (theme: string) => {},
});