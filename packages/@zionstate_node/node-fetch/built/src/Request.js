import { Request, } from 'node-fetch';
class RequestDescription {
}
class ZionRequestInitDescription {
}
export class ZionRequest extends Request {
    constructor(input, init) {
        super(input, init);
    }
}
export class ZionRequestInit extends ZionRequestInitDescription {
    agent;
    body;
    compress;
    follow;
    headers;
    method;
    redirect;
    size;
    signal;
    timeout;
    constructor(agent, body, compress, follow, headers, method, redirect, size, signal, timeout) {
        super();
        this.agent = agent;
        this.body = body;
        this.compress = compress;
        this.follow = follow;
        this.headers = headers;
        this.method = method;
        this.redirect = redirect;
        this.size = size;
        this.signal = signal;
        this.timeout = timeout;
    }
}
