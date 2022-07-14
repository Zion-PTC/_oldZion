import { Base } from "@zionstate/base";
import { App, IApp } from "../src/App";
import { Aggregatore } from "../src/class/Aggregatore.js";
import { reader } from "../src/class/Reader.js";
import { creaReport } from "./creaReport.js";
import fs from "fs";

const onlyCsv = /.csv/g;
const pathy = "/Users/WAW/Documents/Believe/";
export function caricaReport(
  this: IApp,
  account_nome: string,
  aggregatore: string
) {
  // TODO errore ts nuovo1
  //@ts-expect-error
  let account = Base.basi.find((b) => b.nome === account_nome);
  // TODO errore ts nuovo1
  //@ts-expect-error
  let aggregator = Aggregatore.basi.find((b) => b.nome === aggregatore);
  // TODO errore ts nuovo1
  //@ts-expect-error
  let res = account.paths.find((a) => {
    for (let key in a) {
      // TODO errore ts nuovo1
      //@ts-expect-error
      if (key === aggregator.nome) return true;
    }
  });
  // TODO errore ts nuovo1
  //@ts-expect-error

  let paths = res[aggregator.nome];
  let path = reader.joinPaths(paths);
  let files2 = reader.readFilesInFolder("/" + path);
  console.log(this.configPath);

  let files = reader
    .readFilesInFolder("/" + path)
    .map((f) => [f.path, f.name])
    .filter((f) => f[0].match(onlyCsv)?.length);
  files.forEach(creaReport, { this: this, aggregator, account });
  return this;
}
