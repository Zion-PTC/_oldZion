import * as IPFSHTTP from 'ipfs-http-client';
class FileObject {
    path;
    content;
    mode;
    mtime;
    constructor(path, content, mode, mtime) {
        this.path = path;
        this.content = content;
        this.mode = mode;
        this.mtime = mtime;
    }
}
// one of the following types: Uint8Array | Blob | String |
// Iterable<Uint8Array> | Iterable<number> |
// AsyncIterable<Uint8Array> | ReadableStream<Uint8Array>
class FileContent {
}
class AddOptions {
    chunker;
    cidVersion;
    hashAlg;
    onlyHash;
    pin;
    progress;
    rawLeaves;
    trickle;
    wrapWithDirectory;
    timeout;
    signal;
    constructor(chunker, cidVersion, hashAlg, onlyHash, pin, progress, rawLeaves, trickle, wrapWithDirectory, timeout, signal) {
        this.chunker = chunker;
        this.cidVersion = cidVersion;
        this.hashAlg = hashAlg;
        this.onlyHash = onlyHash;
        this.pin = pin;
        this.progress = progress;
        this.rawLeaves = rawLeaves;
        this.trickle = trickle;
        this.wrapWithDirectory = wrapWithDirectory;
        this.timeout = timeout;
        this.signal = signal;
    }
}
class Options {
    host;
    port;
    protocol;
    headers;
    timeout;
    apiPath;
    url;
    ipld;
    agent;
    constructor(host, port, protocol, headers, timeout, apiPath, url, ipld, agent) {
        this.host = host;
        this.port = port;
        this.protocol = protocol;
        this.headers = headers;
        this.timeout = timeout;
        this.apiPath = apiPath;
        this.url = url;
        this.ipld = ipld;
        this.agent = agent;
    }
}
class AddResponse {
    cid;
    mode;
    mtime;
    path;
    size;
    constructor(cid, mode, mtime, path, size) {
        this.cid = cid;
        this.mode = mode;
        this.mtime = mtime;
        this.path = path;
        this.size = size;
    }
}
export class ZionIpfs {
    id;
    ipfs;
    constructor(id, ipfs) {
        this.id = id;
        this.ipfs = ipfs;
        this.id = `I'm going to be coool`;
        this.ipfs = this.#createIpfs();
    }
    async #createIpfs() {
        return IPFSHTTP.create({
            host: '192.168.1.23',
            port: 5001,
        });
    }
    async getCID(entry) {
        let res = await (await this.ipfs).id(); // /ip4/192.168.1.23/udp/4001/quic/p2p/12D3KooWDoCMiUv6m3rEV6cBP3eBqrpP1hyhLaot5einSUtCeQki
        return res;
    }
}
// https://ipfs.io/ipfs/QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN?filename=QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN
