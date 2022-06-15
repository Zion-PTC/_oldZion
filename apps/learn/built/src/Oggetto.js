import { devOPS, Tematica } from "./Tematica";
// TODO capire come sostiruire oggetto a design pattern in tutorial.oggetto
export class Oggetto {
    name;
    description;
    tematica;
    constructor(name = "nome", description = "description", tematica = new Tematica()) {
        this.name = name;
        this.description = description;
        this.tematica = tematica;
    }
}
export let CDCI = new Oggetto("CI/CD Continuous Integration, Continous Deployment", "", devOPS);
