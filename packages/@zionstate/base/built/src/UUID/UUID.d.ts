export { validate, v5 } from "uuid";
export interface SplittedHash {
    hex1: string[8];
    hex2: string[4];
    hex3: string[3];
    hex4: string[3];
    hex5: string[12];
}
export declare class UUID {
    #private;
    value: string;
    from: string;
    constructor(string: string, from: string);
}
