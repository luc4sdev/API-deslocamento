"use client";

import { Header } from "@/components/Header/Header";
import { Box, Typography } from "@mui/material";
import { SwapVert } from '@mui/icons-material';
import { OutlinedCard } from "@/components/OutlinedCard/OutlinedCard";

export default function Displacements() {

    const menus = ['Criar Deslocamento', 'Visualizar Deslocamentos', 'Atualizar Deslocamento', 'Excluir Deslocamento'];

    return (
        <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <Box sx={{
                backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1, 
            }} >
                <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <SwapVert sx={{ fontSize: 50 }} color='secondary' />
                    <Typography fontSize={50}>Deslocamentos</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', '@media (max-width: 1200px)': {
                    flexDirection: 'column',
                }, }}>
                {menus.map((menu, index) => {
                    return (
                        <OutlinedCard menu={menu} key={index} />
                    )
                })}
                </Box>
                <Box />
            </Box>
        </Box>
    )
}