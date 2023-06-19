"use client";

import { BasicCard } from "@/components/BasicCard/BasicCard";
import { Header } from "@/components/Header/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { fetchData, updateData } from "@/services/route";
import { DirectionsCar } from "@mui/icons-material";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

interface Vehicle {
    id: number;
    placa: string;
    marcaModelo: string;
    anoFabricacao: number;
    kmAtual: number;
}


export default function Update() {

    const { newTheme } = useContext(ThemeContext);

    const [id, setId] = useState(0);


    const [vehicle, setVehicle] = useState<Vehicle>()
    const [find, setFind] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [error, setError] = useState(false)
    const buttonOff = true;
    const router = useRouter();


    const [marcaModelo, setMarcaModelo] = useState('');
    const [anoFabricacao, setAnoFabricacao] = useState(0);
    const [kmAtual, setKmAtual] = useState(0);

    async function handleSearch() {
        try {
            setFind(false)
            const res = await fetchData('https://api-deslocamento.herokuapp.com/api/v1/Veiculo', id)
            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setVehicle(res);
            setFind(true)

        } catch (error) {
            console.error('Falha ao excluir o recurso', error);
            setError(true)
        }

    }

    function handleEdit() {
        setEdit(true)
    }


    async function handleUpdate() {

        const requestBody = {
            id: id,
            marcaModelo: marcaModelo,
            anoFabricacao: anoFabricacao,
            kmAtual: kmAtual
        };

        try {
            const res = await updateData('https://api-deslocamento.herokuapp.com/api/v1/Veiculo', id, requestBody)

            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setUpdated(true)
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
                {edit ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }} >
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
                        <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleUpdate()}>Atualizar</Button>
                    </Box>
                    :
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <DirectionsCar sx={{ fontSize: 50 }} color='secondary' />
                            <Typography fontSize={50} textAlign={'center'}>Atualizar veículo</Typography>
                            <Typography fontSize={20} marginTop={2} marginBottom={2} textAlign={'center'}>Digite o ID do veículo a ser atualizado:</Typography>
                            <TextField

                                InputProps={{
                                    style: { color: newTheme === 'dark' ? 'white' : 'black' }
                                }}
                                InputLabelProps={{
                                    style: { color: newTheme === 'dark' ? 'white' : 'black' },
                                }}
                                id="outlined"
                                variant="outlined"
                                label="ID"
                                color="secondary"
                                value={id}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setId(Number(event.target.value));
                                }}
                            />
                        </Box>

                        <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleSearch()}>Buscar</Button>

                        <Box>
                            {find ?
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} gap={3}>
                                    <BasicCard vehicle={vehicle} buttonOff={buttonOff} />
                                    <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleEdit()}>Editar</Button>
                                </Box>
                                : ''}
                        </Box>
                        <Box />
                    </>
                }
            </Box>






            {updated ?
                <Alert variant="filled" severity="success">
                    Veículo atualizado com sucesso! Redirecionando...
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