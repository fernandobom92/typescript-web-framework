export class Attributes<T> {
    constructor(private data: T) {}

    //<K extends keyof T> informa que K pode ser apenas um dos tipos de dados de T
    //(key: K) associa o tipo de K para o valor key
    //T[K] pega o tipo de dados de T (vindo como argumento) e associa com K
    //arrow function serve para evitar o erro em this, na função get on()

    get = <K extends keyof T>(key: K): T[K] => {
      return this.data[key];
    }
  
    set (update: T): void {
      Object.assign(this.data, update);
    }

    getAll(): T {
      return this.data;
    }
}