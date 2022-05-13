/// <reference types="node" />
import { Agent } from 'http';
import { BodyInit, HeadersInit, Request, RequestInfo, RequestInit, RequestRedirect } from 'node-fetch';
import { AbortSignal } from 'node-fetch/externals';
import { URL } from 'url';
export interface IZionRequest extends Request {
}
export interface IZionRequestInit extends RequestInit {
}
export declare type ZionRequestInfo = RequestInfo;
declare abstract class ZionRequestInitDescription implements IZionRequestInit {
    abstract agent?: boolean | Agent | ((parsedUrl: URL) => boolean | Agent | undefined) | undefined;
    abstract body?: BodyInit | undefined;
    abstract compress?: boolean | undefined;
    abstract follow?: number | undefined;
    abstract headers?: HeadersInit | undefined;
    abstract method?: string | undefined;
    abstract redirect?: RequestRedirect | undefined;
    abstract size?: number | undefined;
    abstract signal?: AbortSignal | null | undefined;
    abstract timeout?: number | undefined;
}
export declare class ZionRequest extends Request implements IZionRequest {
    constructor(input: RequestInfo, init?: RequestInit);
}
export declare class ZionRequestInit extends ZionRequestInitDescription implements IZionRequestInit {
    agent?: boolean | Agent | ((parsedUrl: URL) => boolean | Agent | undefined) | undefined;
    body?: BodyInit | undefined;
    compress?: boolean | undefined;
    follow?: number | undefined;
    headers?: HeadersInit | undefined;
    method?: string | undefined;
    redirect?: RequestRedirect | undefined;
    size?: number | undefined;
    signal?: AbortSignal | null | undefined;
    timeout?: number | undefined;
    constructor(agent?: boolean | Agent | ((parsedUrl: URL) => boolean | Agent | undefined) | undefined, body?: BodyInit | undefined, compress?: boolean | undefined, follow?: number | undefined, headers?: HeadersInit | undefined, method?: string | undefined, redirect?: RequestRedirect | undefined, size?: number | undefined, signal?: AbortSignal | null | undefined, timeout?: number | undefined);
}
export {};
