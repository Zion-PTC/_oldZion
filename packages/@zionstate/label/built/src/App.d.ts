import { IBase } from "@zionstate/base";
import { calcolaGuadagnoNetto } from "../lib/calcolaGuadagnoNetto.js";
import { caricaReport } from "../lib/caricaReport.js";
import { BelieveRecord, creaZionCsv } from "../lib/creaZionCsv.js";
import { filterRecords } from "../lib/filterRecords.js";
import { showGraph } from "../lib/showGraph.js";
import { showRecords } from "../lib/showRecords.js";
import { IAccount } from "./class/Account.js";
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
export declare class App implements IApp {
    #private;
    recordsCache: BelieveRecord[];
    resultCache: number;
    get nome(): string;
    get configPath(): string;
    get reports(): import("@zionstate/base/built/src/Base").IBase[];
    config: {};
    accounts: IAccount[];
    constructor(nome: string, path: string, recordsCache?: BelieveRecord[], resultCache?: number);
    caricaReport: typeof caricaReport;
    creaZionCsv: typeof creaZionCsv;
    show(this: IApp): IApp;
    showReports(this: IApp): IApp;
    showGraph: typeof showGraph;
    showRecords: typeof showRecords;
    filterRecords: typeof filterRecords;
    calcolaGuadagnoNetto: typeof calcolaGuadagnoNetto;
}
