declare class Invoice {
    readonly client: string;
    private details;
    amount: number;
    constructor(c: string, d: string, a: number);
    format(): string;
}
declare const inv1: Invoice;
declare const inv2: Invoice;
declare let invoices: Invoice[];
declare class Invoice2 {
    #private;
    readonly client: string;
    amount: number;
    constructor(c: string, d: string, a: number);
    format(): string;
}
declare const inv3: Invoice2;
declare class Invoice3 {
    readonly client: string;
    private details;
    amount: number;
    constructor(client: string, details: string, amount: number);
    format(): string;
}
