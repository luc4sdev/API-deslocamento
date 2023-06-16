"use client";

import { BasicCard } from "@/components/BasicCard/BasicCard";
import { Header } from "@/components/Header/Header";
import { AccountBox } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function Read() {



    const [clients, setClients] = useState([]);
   
    useEffect(() => {
        fetch("https://api-deslocamento.herokuapp.com/api/v1/Cliente")
          .then((response) => response.json())
          .then((data) => {
            setClients(data);
          })
          .catch((error) => {
            console.error("Erro:", error);
          });
      }, []);

    return (
        
    <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
    <Header />

    <Box sx={{
        backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1, 
    }} >
        <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <AccountBox sx={{ fontSize: 50 }} color='secondary' />
            <Typography fontSize={50} textAlign={'center'}>Visualizar clientes</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} padding={5} columns={{ xs: 2, sm: 2, md: 6 }} justifyContent={'center'}>
       
        {clients.map((client, index) => {
            return (
              
                <Grid item xs={2} sm={2} md={3} key={index} >
                <BasicCard client={client} />
                </Grid>
            
            )
        })}
        
        </Grid>
        
        </Box>
        <Box />
    </Box>
</Box>
    )
}