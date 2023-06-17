"use client";

import * as React from 'react';
import Link from 'next/link';
import { Box, Button, Card, CardActions, CardContent, Grow, Typography } from '@mui/material';
import { AccountBox, DirectionsCar, Person, SwapVert, AddCircle, Visibility, Edit, Delete } from '@mui/icons-material';

interface OutlinedCardProps {
  menu: string;
}




export function OutlinedCard({ menu }: OutlinedCardProps) {

  const card = (
    <React.Fragment>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {menu === 'Clientes' ? <Person fontSize="large" color='secondary' /> : menu === 'Condutores' ? <AccountBox fontSize="large" color='secondary' />
          : menu === 'Deslocamentos' ? <SwapVert fontSize="large" color='secondary' /> : menu === 'Veículos' ? <DirectionsCar fontSize="large" color='secondary' /> : menu.includes('Criar')  ? <AddCircle fontSize="large" color='secondary' /> : menu.includes('Visualizar')  ? <Visibility fontSize="large" color='secondary' /> : menu.includes('Atualizar') ? <Edit fontSize="large" color='secondary' /> : menu.includes('Excluir') ? <Delete fontSize="large" color='secondary' /> : ''}
        </Box>
        <Typography sx={{ fontSize: 20 }} color="primary.light" gutterBottom>
          {menu}
        </Typography>
      </CardContent>
      <CardActions>
      <Link href={menu === 'Clientes' ? '/clients' : menu === 'Condutores' ? '/conductors' : menu === 'Deslocamentos' ? '/displacements' : menu === 'Veículos' ? '/vehicles' :
    menu === 'Criar Cliente' ? '/clients/create' :  menu === 'Visualizar Clientes' ? '/clients/read' :  menu === 'Atualizar Cliente' ? '/clients/update' :  menu === 'Excluir Cliente' ? '/clients/delete' : menu === 'Criar Condutor' ? '/conductors/create' :  menu === 'Visualizar Condutores' ? '/conductors/read' :  menu === 'Atualizar Condutor' ? '/conductors/update' :  menu === 'Excluir Condutor' ? '/conductors/delete' : menu === 'Criar Deslocamento' ? '/displacements/create' :  menu === 'Visualizar Deslocamentos' ? '/displacements/read' :  menu === 'Atualizar Deslocamento' ? '/displacements/update' :  menu === 'Excluir Deslocamento' ? '/displacements/delete' : menu === 'Criar Veículo' ? '/vehicles/create' :  menu === 'Visualizar Veículos' ? '/vehicles/read' :  menu === 'Atualizar Veículo' ? '/vehicles/update' :  menu === 'Excluir Veículo' ? '/vehicles/delete' : ''}>
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
