"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes = void 0;
class Attributes {
    constructor(data) {
        this.data = data;
        //<K extends keyof T> informa que K pode ser apenas um dos tipos de dados de T
        //(key: K) associa o tipo de K para o valor key
        //T[K] pega o tipo de dados de T (vindo como argumento) e associa com K
        //arrow function serve para evitar o erro em this, na função get on()
        this.get = (key) => {
            return this.data[key];
        };
    }
    set(update) {
        Object.assign(this.data, update);
    }
    getAll() {
        return this.data;
    }
}
exports.Attributes = Attributes;
