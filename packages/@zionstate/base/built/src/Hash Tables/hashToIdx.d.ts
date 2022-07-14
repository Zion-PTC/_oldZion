export declare class HashTable {
    #private;
    table: any[];
    get size(): number;
    constructor(size: number);
    set(key: string, value: any): void;
}
