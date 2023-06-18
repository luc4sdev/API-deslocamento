"use client";

import { BasicCard } from "@/components/BasicCard/BasicCard";
import { Header } from "@/components/Header/Header";
import { SwapVert } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function Read() {



    const [displacements, setDisplacements] = useState([]);
   
    useEffect(() => {
        fetch("https://api-deslocamento.herokuapp.com/api/v1/Deslocamento")
          .then((response) => response.json())
          .then((data) => {
            setDisplacements(data);
            console.log(data)
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
            <SwapVert sx={{ fontSize: 50 }} color='secondary' />
            <Typography fontSize={30} textAlign={'center'}>Visualizar deslocamentos</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} padding={5} columns={{ xs: 2, sm: 2, md: 6 }} justifyContent={'center'}>
       
       {displacements.map((displacement, index) => {
           return (
             
               <Grid item xs={2} sm={2} md={3} key={index} >
               <BasicCard displacement={displacement} />
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