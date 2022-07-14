export class Tematica {
    types;
    nome;
    static tematiche = [];
    id;
    constructor(types = "Design Pattern", nome = "nome") {
        this.types = types;
        this.nome = nome;
        Tematica.tematiche.push(this);
        this.id = Tematica.tematiche.length;
    }
}
// export let devOPS = new Tematica("Server", "DevOps");
