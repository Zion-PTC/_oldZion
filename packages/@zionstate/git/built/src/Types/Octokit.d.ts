export interface OctokitOptions {
    authStrategy?: any;
    auth?: any;
    userAgent?: string;
    previews?: string[];
    baseUrl?: string;
    log?: {
        debug: (message: string) => unknown;
        info: (message: string) => unknown;
        warn: (message: string) => unknown;
        error: (message: string) => unknown;
    };
    request?: RequestRequestOptions;
    timeZone?: string;
    [option: string]: any;
}
declare type RequestRequestOptions = {
    /**
     * Node only. Useful for custom proxy, certificate, or dns lookup.
     *
     * @see https://nodejs.org/api/http.html#http_class_http_agent
     */
    agent?: unknown;
    /**
     * Custom replacement for built-in fetch method. Useful for testing or request hooks.
     */
    fetch?: Fetch;
    /**
     * Use an `AbortController` instance to cancel a request. In node you can only cancel streamed requests.
     */
    signal?: Signal;
    /**
     * Node only. Request/response timeout in ms, it resets on redirect. 0 to disable (OS limit applies). `options.request.signal` is recommended instead.
     */
    timeout?: number;
    [option: string]: any;
};
declare type Fetch = any;
declare type Signal = any;
export {};
