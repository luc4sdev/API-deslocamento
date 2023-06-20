"use client";

import { Header } from "@/components/Header";
import { Box, Typography } from "@mui/material";
import { Person } from '@mui/icons-material';
import { OutlinedCard } from "@/components/OutlinedCard";
import { StyledBox } from "../layout";

export default function Conductors() {

  const menus = [
    {
      title: 'Criar Condutor',
      link: '/conductors/create'
    },
    {
      title: 'Visualizar Condutores',
      link: '/conductors/read'
    },
    {
      title: 'Atualizar Condutor',
      link: '/conductors/update'
    },
    {
      title: 'Excluir Condutor',
      link: '/conductors/delete'
    },
  ];

  return (
    <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box sx={{
        backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
      }} >
        <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Person sx={{ fontSize: 50 }} color='secondary' />
          <Typography fontSize={30}>Condutores</Typography>
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