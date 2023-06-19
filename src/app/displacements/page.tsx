"use client";

import { Header } from "@/components/Header/Header";
import { Box, Typography } from "@mui/material";
import { SwapVert } from '@mui/icons-material';
import { OutlinedCard } from "@/components/OutlinedCard/OutlinedCard";
import { StyledBox } from "../layout";

export default function Displacements() {

  const menus = [
    {
      title: 'Criar Deslocamento',
      link: '/displacements/create'
    },
    {
      title: 'Visualizar Deslocamentos',
      link: '/displacements/read'
    },
    {
      title: 'Atualizar Deslocamento',
      link: '/displacements/update'
    },
    {
      title: 'Excluir Deslocamento',
      link: '/displacements/delete'
    },
  ];

  return (
    <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box sx={{
        backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
      }} >
        <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <SwapVert sx={{ fontSize: 50 }} color='secondary' />
          <Typography fontSize={30}>Deslocamentos</Typography>
        </Box>

        <Box sx={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', '@media (max-width: 1200px)': {
            flexDirection: 'column',
          },
        }}>
          {menus.map((menu, index) => {
            return (
              <StyledBox key={index}>
                <OutlinedCard menu={menu} />
              </StyledBox>
            )
          })}
        </Box>
        <Box />
      </Box>
    </Box>
  )
}