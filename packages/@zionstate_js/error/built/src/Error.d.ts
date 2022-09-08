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
    args?: IArguments | string[] | undefined;
    constructor(message?: string, name?: string, args?: IArguments | string[] | undefined);
    log(): void;
}
export declare let ZionErrorDoc: mongoose.Model<{
    message?: string | undefined;
    name?: string | undefined;
    cause?: any;
    args?: any;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    message?: string | undefined;
    name?: string | undefined;
    cause?: any;
    args?: any;
}>>;
