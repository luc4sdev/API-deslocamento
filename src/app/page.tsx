"use client";

import { Box, Typography, useMediaQuery } from '@mui/material'
import { OutlinedCard } from '../components/OutlinedCard/OutlinedCard'
import { Header } from '@/components/Header/Header';
import { StyledBox } from './layout';




export default function Home() {

  const menus = [
    {
      title: 'Clientes',
      link: '/clients'
    },
    {
      title: 'Condutores',
      link: '/conductors'
    },
    {
      title: 'Deslocamentos',
      link: '/displacements'
    },
    {
      title: 'Veículos',
      link: '/vehicles'
    },
  ];
  
  const matches = useMediaQuery('(max-width:720px)');

  return (
      <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
        <Header />

        <Box color='primary.light' sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center', gap: '30px' }}>

          <Typography fontSize={30} fontWeight='800'>{matches ? 'Deslocamento' : 'API - Deslocamento'}</Typography>

          <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', '@media (max-width: 1250px)': {
              flexDirection: 'column',
            },
          }} >

            {menus.map((menu, index) => {
              return (
                <StyledBox key={index}>
                  <OutlinedCard menu={menu} />
                </StyledBox>
              )
            })}
          </Box>
        </Box>
      </Box>
  )
}
