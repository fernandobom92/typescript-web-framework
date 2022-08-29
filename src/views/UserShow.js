"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShow = void 0;
const View_1 = require("./View");
class UserShow extends View_1.View {
    template() {
        return `
      <div>
        <h1>Detalhes do usuario:</h1>
        <div>Usuario: ${this.model.get('name')}</div>
        <div>Idade: ${this.model.get('age')}</div>
      </div>
    `;
    }
    ;
}
exports.UserShow = UserShow;
