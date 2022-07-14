import { Base } from "@zionstate/base";
export class Account extends Base {
    nome;
    paths;
    constructor(nome, paths) {
        super();
        this.nome = nome;
        this.paths = paths;
        this.type = "account";
    }
}
