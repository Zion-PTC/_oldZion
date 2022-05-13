import { ZionRegExp } from '@zionstate_js/regexp';
export class ZionURL {
    url;
    pathnamePattern;
    base;
    searchParamsKeys;
    #URL;
    hash;
    host;
    hostname;
    href;
    origin;
    password;
    pathname;
    port;
    protocol;
    search;
    searchParams;
    username;
    toJSON;
    toString;
    constructor(url, pathnamePattern, base, searchParamsKeys) {
        this.url = url;
        this.pathnamePattern = pathnamePattern;
        this.base = base;
        this.searchParamsKeys = searchParamsKeys;
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
    show() {
        this.logger(this);
        return this;
    }
    showParamsKeys() {
        this.logger(this.searchParamsKeys);
        return this;
    }
    showSearchParams() {
        this.logger(this.searchParams);
        return this;
    }
    showSearchParamsEntries() {
        for (let pair of this.searchParams.entries())
            this.logger(pair);
        return this;
    }
    setHost(host) {
        this.#URL.host = host;
        this.refreshThis();
        return this;
    }
    setPaths(string) {
        let regexp = ZionRegExp.everythingBetweenDyn('{', '}');
        this.#URL.pathname = this.pathnamePattern.replace(regexp, string);
        this.refreshThis();
        return this;
    }
    setParams(param, value) {
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
