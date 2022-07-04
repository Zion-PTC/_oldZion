import { Tematica } from "./Tematica";
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
export let CDCI = new Oggetto("CI/CD Continuous Integration, Continous Deployment", "");
