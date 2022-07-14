// controlla nella cartella di sistema dell'applicazione la
// presenza di reports.
import { ABase } from "@zionstate/base";
const oo = new Set();
class AReport extends ABase {
    account;
    path;
    #aggregatore = "AWAL";
    get aggregatore() {
        return this.#aggregatore;
    }
    #artisti = new Set();
    get artisti() {
        return this.#artisti;
    }
    set artisti(artisti) {
        this.#artisti = artisti;
    }
    constructor(account = "Account", path = "path") {
        super();
        this.account = account;
        this.path = path;
    }
}
export class Report extends AReport {
}
