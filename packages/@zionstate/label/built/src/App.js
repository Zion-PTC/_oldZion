import { Base } from "@zionstate/base";
import { calcolaGuadagnoNetto } from "../lib/calcolaGuadagnoNetto.js";
import { caricaConfig } from "../lib/caricaConfig.js";
import { caricaReport } from "../lib/caricaReport.js";
import { creaZionCsv } from "../lib/creaZionCsv.js";
import { filterRecords } from "../lib/filterRecords.js";
import { showGraph } from "../lib/showGraph.js";
import { showRecords } from "../lib/showRecords.js";
export class App {
    recordsCache;
    resultCache;
    #nome;
    get nome() {
        return this.#nome;
    }
    #configPath;
    get configPath() {
        return this.#configPath;
    }
    get reports() {
        let quarters;
        (function (quarters) {
            quarters[quarters["Q1"] = 0] = "Q1";
            quarters[quarters["Q2"] = 1] = "Q2";
            quarters[quarters["Q3"] = 2] = "Q3";
            quarters[quarters["Q4"] = 3] = "Q4";
        })(quarters || (quarters = {}));
        return Base.basi
            .filter((b) => b.type === "report")
            .sort((a, b) => quarters[b.quarter] - quarters[a.quarter])
            .sort((a, b) => b.year - a.year);
    }
    config;
    accounts;
    constructor(nome, path, recordsCache = [], resultCache = 0) {
        this.recordsCache = recordsCache;
        this.resultCache = resultCache;
        this.#nome = nome;
        this.#configPath = path;
        const { accounts, configObj } = this.#caricaConfig();
        this.config = configObj;
        this.accounts = accounts;
    }
    #caricaConfig = caricaConfig;
    caricaReport = caricaReport;
    creaZionCsv = creaZionCsv;
    show() {
        console.log(this);
        return this;
    }
    showReports() {
        console.table(this.reports);
        return this;
    }
    showGraph = showGraph;
    showRecords = showRecords;
    filterRecords = filterRecords;
    calcolaGuadagnoNetto = calcolaGuadagnoNetto;
}
