export interface Client {
    id?: number;
    numeroDocumento?: string;
    tipoDocumento?: string;
    nome: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
}