import { Response, } from 'node-fetch';
class ResponseDescription {
    headers;
    ok;
    redirected;
    status;
    statusText;
    type;
    url;
    body;
    bodyUsed;
    size;
    timeout;
    constructor(headers, ok, redirected, status, statusText, type, url, body, bodyUsed, size, timeout) {
        this.headers = headers;
        this.ok = ok;
        this.redirected = redirected;
        this.status = status;
        this.statusText = statusText;
        this.type = type;
        this.url = url;
        this.body = body;
        this.bodyUsed = bodyUsed;
        this.size = size;
        this.timeout = timeout;
    }
}
export class ZionResponse extends Response {
    constructor(body, init) {
        super(body, init);
    }
}
let response = new Response();
