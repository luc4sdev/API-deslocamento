"use client";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface BasicCardProps {
  client?: {
    id: number;
    numeroDocumento: string;
    tipoDocumento: string;
    nome: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
  },
  conductor?: {
    id: number;
    nome: string;
    numeroHabilitacao: string;
    categoriaHabilitacao: string;
    vencimentoHabilitacao: Date;
  },
  displacement?: {
    id: number;
    kmInicial: number;
    kmFinal: number;
    inicioDeslocamento: Date;
    fimDeslocamento: Date;
    checkList: string;
    motivo: string;
    observacao: string;
    idCondutor: number;
    idVeiculo: number;
    idCliente: number;
  },
  vehicle?: {
    id: number;
    placa: string;
    marcaModelo: string;
    anoFabricacao: number;
    kmAtual: number;
  },
  buttonOff?: boolean;
}

export function BasicCard({ client, conductor, displacement, vehicle, buttonOff }: BasicCardProps) {
  return (
    <Card sx={{ backgroundColor: 'primary.dark' }}>
      {client && (
        <>
          <CardContent>

            <Typography color="primary.light" variant="h5" component="div">
              Nome: {client?.nome}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Número do documento: {client?.numeroDocumento}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Tipo do documento: {client?.tipoDocumento}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Logradouro: {client?.logradouro}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Número: {client?.numero}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Bairro: {client?.bairro}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Cidade: {client?.cidade}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Uf: {client?.uf}
            </Typography>

          </CardContent>
          <CardActions>
            {!buttonOff && (
              <Link href={`/clients/read/${client.id}`}>
                <Button variant="contained" color='secondary' size="small" >Ver cliente</Button>
              </Link>

            )}
          </CardActions>
        </>
      )}

      {conductor && (
        <>
          <CardContent>

            <Typography color="primary.light" variant="h5" component="div">
              Nome: {conductor?.nome}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Número da habilitação: {conductor?.numeroHabilitacao}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Categoria da habilitação: {conductor?.categoriaHabilitacao}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Vencimento da habilitação: {String(conductor?.vencimentoHabilitacao)}
            </Typography>



          </CardContent>
          <CardActions>
            {!buttonOff && (
            <Link href={`/conductors/read/${conductor.id}`}>
            <Button variant="contained" color='secondary' size="small" >Ver condutor</Button>
          </Link>
            )}
          </CardActions>
        </>
      )}

      {displacement && (
        <>
          <CardContent>

            <Typography color="primary.light" variant="h5" component="div">
              Km Inicial: {displacement?.kmInicial}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Km Final: {displacement?.kmFinal}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Início do deslocamento: {String(displacement?.inicioDeslocamento)}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Fim do deslocamento: {String(displacement?.fimDeslocamento)}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Checklist: {displacement?.checkList}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Motivo: {displacement?.motivo}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Observação: {displacement?.observacao}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Id do condutor: {displacement?.idCondutor}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Id do veículo: {displacement?.idVeiculo}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Id do cliente: {displacement?.idCliente}
            </Typography>


          </CardContent>
          <CardActions>
            {!buttonOff && (
              <Link href={`/displacements/read/${displacement.id}`}>
              <Button variant="contained" color='secondary' size="small" >Ver deslocamento</Button>
            </Link>
            )}
          </CardActions>
        </>
      )}

      {vehicle && (
        <>
          <CardContent>

            <Typography color="primary.light" variant="h5" component="div">
              Placa: {vehicle?.placa}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Marca/Modelo: {vehicle?.marcaModelo}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Ano de fabricação: {vehicle?.anoFabricacao}
            </Typography>
            <Typography color="primary.light" variant="h5" component="div">
              Km atual: {vehicle?.kmAtual}
            </Typography>

          </CardContent>
          <CardActions>
            {!buttonOff && (
              <Link href={`/vehicles/read/${vehicle.id}`}>
              <Button variant="contained" color='secondary' size="small" >Ver veículo</Button>
            </Link>
            )}
          </CardActions>
        </>
      )}
    </Card>
  );
}
