"use client";

import { Poppins } from 'next/font/google'
import { ReactNode, useState } from 'react'
import { ThemeProvider } from "@mui/material";
import { theme, darkTheme } from "../utils/theme";


import './globals.scss'
import { ThemeContext } from '@/contexts/theme-context';

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    const localStorageTheme = localStorage.getItem('default-theme');
    

    return localStorageTheme || browserDefault;

  };

  const [newTheme, setNewTheme] = useState(getDefaultTheme());
  return (
    <html lang="en">
       <ThemeContext.Provider value={{ newTheme, setNewTheme }}>
      <ThemeProvider theme={newTheme === 'dark' ? darkTheme : theme}>
      <body className={poppins.className}>{children}</body>
      </ThemeProvider>
      </ThemeContext.Provider>
    </html>
  )
}
