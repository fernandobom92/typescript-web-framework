import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data; //pega o valor de id (vindo de data) e joga na variavel id

    //verifica se o usuário já existe ou cria um novo usuário
    if (id) {
        return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
        return axios.post(this.rootUrl, data);
    }
  }
}