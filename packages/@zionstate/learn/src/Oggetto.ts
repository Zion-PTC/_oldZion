import { ITematica, Tematica } from "./Tematica.js";
import { ITutorial, Tutorial } from "./Tutorial";

// TODO capire come sostiruire oggetto a design pattern in tutorial.oggetto
export class Oggetto {
  constructor(
    public name: string = "nome",
    public description: string = "description",
    public tematica: ITematica = new Tematica()
  ) {}
}

export let CDCI = new Oggetto(
  "CI/CD Continuous Integration, Continous Deployment",
  ""
);
