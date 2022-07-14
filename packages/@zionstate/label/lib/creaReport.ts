import { IApp } from "../src/App";
import { IAccount } from "../src/class/Account.js";
import { IAggregatore } from "../src/class/Aggregatore.js";
import { Report } from "../src/class/Report.js";

const pathRegexp = /(?<=[/_])\d*/g;
export function creaReport(
  this: { this: IApp; aggregator: IAggregatore; account: IAccount },
  path: [string, string]
) {
  const res = pathRegexp.exec(path[0]);
  let nw = new Report(this.account, path, this.aggregator);
  // nw.path = res;
  this.aggregator.reports.push(nw);
  return this.this;
}
