"use strict";
//gerencia todos os eventos de um usuario
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eventing = void 0;
class Eventing {
    constructor() {
        //key: string indica que não sabemos os key/values
        this.events = {};
        this.on = (eventName, callback) => {
            const handlers = this.events[eventName] || [];
            handlers.push(callback);
            this.events[eventName] = handlers;
        };
        this.trigger = (eventName) => {
            const handlers = this.events[eventName];
            if (!handlers || handlers.length === 0) {
                return;
            }
            handlers.forEach(callback => {
                callback();
            });
        };
    }
}
exports.Eventing = Eventing;
