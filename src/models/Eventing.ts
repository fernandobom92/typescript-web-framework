//gerencia todos os eventos de um usuario

//cria uma alias para indicar o tipo de dado como uma função que não retorna nada
type Callback = () => void;

export class Eventing {
  //key: string indica que não sabemos os key/values
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if(!handlers || handlers.length === 0) {
      return;
    } 

    handlers.forEach(callback => {
      callback();
    });
  }
}