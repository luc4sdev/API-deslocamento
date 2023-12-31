"use client";

import { Header } from "@/components/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { postData } from "@/services/route";
import { DirectionsCar } from "@mui/icons-material";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";



export default function Create() {

    const { newTheme } = useContext(ThemeContext);

    const [placa, setPlaca] = useState('');
    const [marcaModelo, setMarcaModelo] = useState('');
    const [anoFabricacao, setAnoFabricacao] = useState(0);
    const [kmAtual, setKmAtual] = useState(0);

    const [created, setCreated] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter();

    async function handleCreateVehicle() {

        const requestBody = {
            placa: placa,
            marcaModelo: marcaModelo,
            anoFabricacao: anoFabricacao,
            kmAtual: kmAtual,
        };

        try {

            const res = await postData('https://api-deslocamento.herokuapp.com/api/v1/Veiculo', requestBody);
            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setCreated(true)
            const redirectTimeout = setTimeout(() => {
                router.push('/vehicles');
            }, 2000);

            return () => clearTimeout(redirectTimeout);
        } catch (error) {
            console.error('Falha ao criar o recurso', error);
            setError(true)
        }
    }

    return (
        <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <Box sx={{
                backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
            }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <DirectionsCar sx={{ fontSize: 50 }} color='secondary' />
                    <Typography fontSize={30} textAlign={'center'}>Criar veículo</Typography>
                </Box>

                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 2, sm: 2, md: 6 }} justifyContent={'center'} maxWidth='600px'>
                    <Grid item xs={2} sm={2} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Placa"
                            color="secondary"
                            value={placa}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setPlaca(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }

                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Marca / Modelo"
                            color="secondary"
                            value={marcaModelo}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setMarcaModelo(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} sm={2} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Ano de fabricação"
                            type="number"
                            color="secondary"
                            value={anoFabricacao}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setAnoFabricacao(Number(event.target.value));
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Km atual"
                            type="number"
                            color="secondary"
                            value={kmAtual}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setKmAtual(Number(event.target.value));
                            }}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleCreateVehicle()}>Criar</Button>
                <Box />
            </Box>
            {created ?
                <Alert variant="filled" severity="success">
                    Veículo criado com sucesso! Redirecionando...
                </Alert>
                : error ?
                    <Alert variant="filled" severity="error">
                        Houve um erro.
                    </Alert>
                    : ''
            }
        </Box>
    )
}