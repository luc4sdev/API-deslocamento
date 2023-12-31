import { Client } from "@/types/client";
import { Conductor } from "@/types/conductor";
import { Displacement } from "@/types/displacement";
import { Vehicle } from "@/types/vehicle";
import axios from "axios";


type RequestBody = Client | Conductor | Displacement | Vehicle;


export const postData = async (url: string, requestBody: RequestBody) => {
    try {
        const response = await axios.post(url, requestBody);

        const newData = response.data;
        console.log(newData);
    } catch (error) {
        console.error('Falha ao criar novo registro', error);
        return false;
    }
};

export const fetchAllData = async (url: string) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log('Dados recebidos:', data);
        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados', error);
    }
};

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


export const updateData = async (url: string, id: number, requestBody: RequestBody, url2?: string) => {

    try {
        if (url2) {
            const response = await axios.put(`${url}/${id}/${url2}`, requestBody);
            const updatedData = response.data;
            console.log('Dados atualizados:', updatedData);
        }
        else {
            const response = await axios.put(`${url}/${id}`, requestBody);
            const updatedData = response.data;
            console.log('Dados atualizados:', updatedData);
        }
    } catch (error) {
    console.error('Erro ao atualizar os dados', error);
    return false;
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



