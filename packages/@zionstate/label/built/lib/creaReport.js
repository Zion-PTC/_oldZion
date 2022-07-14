import { Report } from "../src/class/Report.js";
const pathRegexp = /(?<=[/_])\d*/g;
export function creaReport(path) {
    const res = pathRegexp.exec(path[0]);
    let nw = new Report(this.account, path, this.aggregator);
    // nw.path = res;
    this.aggregator.reports.push(nw);
    return this.this;
}
