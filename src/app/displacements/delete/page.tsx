"use client";

import { Header } from "@/components/Header/Header";
import { ThemeContext } from "@/contexts/theme-context";
import { deleteData } from "@/services/route";
import { SwapVert } from "@mui/icons-material";
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
            const res = await deleteData('https://api-deslocamento.herokuapp.com/api/v1/Deslocamento', id)
            if(res === false) {
                setError(true)
                return;
            }
            setDeleted(true)
            const redirectTimeout = setTimeout(() => {
                router.push('/displacements'); 
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
                    <SwapVert sx={{ fontSize: 50 }} color='secondary' />
                    <Typography fontSize={50} textAlign={'center'}>Deletar deslocamento</Typography>
                    <Typography fontSize={20} marginTop={2} marginBottom={2} textAlign={'center'}>Digite o ID do deslocamento a ser deletado:</Typography>
                    <TextField
                            
                            InputProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' }
                            }}
                            InputLabelProps={{
                                style: { color: newTheme === 'dark' ? 'white' : 'black' },
                            }}
                            id="outlined-required"
                            variant="outlined"
                            label="ID"  
                            color="secondary"
                            value={id}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setId(Number(event.target.value));
                            }}
                        />
                </Box>

                <Button variant="contained" color="secondary" size="large" onClick={() => handleDelete()}>Deletar</Button>
                <Box />
            </Box>

            {deleted ? 
                <Alert variant="filled" severity="success">
                    Deslocamento deletado com sucesso! Redirecionando...
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