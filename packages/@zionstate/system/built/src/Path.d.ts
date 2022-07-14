export declare class ZionPath {
    #private;
    get path(): string;
    constructor(paths?: string[]);
    directory(): string;
    baseName(): string;
}
