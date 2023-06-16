"use client";

import { Box } from '@mui/material'
import { OutlinedCard } from '../components/OutlinedCard/OutlinedCard'
import { Header } from '@/components/Header/Header';




export default function Home() {
  
  const menus = ['Clientes', 'Condutores', 'Deslocamentos', 'Veículos'];

  return (
    <Box color='primary.light' sx={{ width:'100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexGrow: 1, '@media (max-width: 1200px)': {
flexDirection: 'column',}, }} >
      {menus.map((menu, index) => {
        return (
          <OutlinedCard menu={menu} key={index} />
        )
      })}
    </Box>
    </Box>
  )
}
