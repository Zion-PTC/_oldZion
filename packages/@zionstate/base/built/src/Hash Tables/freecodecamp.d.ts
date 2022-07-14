export declare class HashTable {
    table: any[];
    size: number;
    constructor();
    _hash(key: string): number;
    set(key: string, value: any): void;
    get(key: string): any;
    remove(key: string): boolean | undefined;
    display(): void;
}
