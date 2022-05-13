import { defineSearchParams } from './utils/defineSearchParameter.js';
import { ZionRegExp } from '@zionstate_js/regexp';

export type Input = string | URL;
type SearchParams = 'query' | 'app_name';

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

export class ZionURL implements IZionURL {
  #URL: URL;
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
  toJSON;
  toString;
  constructor(
    public url: Input,
    public pathnamePattern: string,
    public base?: Input,
    public searchParamsKeys?: string[]
  ) {
    this.#URL = new URL(url, base);
    // this.searchParamsKeys = defineSearchParams(this);
    this.hash = this.#URL.hash;
    this.host = this.#URL.host;
    this.hostname = this.#URL.hostname;
    this.href = this.#URL.href;
    this.origin = this.#URL.origin;
    this.password = this.#URL.password;
    this.pathname = this.#URL.pathname;
    this.port = this.#URL.port;
    this.protocol = this.#URL.protocol;
    this.search = this.#URL.search;
    this.searchParams = this.#URL.searchParams;
    this.username = this.#URL.username;
    this.toJSON = this.#URL.toJSON;
    this.toString = this.#URL.toString;
  }
  logger = console.log;
  show(): IZionURL {
    this.logger(this);
    return this;
  }
  showParamsKeys(): ZionURL {
    this.logger(this.searchParamsKeys);
    return this;
  }
  showSearchParams(): ZionURL {
    this.logger(this.searchParams);
    return this;
  }
  showSearchParamsEntries(): ZionURL {
    for (let pair of this.searchParams.entries()) this.logger(pair);
    return this;
  }
  setHost(host: string): IZionURL {
    this.#URL.host = host;
    this.refreshThis();
    return this;
  }
  setPaths(string: string): IZionURL {
    let regexp = ZionRegExp.everythingBetweenDyn('{', '}');
    this.#URL.pathname = this.pathnamePattern.replace(regexp, string);
    this.refreshThis();
    return this;
  }
  setParams(param: string, value: string): IZionURL {
    this.searchParams.set(param, value);
    this.refreshThis();
    return this;
  }
  refreshThis() {
    this.hash = this.#URL.hash;
    this.host = this.#URL.host;
    this.hostname = this.#URL.hostname;
    this.href = this.#URL.href;
    this.origin = this.#URL.origin;
    this.password = this.#URL.password;
    this.pathname = this.#URL.pathname;
    this.port = this.#URL.port;
    this.protocol = this.#URL.protocol;
    this.search = this.#URL.search;
    this.searchParams = this.#URL.searchParams;
    this.username = this.#URL.username;
  }
}
