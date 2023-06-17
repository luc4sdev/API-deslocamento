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


export async function getServerSideProps(clientId: string) {

    const data = await fetch(`https://api-deslocamento.herokuapp.com/api/v1/Cliente/${clientId}`)

    if(!data.ok) throw new Error('Error to fetch data')

    return data.json();

}

export const postData = async (url: string, requestBody: RequestBody) => {

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    const newClient = await response.json();
    console.log(newClient);
};


export const deleteData = async (url: string, id: string) => {

    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        console.log('Recurso excluído com sucesso');
    } else {
        console.log('Falha ao excluir o recurso');
    }
};



