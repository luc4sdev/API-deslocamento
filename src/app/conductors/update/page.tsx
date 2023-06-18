"use client";

import { BasicCard } from "@/components/BasicCard/BasicCard";
import { Header } from "@/components/Header/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { fetchData, updateData } from "@/services/route";
import { Person } from "@mui/icons-material";
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

interface Conductor {
    id: number;
    nome: string;
    numeroHabilitacao: string;
    categoriaHabilitacao: string;
    vencimentoHabilitacao: string;
}


export default function Update() {

    const { newTheme } = useContext(ThemeContext);

    const [id, setId] = useState(0);


    const [conductor, setConductor] = useState<Conductor>()
    const [find, setFind] = useState(false)
    const [edit, setEdit] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [error, setError] = useState(false)
    const buttonOff = true;
    const router = useRouter();



    async function handleSearch() {
        try {
            setFind(false)
            const res = await fetchData('https://api-deslocamento.herokuapp.com/api/v1/Condutor', id)
            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setConductor(res);
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
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();
        const requestBody = {
            id: id,
            vencimentoHabilitacao: formattedDate
        };

        try {
            const res = await updateData('https://api-deslocamento.herokuapp.com/api/v1/Condutor', id, requestBody)

            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setUpdated(true)
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
                {edit ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px' }} >
                        <Typography fontSize={20} marginTop={2} marginBottom={2} textAlign={'center'}>Atualizar vencimento da habilitação com a data atual?</Typography>
                        <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleUpdate()}>Atualizar</Button>
                    </Box>
                    :
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Person sx={{ fontSize: 50 }} color='secondary' />
                            <Typography fontSize={50} textAlign={'center'}>Atualizar condutor</Typography>
                            <Typography fontSize={20} marginTop={2} marginBottom={2} textAlign={'center'}>Digite o ID do condutor a ser atualizado:</Typography>
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
                                    <BasicCard conductor={conductor} buttonOff={buttonOff} />
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
                    Condutor atualizado com sucesso! Redirecionando...
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