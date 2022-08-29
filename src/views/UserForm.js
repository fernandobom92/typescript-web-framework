"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
const View_1 = require("./View");
class UserForm extends View_1.View {
    constructor() {
        super(...arguments);
        this.onSetAgeClick = () => {
            this.model.setRandomAge();
        };
        this.onSetNameClick = () => {
            const input = this.parent.querySelector('input');
            if (input) {
                const name = input.value;
                this.model.set({ name });
            }
        };
        this.onSaveClick = () => {
            this.model.save();
        };
    }
    eventsMap() {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        };
    }
    ;
    template() {
        return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Mudar o nomeClique em mim!</button>
        <button class="set-age">Gerar idade aleatoria</button>
        <button class="save-model">Salvar usuario</button>
      </div>
    `;
    }
    ;
}
exports.UserForm = UserForm;
