import {
  Blob,
  Headers,
  Response,
  ResponseType,
  BodyInit,
  RequestInit,
} from 'node-fetch';

export interface IZionResponse extends Response {}
abstract class ResponseDescription implements IZionResponse {
  abstract clone(): Response;
  abstract arrayBuffer(): Promise<ArrayBuffer>;
  abstract blob(): Promise<Blob>;
  abstract buffer(): Promise<Buffer>;
  abstract json(): Promise<any>;
  abstract text(): Promise<string>;
  abstract textConverted(): Promise<string>;
  constructor(
    public headers: Headers,
    public ok: boolean,
    public redirected: boolean,
    public status: number,
    public statusText: string,
    public type: ResponseType,
    public url: string,
    public body: NodeJS.ReadableStream,
    public bodyUsed: boolean,
    public size: number,
    public timeout: number
  ) {}
}
export type ZionBodyInit = BodyInit;
export class ZionResponse extends Response implements IZionResponse {
  constructor(body: BodyInit, init: RequestInit) {
    super(body, init);
  }
}
let response = new Response();
