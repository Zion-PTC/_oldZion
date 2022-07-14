import { reader } from "../src/Reader.js";
export function creaZionCsv(id) {
    if (this.reports) {
        let record = [];
        let csv = new reader.ZionCsv(this.reports[id].path);
        record = csv.records;
        if ("aggiungiRecord" in this.reports[id])
            this.reports[id].aggiungiRecord(record);
    }
    return this;
}
