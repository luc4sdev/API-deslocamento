"use client";

import { BasicCard } from "@/components/BasicCard/BasicCard";
import { Header } from "@/components/Header/Header";
import { DirectionsCar } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";


interface Vehicle {
    id: number;
    placa: string;
    marcaModelo: string;
    anoFabricacao: number;
    kmAtual: number;
}



export async function getVehicle(params: any) {

    const data = await fetch(`https://api-deslocamento.herokuapp.com/api/v1/Veiculo/${params.vehicleId}`)

    const vehicle = await data.json()

    return vehicle

}

export async function generateStaticParams() {
    const response = await fetch('https://api-deslocamento.herokuapp.com/api/v1/Veiculo/')

    const data = await response.json()

    const paths = data.map((displacements: Vehicle) => {
        return {
            params: [{
                vehicleId: `${String(displacements.id)}`
            }]
        }
    })
    
    return {paths, fallback: false}
}


export default function Vehicle({ params } : any) {

    const [vehicle, setVehicle] = useState<Vehicle>();
    const buttonOff = true;

    useEffect(() => {
        getVehicle(params)
        .then((data) => {
            setVehicle(data);
        })
        .catch((error) => {
          console.error("Erro:", error);
        });
    }, [params]);
  

    return (
        <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
        <Header />
    
        <Box sx={{
            backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1, 
        }} >
            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <DirectionsCar sx={{ fontSize: 50 }} color='secondary' />
                <Typography fontSize={50} textAlign={'center'}>Veículo {vehicle?.id}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BasicCard vehicle={vehicle} buttonOff={buttonOff}/>
            </Box>
            <Box />
        </Box>
    </Box>
    )
}