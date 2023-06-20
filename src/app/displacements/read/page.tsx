"use client";

import { BasicCard } from "@/components/BasicCard";
import { Header } from "@/components/Header";
import { fetchAllData } from "@/services/route";
import { SwapVert } from "@mui/icons-material";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function Read() {



    const [displacements, setDisplacements] = useState([]);

    async function getAllData() {
        const data = await fetchAllData('https://api-deslocamento.herokuapp.com/api/v1/Deslocamento');
        setDisplacements(data)
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (

        <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
            <Header />

            {displacements.length === 0 ?
                <Box sx={{
                    backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
                }}><CircularProgress color="secondary" />
                </Box>
                :
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
            }
        </Box>
    )
}