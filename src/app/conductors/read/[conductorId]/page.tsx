"use client";

import { BasicCard } from "@/components/BasicCard/BasicCard";
import { Header } from "@/components/Header/Header";
import { Person } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";


interface Conductor {
        id: number;
        nome: string;
        numeroHabilitacao: string;
        categoriaHabilitacao: string;
        vencimentoHabilitacao: Date;
}

interface Params {
    params: {
        conductorId: string;
    }
}

/*export async function getConductor(params: {
    conductorId: string;
}) {

    const data = await fetch(`https://api-deslocamento.herokuapp.com/api/v1/Condutor/${params.conductorId}`)

    const conductor = await data.json()

    return conductor

}

export async function generateStaticParams() {
    const response = await fetch('https://api-deslocamento.herokuapp.com/api/v1/Condutor/')

    const data = await response.json()

    const paths = data.map((conductor: Conductor) => {
        return {
            params: {
                conductorId: String(conductor.id)
            }
        }
    })
    
    return {paths, fallback: false}
}
*/

export default function Conductor({ params: { conductorId } }: Params) {

    const [conductor, setConductor] = useState<Conductor>();
    const buttonOff = true;

    
    useEffect(() => {
       
        fetch(`https://api-deslocamento.herokuapp.com/api/v1/Condutor/${conductorId}`)
        .then((response) => response.json())
        .then((data) => {
            setConductor(data);
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }, [])

    return (
        <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
        <Header />
    
        <Box sx={{
            backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1, 
        }} >
            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Person sx={{ fontSize: 50 }} color='secondary' />
                <Typography fontSize={50} textAlign={'center'}>Condutor {conductor?.id}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BasicCard conductor={conductor} buttonOff={buttonOff}/>
            </Box>
            <Box />
        </Box>
    </Box>
    )
}