"use client";

import { Header } from "@/components/Header/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { postData } from "@/services/route";
import { Person } from "@mui/icons-material";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";



export default function Create() {

    const { newTheme } = useContext(ThemeContext);

    const [nome, setNome] = useState('');
    const [numeroHabilitacao, setNumeroHabilitacao] = useState('');
    const [categoriaHabilitacao, setCategoriaHabilitacao] = useState('');

    const [created, setCreated] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter();

    async function handleCreateConductor() {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        const requestBody = {
            nome: nome,
            numeroHabilitacao: numeroHabilitacao,
            categoriaHabilitacao: categoriaHabilitacao,
            vencimentoHabilitacao: formattedDate,
        };

        try {
            const res = await postData('https://api-deslocamento.herokuapp.com/api/v1/Condutor', requestBody)
            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setCreated(true)
            const redirectTimeout = setTimeout(() => {
                router.push('/conductors');
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
                    <Person sx={{ fontSize: 50 }} color='secondary' />
                    <Typography fontSize={50} textAlign={'center'}>Criar condutor</Typography>
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
                            label="Nome"
                            color="secondary"
                            value={nome}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNome(event.target.value);
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
                            label="Número da habilitação"
                            color="secondary"
                            value={numeroHabilitacao}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNumeroHabilitacao(event.target.value);
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
                            label="Categoria da habilitação"
                            color="secondary"
                            value={categoriaHabilitacao}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setCategoriaHabilitacao(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleCreateConductor()}>Criar</Button>
                <Box />
            </Box>
            {created ?
                <Alert variant="filled" severity="success">
                    Condutor criado com sucesso! Redirecionando...
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