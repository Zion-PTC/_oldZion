import { Base } from "@zionstate/base";
export class Aggregatore extends Base {
    type = "aggregatore";
    nome = "awal";
    reports = [];
    constructor() {
        super();
    }
    aggiungiReport(report) {
        this.reports.push(report);
        return this;
    }
}
export const awal = new Aggregatore();
awal.nome = "awal";
export const believe = new Aggregatore();
awal.nome = "believe";
