"use client";

import * as React from 'react';
import Link from 'next/link';
import { Box, Button, Card, CardActions, CardContent, Grow, Typography } from '@mui/material';
import { AccountBox, DirectionsCar, Person, SwapVert, AddCircle, Visibility, Edit, Delete } from '@mui/icons-material';

interface Menu {
  title: string;
  link: string;
}
interface OutlinedCardProps {
  menu: Menu;
}




export function OutlinedCard({ menu }: OutlinedCardProps) {

  const card = (
    <React.Fragment>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {menu.title === 'Clientes' ? <Person fontSize="large" color='secondary' /> : menu.title === 'Condutores' ? <AccountBox fontSize="large" color='secondary' />
          : menu.title === 'Deslocamentos' ? <SwapVert fontSize="large" color='secondary' /> : menu.title === 'Veículos' ? <DirectionsCar fontSize="large" color='secondary' /> : menu.title.includes('Criar')  ? <AddCircle fontSize="large" color='secondary' /> : menu.title.includes('Visualizar')  ? <Visibility fontSize="large" color='secondary' /> : menu.title.includes('Atualizar') ? <Edit fontSize="large" color='secondary' /> : menu.title.includes('Excluir') ? <Delete fontSize="large" color='secondary' /> : ''}
        </Box>
        <Typography sx={{ fontSize: 20 }} color="primary.light" gutterBottom>
          {menu.title}
        </Typography>
      </CardContent>
      <CardActions>
      <Link href={menu.link}>
      <Button variant="contained" color='secondary' size="small" sx={{ fontWeight:'800'}}>Acessar</Button>
      </Link>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1000 } : {})}
  >
    <Box sx={{ minWidth: 275 }}>
    
           <Card variant="outlined" sx={{ backgroundColor: 'primary.dark', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>{card}</Card>
        
     
    </Box>
    </Grow>
  );
}
