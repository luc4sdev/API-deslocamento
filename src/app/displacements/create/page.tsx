"use client";

import { Header } from "@/components/Header/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { postData } from "@/services/route";
import { SwapVert } from "@mui/icons-material";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";



export default function Create() {

    const { newTheme } = useContext(ThemeContext);

    const [kmInicial, setKmInicial] = useState(0);
    const [checkList, setCheckList] = useState('');
    const [motivo, setMotivo] = useState('');
    const [observacao, setObservacao] = useState('');

    const [created, setCreated] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter();

    async function handleCreateDisplacement() {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        const requestBody = {
            kmInicial: kmInicial,
            inicioDeslocamento: formattedDate,
            checkList: checkList,
            motivo: motivo,
            observacao: observacao,
            idCondutor: 0,
            idVeiculo: 0,
            idCliente: 0,
        };

        try {



            const res = await postData('https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/IniciarDeslocamento', requestBody)
            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setCreated(true)
            const redirectTimeout = setTimeout(() => {
                router.push('/displacements');
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
                    <SwapVert sx={{ fontSize: 50 }} color='secondary' />
                    <Typography fontSize={50} textAlign={'center'}>Criar deslocamento</Typography>
                </Box>

                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 2, sm: 2, md: 6 }} justifyContent={'center'} maxWidth='600px'>
                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Km inicial"
                            type="number"
                            color="secondary"
                            value={kmInicial}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setKmInicial(Number(event.target.value));
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Checklist"
                            color="secondary"
                            value={checkList}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setCheckList(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Motivo"
                            color="secondary"
                            value={motivo}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setMotivo(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField

                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined"
                            variant="outlined"
                            label="Observação"
                            color="secondary"
                            value={observacao}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setObservacao(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleCreateDisplacement()}>Criar</Button>
                <Box />
            </Box>
            {created ?
                <Alert variant="filled" severity="success">
                    Deslocamento criado com sucesso! Redirecionando...
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