import { Base, IBase } from "@zionstate/base";
import { calcolaGuadagnoNetto } from "../lib/calcolaGuadagnoNetto.js";
import { caricaConfig } from "../lib/caricaConfig.js";
import { caricaReport } from "../lib/caricaReport.js";
import { BelieveRecord, creaZionCsv } from "../lib/creaZionCsv.js";
import { filterRecords } from "../lib/filterRecords.js";
import { showGraph } from "../lib/showGraph.js";
import { showRecords } from "../lib/showRecords.js";
import { IAccount, Account } from "./class/Account.js";
import { Aggregatore } from "./class/Aggregatore.js";
import { IReport, Report } from "./class/Report.js";

export interface IApp {
  nome: string;
  configPath: string;
  reports?: IBase[];
  recordsCache: BelieveRecord[];
  resultsCache: number;
  caricaReport(this: IApp, account: string, aggregatore: string): IApp;
  creaZionCsv(id: number): IApp;
  show(): IApp;
  showReports(): IApp;
  showGraph(): IApp;
  showRecords(id: number): IApp;
  filterRecords(this: IApp, key: string, value: string): IApp;
  calcolaGuadagnoNetto(this: IApp, res: BelieveRecord[]): IApp;
}

export class App implements IApp {
  #nome: string;
  get nome(): string {
    return this.#nome;
  }
  #configPath: string;
  get configPath(): string {
    return this.#configPath;
  }
  get reports() {
    enum quarters {
      Q1,
      Q2,
      Q3,
      Q4,
    }
    return Base.basi
      .filter((b) => b.type === "report")
      .sort((a, b) => quarters[b.quarter] - quarters[a.quarter])
      .sort((a, b) => b.year - a.year);
  }
  config: {};
  accounts: IAccount[];
  constructor(
    nome: string,
    path: string,
    public recordsCache: BelieveRecord[] = [],
    public resultCache: number = 0
  ) {
    this.#nome = nome;
    this.#configPath = path;
    const { accounts, configObj } = this.#caricaConfig();
    this.config = configObj;
    this.accounts = accounts;
  }
  #caricaConfig = caricaConfig;
  caricaReport = caricaReport;
  creaZionCsv = creaZionCsv;
  show(this: IApp): IApp {
    console.log(this);
    return this;
  }
  showReports(this: IApp): IApp {
    console.table(this.reports);
    return this;
  }
  showGraph = showGraph;
  showRecords = showRecords;
  filterRecords = filterRecords;
  calcolaGuadagnoNetto = calcolaGuadagnoNetto;
}
