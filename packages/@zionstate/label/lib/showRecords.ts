import { IApp } from "../src/App";
import { Report } from "../src/class/Report";
import { calcolaGuadagnoNetto } from "./calcolaGuadagnoNetto.js";
import { BelieveRecord } from "./creaZionCsv";

type reportNumber = string;

export function showRecords(this: IApp, id: number) {
  if (this.recordsCache) {
    // let records: BelieveRecord[] = this.reports[id].records;
    // const res = records.filter((r) => {
    //   const search = "Gotek";
    //   const artista = r["Nome dell'artista"];
    //   const track = r["Titolo della traccia"];
    //   const release = r["Titolo dell'uscita"];
    //   const label = r["Nome dell'etichetta"];
    //   const region = r["Paese / Regione"];
    //   const platform = r.Piattaforma;
    //   const releaseType = r["Tipo di uscita"];
    //   const saleType = r["Tipo di vendita"];
    //   const salemonth = r["Mese di vendita"];
    //   const reportmonth = r["Mese di Reporting"];
    //   const ricavo = r["Guadagno netto"];
    //   return artista === search;
    // });
    console.log(this.recordsCache);
  }
  return this;
}
