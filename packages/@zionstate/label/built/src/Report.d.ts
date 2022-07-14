import { IBase, ABase } from "@zionstate/base";
interface IReport extends IBase {
    account: string;
    path: string;
    aggregatore: string;
    records: [];
    artisti?: Set<string>;
    filter(): IBase;
}
declare abstract class AReport extends ABase implements IReport {
    #private;
    account: string;
    path: string;
    get aggregatore(): string;
    get artisti(): Set<string>;
    set artisti(artisti: Set<string>);
    constructor(account?: string, path?: string);
}
export declare class Report extends AReport implements IReport {
}
export {};
