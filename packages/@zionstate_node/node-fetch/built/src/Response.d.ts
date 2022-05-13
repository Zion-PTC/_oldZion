import { Response, BodyInit, RequestInit } from 'node-fetch';
export interface IZionResponse extends Response {
}
export declare type ZionBodyInit = BodyInit;
export declare class ZionResponse extends Response implements IZionResponse {
    constructor(body: BodyInit, init: RequestInit);
}
