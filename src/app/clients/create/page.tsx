"use client";

import { Header } from "@/components/Header/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { postData } from "@/services/route";
import { AccountBox } from "@mui/icons-material";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";



export default function Create() {

    const { newTheme } = useContext(ThemeContext);

    const [nome, setNome] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const [created, setCreated] = useState(false)
    const router = useRouter();
    
    async function handleCreateClient() {
        const requestBody = {
            nome: nome,
            numeroDocumento: numeroDocumento,
            tipoDocumento: tipoDocumento,
            logradouro: logradouro,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
        };
        await postData('https://api-deslocamento.herokuapp.com/api/v1/Cliente', requestBody)
        setCreated(true)
        const redirectTimeout = setTimeout(() => {
            router.push('/clients'); 
          }, 2000); 
      
          return () => clearTimeout(redirectTimeout);
    }

    return (
        <Box color='primary.light' sx={{ width: '100vw', height: '100vh', backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <Box sx={{
                backgroundColor: 'primary.main', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', flexGrow: 1,
            }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <AccountBox sx={{ fontSize: 50 }} color='secondary' />
                    <Typography fontSize={50} textAlign={'center'}>Criar cliente</Typography>
                </Box>

                <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 2, sm: 2, md: 6 }} justifyContent={'center'} maxWidth='600px'>
                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="Nome"
                            color="secondary"
                            value={nome}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNome(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }

                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="Número do documento"
                            color="secondary"
                            value={numeroDocumento}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNumeroDocumento(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="Tipo do documento"
                            color="secondary"
                            value={tipoDocumento}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setTipoDocumento(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="Logradouro"
                            color="secondary"
                            value={logradouro}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setLogradouro(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="Número"
                            color="secondary"
                            value={numero}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNumero(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="Bairro"
                            color="secondary"
                            value={bairro}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setBairro(event.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="Cidade"
                            color="secondary"
                            value={cidade}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setCidade(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} sm={2} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            required
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="UF"
                            color="secondary"
                            value={uf}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setUf(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="secondary" size="large" onClick={() => handleCreateClient()}>Criar</Button>
                <Box />
            </Box>

            {created && (
                <Alert variant="filled" severity="success">
                    Cliente criado com sucesso! Redirecionando...
                </Alert>
            )}
        </Box>
    )
}