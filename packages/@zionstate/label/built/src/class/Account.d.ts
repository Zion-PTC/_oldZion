import { Base } from "@zionstate/base";
export interface IAccount {
    nome?: string;
    paths?: string[];
}
export declare class Account extends Base implements IAccount {
    nome?: string | undefined;
    paths?: string[] | undefined;
    constructor(nome?: string | undefined, paths?: string[] | undefined);
}
