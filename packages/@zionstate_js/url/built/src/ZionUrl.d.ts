export declare type Input = string | URL;
declare type SearchParams = 'query' | 'app_name';
export interface IZionURL extends URL {
    searchParamsKeys?: string[];
    logger(): void;
    show(): IZionURL;
    showSearchParams(): IZionURL;
    showSearchParamsEntries(): IZionURL;
    setPaths(string: string): IZionURL;
    setHost(host: string): IZionURL;
    setParams(param: SearchParams, value: string): IZionURL;
    refreshThis(): void;
}
export declare class ZionURL implements IZionURL {
    #private;
    url: Input;
    pathnamePattern: string;
    base?: Input | undefined;
    searchParamsKeys?: string[] | undefined;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    searchParams: URLSearchParams;
    username: string;
    toJSON: () => string;
    toString: () => string;
    constructor(url: Input, pathnamePattern: string, base?: Input | undefined, searchParamsKeys?: string[] | undefined);
    logger: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    show(): IZionURL;
    showParamsKeys(): ZionURL;
    showSearchParams(): ZionURL;
    showSearchParamsEntries(): ZionURL;
    setHost(host: string): IZionURL;
    setPaths(string: string): IZionURL;
    setParams(param: string, value: string): IZionURL;
    refreshThis(): void;
}
export {};
