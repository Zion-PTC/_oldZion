import { IApp } from "../src/App";
import { IAccount } from "../src/class/Account.js";
import { IAggregatore } from "../src/class/Aggregatore.js";
export declare function creaReport(this: {
    this: IApp;
    aggregator: IAggregatore;
    account: IAccount;
}, path: [string, string]): IApp;
