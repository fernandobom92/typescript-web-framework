"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
class View {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.regions = {};
        this.bindModel();
    }
    //recebe o seletor de HTML, ex: .class-name
    regionsMap() {
        return {};
    }
    ;
    eventsMap() {
        return {};
    }
    ;
    bindModel() {
        this.model.on('change', () => {
            this.render();
        });
    }
    bindEvents(fragment) {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            //eventName recebe 'click' e selector recebe 'button'
            const [eventName, selector] = eventKey.split(':');
            //retorna um array com os valores de selector
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }
    mapRegions(fragment) {
        const regionsMap = this.regionsMap();
        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            //verifica se o elemento existe, aceita apenas se o valor não for null ou undefined
            if (element) {
                this.regions[key] = element;
            }
        }
    }
    //método vazio apenas para remover o erro do método render()
    onRender() { }
    render() {
        //esvazia o conteudo do elemento ao iniciar
        this.parent.innerHTML = '';
        //converte a string em um template HTML do tipo 'template'
        const templateElement = document.createElement('template');
        //joga o conteudo de template() em templateElement
        templateElement.innerHTML = this.template();
        //amarra os eventos no HTML
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);
        this.onRender();
        //anexa o conteudo de templateElement em parent
        this.parent.append(templateElement.content);
    }
}
exports.View = View;
