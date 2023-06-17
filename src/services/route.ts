import axios from "axios";

interface Client {
    numeroDocumento: string;
    tipoDocumento: string;
    nome: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
}

interface Conductor {
    nome: string;
    numeroHabilitacao: string;
    categoriaHabilitacao: string;
    vencimentoHabilitacao: string;
}

interface Displacement {
    kmInicial: number;
    kmFinal: number;
    inicioDeslocamento: string;
    fimDeslocamento: string;
    checkList: string;
    motivo: string;
    observacao: string;
    idCondutor: number;
    idVeiculo: number;
    idCliente: number;
}

interface Vehicle {
    placa: string;
    marcaModelo: string;
    anoFabricacao: number;
    kmAtual: number;
}

type RequestBody = Client | Conductor | Displacement | Vehicle;


export const fetchData = async (url: string, id: number) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      const data = response.data;
      console.log('Dados recebidos:', data);
      return data;
    } catch (error) {
      console.error('Erro ao buscar os dados', error);
      return false;
    }
  };

export const postData = async (url: string, requestBody: RequestBody) => {
    try {
    const response = await axios.post(url, requestBody);

    const newClient = response.data;
    console.log(newClient);
    } catch (error) {
        console.error('Falha ao criar novo registro', error);
    }
};


export const deleteData = async (url: string, id: number) => {

    try {
        await axios.delete(`${url}/${id}`, {
            data: { id },
        });
        console.log('Recurso excluído com sucesso');
    } catch (error) {
        console.error('Falha ao excluir o recurso', error);
        return false;
    }
};



