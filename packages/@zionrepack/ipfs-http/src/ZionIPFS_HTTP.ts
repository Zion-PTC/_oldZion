import * as IPFSHTTP from 'ipfs-http-client';

class FileObject {
  constructor(
    public path: string,
    public content: string,
    public mode: string,
    public mtime: string
  ) {}
}
// one of the following types: Uint8Array | Blob | String |
// Iterable<Uint8Array> | Iterable<number> |
// AsyncIterable<Uint8Array> | ReadableStream<Uint8Array>
class FileContent {}

class AddOptions {
  constructor(
    public chunker,
    public cidVersion,
    public hashAlg,
    public onlyHash,
    public pin,
    public progress,
    public rawLeaves,
    public trickle,
    public wrapWithDirectory,
    public timeout,
    public signal
  ) {}
}

class Options {
  constructor(
    public host,
    public port,
    public protocol,
    public headers,
    public timeout,
    public apiPath,
    public url,
    public ipld,
    public agent
  ) {}
}

class AddResponse {
  constructor(
    public cid,
    public mode,
    public mtime,
    public path,
    public size
  ) {}
}

export class ZionIpfs {
  constructor(public id, public ipfs) {
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
