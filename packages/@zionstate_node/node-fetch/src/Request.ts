import { Agent } from 'http';
import {
  Blob,
  BodyInit,
  Headers,
  HeadersInit,
  Request,
  RequestContext,
  RequestInfo,
  RequestInit,
  RequestRedirect,
} from 'node-fetch';
import { AbortSignal } from 'node-fetch/externals';
import { URL } from 'url';

export interface IZionRequest extends Request {}
export interface IZionRequestInit extends RequestInit {}

export type ZionRequestInfo = RequestInfo;

abstract class RequestDescription implements IZionRequest {
  abstract agent?:
    | boolean
    | Agent
    | ((parsedUrl: URL) => boolean | Agent | undefined)
    | undefined;
  abstract bodyUsed: boolean;
  abstract body: NodeJS.ReadableStream;
  abstract context: RequestContext;
  abstract compress: boolean;
  abstract counter: number;
  abstract follow: number;
  abstract hostname: string;
  abstract headers: Headers;
  abstract method: string;
  abstract port?: number | undefined;
  abstract protocol: string;
  abstract referrer: string;
  abstract redirect: RequestRedirect;
  abstract size: number;
  abstract timeout: number;
  abstract url: string;
  abstract arrayBuffer(): Promise<ArrayBuffer>;
  abstract buffer(): Promise<Buffer>;
  abstract blob(): Promise<Blob>;
  abstract clone(): Request;
  abstract json(): Promise<any>;
  abstract text(): Promise<string>;
  abstract textConverted(): Promise<string>;
}

abstract class ZionRequestInitDescription implements IZionRequestInit {
  abstract agent?:
    | boolean
    | Agent
    | ((parsedUrl: URL) => boolean | Agent | undefined)
    | undefined;
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

export class ZionRequest extends RequestDescription implements IZionRequest {
  #Request: Request;
  agent?:
    | boolean
    | Agent
    | ((parsedUrl: URL) => boolean | Agent | undefined)
    | undefined;
  bodyUsed: boolean;
  body: NodeJS.ReadableStream;
  context: RequestContext;
  compress: boolean;
  counter: number;
  follow: number;
  hostname: string;
  headers: Headers;
  method: string;
  port?: number | undefined;
  protocol: string;
  referrer: string;
  redirect: RequestRedirect;
  size: number;
  timeout: number;
  url: string;
  arrayBuffer;
  buffer;
  blob;
  clone;
  json;
  text;
  textConverted;
  constructor(input: RequestInfo, init?: RequestInit) {
    super();
    this.#Request = new Request(input, init);
    this.agent = this.#Request.agent;
    this.bodyUsed = this.#Request.bodyUsed;
    this.body = this.#Request.body;
    this.context = this.#Request.context;
    this.compress = this.#Request.compress;
    this.counter = this.#Request.counter;
    this.follow = this.#Request.follow;
    this.hostname = this.#Request.hostname;
    this.headers = this.#Request.headers;
    this.method = this.#Request.method;
    this.port = this.#Request.port;
    this.protocol = this.#Request.protocol;
    this.referrer = this.#Request.referrer;
    this.redirect = this.#Request.redirect;
    this.size = this.#Request.size;
    this.timeout = this.#Request.timeout;
    this.url = this.#Request.url;
    this.arrayBuffer = this.#Request.arrayBuffer;
    this.buffer = this.#Request.buffer;
    this.blob = this.#Request.blob;
    this.clone = this.#Request.clone;
    this.json = this.#Request.json;
    this.text = this.#Request.text;
    this.textConverted = this.#Request.textConverted;
  }
}

export class ZionRequestInit
  extends ZionRequestInitDescription
  implements IZionRequestInit
{
  constructor(
    public agent?:
      | boolean
      | Agent
      | ((parsedUrl: URL) => boolean | Agent | undefined)
      | undefined,
    public body?: BodyInit | undefined,
    public compress?: boolean | undefined,
    public follow?: number | undefined,
    public headers?: HeadersInit | undefined,
    public method?: string | undefined,
    public redirect?: RequestRedirect | undefined,
    public size?: number | undefined,
    public signal?: AbortSignal | null | undefined,
    public timeout?: number | undefined
  ) {
    super();
  }
}
