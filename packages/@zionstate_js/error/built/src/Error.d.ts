import mongoose from 'mongoose';
/**
 * @param message It's the name which appear in the console log
 * @param name It's the name which appear in the console log
 * @param cause It's the error coming from the callee function
 * @param args Object containing the called parameters
 * @method justLove this is a really cool method
 **/
export declare class ZionError extends Error {
    cause: any;
    args: any;
    constructor(message: any, name?: any, cause?: any, args?: any);
    log(): void;
}
export declare let ZionErrorDoc: mongoose.Model<any, {}, {}, {}>;
