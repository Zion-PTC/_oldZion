import { Base, IBase } from "@zionstate/base";
import { Report } from "./Report";

export interface IAggregatore extends IBase {
  nome: "awal" | "believe";
  reports: Report[];
  aggiungiReport(report: Report): IBase;
}

export class Aggregatore extends Base implements IAggregatore {
  type: string = "aggregatore";
  nome: "awal" | "believe" = "awal";
  reports: Report[] = [];
  constructor() {
    super();
  }
  aggiungiReport(report: Report) {
    this.reports.push(report);
    return this;
  }
}

export const awal = new Aggregatore();
awal.nome = "awal";

export const believe = new Aggregatore();
awal.nome = "believe";
