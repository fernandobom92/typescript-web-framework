"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSync = void 0;
const axios_1 = __importDefault(require("axios"));
class ApiSync {
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
    }
    fetch(id) {
        return axios_1.default.get(`${this.rootUrl}/${id}`);
    }
    save(data) {
        const { id } = data; //pega o valor de id (vindo de data) e joga na variavel id
        //verifica se o usuário já existe ou cria um novo usuário
        if (id) {
            return axios_1.default.put(`${this.rootUrl}/${id}`, data);
        }
        else {
            return axios_1.default.post(this.rootUrl, data);
        }
    }
}
exports.ApiSync = ApiSync;
