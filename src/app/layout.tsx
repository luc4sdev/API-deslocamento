"use client";

import { Poppins } from 'next/font/google'
import { ReactNode, useState } from 'react'
import { theme, darkTheme } from "../utils/theme";
import { ThemeContext } from '@/contexts/theme-context';
import { ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'


const poppins = Poppins({ subsets: ['latin'], weight: '700' })

export const StyledBox = styled(Box)`
  ${({ theme }) => `
  transition: ${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.1);
  }
  `}
`;

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  const [newTheme, setNewTheme] = useState('dark');
  return (
    
    <html lang="en">
       <ThemeContext.Provider value={{ newTheme, setNewTheme }}>
      <ThemeProvider theme={newTheme === 'dark' ? darkTheme : theme}>
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }} className={poppins.className}>{children}</body>
      </ThemeProvider>
      </ThemeContext.Provider>
    </html>
  )
}
