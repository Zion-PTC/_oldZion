import { IBase, ABase } from "@zionstate/base";
import { BelieveRecord } from "../../lib/creaZionCsv";
import { IAccount } from "./Account";
import { IAggregatore } from "./Aggregatore";
export interface IReport extends IBase {
    account: IAccount;
    path: string;
    aggregatore: IAggregatore;
    records: BelieveRecord[];
    aggiungiRecord(record: BelieveRecord[]): IReport;
}
declare type path = string;
declare type filename = string;
declare abstract class AReport extends ABase implements IReport, IBase {
    #private;
    account: IAccount;
    aggregatore: IAggregatore;
    client_code: number;
    from: number;
    to: number;
    year: number;
    quarter: number;
    net: number;
    type: string;
    get artisti(): Set<string>;
    set artisti(artisti: Set<string>);
    get records(): BelieveRecord[];
    path: path;
    file_name: filename;
    constructor(account: IAccount, fileInfos: [string, string] | undefined, aggregatore: IAggregatore, client_code: number, from?: number, to?: number, year?: number, quarter?: number, net?: number);
    aggiungiRecord(record: BelieveRecord[]): IReport;
}
export declare class Report extends AReport implements IReport, IBase {
}
export {};
