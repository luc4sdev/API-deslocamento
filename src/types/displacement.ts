export interface Displacement {
    id?: number;
    kmInicial?: number;
    kmFinal?: number;
    inicioDeslocamento?: string;
    fimDeslocamento?: string;
    checkList?: string;
    motivo?: string;
    observacao: string;
    idCondutor?: number;
    idVeiculo?: number;
    idCliente?: number;
}