"use client";

import { Header } from "@/components/Header";
import { Box, Typography } from "@mui/material";
import { DirectionsCar } from '@mui/icons-material';
import { OutlinedCard } from "@/components/OutlinedCard";
import { StyledBox } from "../layout";

export default function Vehicles() {

  const menus = [
    {
      title: 'Criar Veículo',
      link: '/vehicles/create'
    },
    {
      title: 'Visualizar Veículos',
      link: '/vehicles/read'
    },
    {
      title: 'Atualizar Veículo',
      link: '/vehicles/update'
    },
    {
      title: 'Excluir Veículo',
      link: '/vehicles/delete'
    },
  ];

  return (
    <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box sx={{
        backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
      }} >
        <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <DirectionsCar sx={{ fontSize: 50 }} color='secondary' />
          <Typography fontSize={30}>Veículos</Typography>
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