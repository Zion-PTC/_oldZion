import { IApp } from "../src/App";
import { BelieveRecord } from "./creaZionCsv";

function mapNcalculate(res: BelieveRecord[]) {
  return res
    .map((r) => Number(r["Guadagno netto"].replace(",", ".")))
    .reduce((p, c) => p + c);
}

export function calcolaGuadagnoNetto(
  this: IApp,
  records: BelieveRecord[]
): IApp;
export function calcolaGuadagnoNetto(this: IApp, records?: BelieveRecord[]) {
  if (!records) {
    let res = mapNcalculate(this.recordsCache);
    this.resultsCache = res;
    console.log(res);
    return this;
  }
  if (records) return mapNcalculate(records);
}
