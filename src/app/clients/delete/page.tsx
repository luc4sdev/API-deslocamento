"use client";

import { Header } from "@/components/Header/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { deleteData } from "@/services/route";
import { AccountBox } from "@mui/icons-material";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";



export default function Delete() {

    const { newTheme } = useContext(ThemeContext);

    const [id, setId] = useState(0);



    const [deleted, setDeleted] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter();

    async function handleDelete() {

        try {
            const res = await deleteData('https://api-deslocamento.herokuapp.com/api/v1/Cliente', id)
            if (res === false) {
                setError(true)
                const timeout = setTimeout(() => {
                    setError(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
            setDeleted(true)
            const redirectTimeout = setTimeout(() => {
                router.push('/clients');
            }, 2000);

            return () => clearTimeout(redirectTimeout);
        } catch (error) {
            console.error('Falha ao excluir o recurso', error);
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
                    <AccountBox sx={{ fontSize: 50 }} color='secondary' />
                    <Typography fontSize={50} textAlign={'center'}>Deletar cliente</Typography>
                    <Typography fontSize={20} marginTop={2} marginBottom={2} textAlign={'center'}>Digite o ID do cliente a ser deletado:</Typography>
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

                <Button variant="contained" color="secondary" size="large" sx={{ fontWeight: '600' }} onClick={() => handleDelete()}>Deletar</Button>
                <Box />
            </Box>

            {deleted ?
                <Alert variant="filled" severity="success">
                    Cliente deletado com sucesso! Redirecionando...
                </Alert>
                : error ?
                    <Alert variant="filled" severity="error">
                        Houve um erro. Verifique se o ID digitado é válido.
                    </Alert>
                    : ''
            }
        </Box>
    )
}