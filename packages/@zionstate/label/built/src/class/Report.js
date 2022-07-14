// controlla nella cartella di sistema dell'applicazione la
// presenza di reports.
import { ABase } from "@zionstate/base";
const coderegexp = /\d*/g;
var Quarters;
(function (Quarters) {
    Quarters["01010331"] = "Q1";
    Quarters["04010630"] = "Q2";
    Quarters["07010930"] = "Q3";
    // TODO sistemare creando un package time dove gestire
    // questioni relative al tempo
    //@ts-expect-error
    Quarters["10011231"] = "Q4";
})(Quarters || (Quarters = {}));
const oo = new Set();
class AReport extends ABase {
    account;
    aggregatore;
    client_code;
    from;
    to;
    year;
    quarter;
    net;
    type = "report";
    #artisti = new Set();
    get artisti() {
        return this.#artisti;
    }
    set artisti(artisti) {
        this.#artisti = artisti;
    }
    #records = [];
    get records() {
        return this.#records;
    }
    path;
    file_name;
    constructor(account, fileInfos = ["path", "file_name"], aggregatore, client_code, from = 0, to = 0, year = 0, quarter = 0, net = 0) {
        super();
        this.account = account;
        this.aggregatore = aggregatore;
        this.client_code = client_code;
        this.from = from;
        this.to = to;
        this.year = year;
        this.quarter = quarter;
        this.net = net;
        this.path = fileInfos[0];
        this.file_name = fileInfos[1];
        let code = this.file_name
            .match(coderegexp)
            ?.filter((r) => r !== "");
        if (code) {
            this.client_code = parseFloat(code[1]);
            this.from = parseFloat(code[2]);
            this.to = parseFloat(code[3]);
            this.year = parseFloat(code[3].slice(0, 4));
            // TODO controllare la situazione di questo errore
            // dopo che ho creato il package timeù
            // @ts-expect-error
            this.quarter = Quarters[code[2].slice(4) + code[3].slice(4)];
        }
    }
    aggiungiRecord(record) {
        console.log("called");
        this.#records = record;
        return this;
    }
}
export class Report extends AReport {
}
