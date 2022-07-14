import mongoose from "mongoose";
/**
 **/
export interface ZionError {
    name: string;
    message: string;
    stack?: string;
}
/**
 * @param message It's the name which appear in the console log
 * @param name It's the name which appear in the console log
 * @param args Object containing the called parameters
 */
export declare class ZionError extends Error {
    args?: string[] | undefined;
    constructor(message?: string, name?: string, args?: string[] | undefined);
    log(): void;
}
export declare let ZionErrorDoc: mongoose.Model<any, {}, {}, {}>;
