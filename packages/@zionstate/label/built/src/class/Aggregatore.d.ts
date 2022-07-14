import { Base, IBase } from "@zionstate/base";
import { Report } from "./Report";
export interface IAggregatore extends IBase {
    nome: "awal" | "believe";
    reports: Report[];
    aggiungiReport(report: Report): IBase;
}
export declare class Aggregatore extends Base implements IAggregatore {
    type: string;
    nome: "awal" | "believe";
    reports: Report[];
    constructor();
    aggiungiReport(report: Report): this;
}
export declare const awal: Aggregatore;
export declare const believe: Aggregatore;
