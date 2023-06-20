"use client";

import { BasicCard } from "@/components/BasicCard";
import { Header } from "@/components/Header";
import { fetchData } from "@/services/route";
import { Client } from "@/types/client";
import { AccountBox } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";




interface Params {
    params: {
        clientId: string;
    }
}



export default function Client({ params: { clientId } }: Params) {

    const [client, setClient] = useState<Client | null>(null);
    const buttonOff = true;

    async function getData() {
        const data = await fetchData('https://api-deslocamento.herokuapp.com/api/v1/Cliente', Number(clientId));
        setClient(data)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
            <Header />

            {client === null ?
                <Box sx={{
                    backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
                }}><CircularProgress color="secondary" />
                </Box>
                :
                <Box sx={{
                    backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
                }} >
                    <Box sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <AccountBox sx={{ fontSize: 50 }} color='secondary' />
                        <Typography fontSize={30} textAlign={'center'}>Cliente {client?.id}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <BasicCard client={client} buttonOff={buttonOff} />
                    </Box>
                    <Box />
                </Box>
            }


        </Box>
    )
}