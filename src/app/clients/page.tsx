"use client";

import { Header } from "@/components/Header/Header";
import { OutlinedCard } from "@/components/OutlinedCard/OutlinedCard";
import { Box, Typography } from "@mui/material";
import { AccountBox } from '@mui/icons-material';
import { StyledBox } from "../layout";


export default function Clients() {

  const menus = [
    {
      title: 'Criar Cliente',
      link: '/clients/create'
    },
    {
      title: 'Visualizar Clientes',
      link: '/clients/read'
    },
    {
      title: 'Atualizar Cliente',
      link: '/clients/update'
    },
    {
      title: 'Excluir Cliente',
      link: '/clients/delete'
    },
  ];

  return (
    <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box sx={{
        backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
      }} >
        <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <AccountBox sx={{ fontSize: 50 }} color='secondary' />
          <Typography fontSize={30}>Clientes</Typography>
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