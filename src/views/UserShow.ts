import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>Detalhes do usuario:</h1>
        <div>Usuario: ${this.model.get('name')}</div>
        <div>Idade: ${this.model.get('age')}</div>
      </div>
    `
  };
}