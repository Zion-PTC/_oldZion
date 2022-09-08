import { FS } from "@zionstate/database";
import { DesignPattern, Esercizio } from "@zionstate/learn";
import { getEsercizi } from "./lib/esercizi.js";

const ZionYaml = FS.ZionYaml;

type EserciziMD = {
  nome?: string;
  autore?: string;
  oggetti?: string[];
  file?: { path: string };
};
let EserciziMDs = getEsercizi();
function creaBlogPost(path: string) {
  let yaml = new ZionYaml<EserciziMD>(path);
  let parsed = yaml.parsed;
  let nwEsercizio = new Esercizio();
  if (parsed.nome) nwEsercizio.nome = parsed.nome;
  if (parsed.autore) nwEsercizio.autore = parsed.autore;
  if (parsed.oggetti) {
    let res = parsed.oggetti.map((oggetto) => {
      let res = DesignPattern.designPatterns.find((dp) => dp.nome === oggetto);
      if (res) return res;
    });
    res.forEach((res) => {
      if (res) nwEsercizio.aggiungiOggetto(res);
    });
  }
  if (parsed.file) nwEsercizio.file = parsed.file;
}
EserciziMDs.forEach(creaBlogPost);

export default Esercizio;
