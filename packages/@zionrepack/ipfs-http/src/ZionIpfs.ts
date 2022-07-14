import { AddOptions, AddResult } from "ipfs-core-types/src/root";
import { ImportCandidate } from "ipfs-core-types/src/utils";
import * as IPFSHTTP from "ipfs-http-client";
import { RmOptions, LsOptions, LsResult } from "ipfs-core-types/types/src/pin";
import * as IPFSHTTP_TYPES from "ipfs-http-client/types/src/types";
import * as IPFSHTTP_PIN from "ipfs-http-client/types/src/pin";

type EndpointConfig = IPFSHTTP_TYPES.EndpointConfig;
type HTTPClientExtraOptions = IPFSHTTP_TYPES.HTTPClientExtraOptions;
type IPFSHTTPClient = IPFSHTTP_TYPES.IPFSHTTPClient;
type IPLDOptions = IPFSHTTP_TYPES.IPLDOptions;
type LoadBaseFn = IPFSHTTP_TYPES.LoadBaseFn;
type LoadCodecFn = IPFSHTTP_TYPES.LoadCodecFn;
type LoadHasherFn = IPFSHTTP_TYPES.LoadHasherFn;
type Options = IPFSHTTP_TYPES.Options;

// class FileObject {
//   constructor(
//     public path: string,
//     public content: string,
//     public mode: string,
//     public mtime: string
//   ) {}
// }
// one of the following types: Uint8Array | Blob | String |
// Iterable<Uint8Array> | Iterable<number> |
// AsyncIterable<Uint8Array> | ReadableStream<Uint8Array>
// class FileContent {}

// class AddOptions {
//   constructor(
//     public chunker,
//     public cidVersion,
//     public hashAlg,
//     public onlyHash,
//     public pin,
//     public progress,
//     public rawLeaves,
//     public trickle,
//     public wrapWithDirectory,
//     public timeout,
//     public signal
//   ) {}
// }

// class Options {
//   constructor(
//     public host,
//     public port,
//     public protocol,
//     public headers,
//     public timeout,
//     public apiPath,
//     public url,
//     public ipld,
//     public agent
//   ) {}
// }

// class AddResponse {
//   constructor(
//     public cid,
//     public mode,
//     public mtime,
//     public path,
//     public size
//   ) {}
// }
export interface ZionIpfs {
  temp: Promise<IPFSHTTP.IPFSHTTPClient>;
  id: string;
  ipfs?: IPFSHTTP.IPFSHTTPClient;
  new (id: string, ipfs?: IPFSHTTP.IPFSHTTPClient): ZionIpfs;
  cat(entry: string): Promise<string | undefined>;
  add(
    entry: ImportCandidate,
    options?: AddOptions & HTTPClientExtraOptions
  ): Promise<AddResult>;
  addPin(
    cid: string | IPFSHTTP.CID,
    options?: AddOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions
  ): Promise<void>;
  listPins(
    options?: (LsOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions) | undefined
  ): Promise<LsResult[]>;
  deletePin(
    ipfsPath: string | IPFSHTTP.CID,
    options?: (RmOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions) | undefined
  ): Promise<void>;
}

export class ZionIpfs implements ZionIpfs {
  constructor(public id: string = `I'm going to be coool`) {
    this.id = id;
    this.temp = this.#createIpfs();
    this.#load();
  }
  async #createIpfs() {
    return IPFSHTTP.create({
      host: "127.0.0.1",
      port: 5002,
    });
  }
  async #load(): Promise<IPFSHTTP.IPFSHTTPClient> {
    const ipfs = await this.temp;
    return ipfs;
  }
  async cat(entry: string) {
    if (!this.ipfs) this.ipfs = await this.#load();
    const res = this.ipfs.cat(entry);
    let data;
    for await (const r of res) {
      data = Buffer.from(r).toString();
    }
    return data;
  }
  async add(
    entry: ImportCandidate,
    options?: AddOptions & HTTPClientExtraOptions
  ): Promise<AddResult> {
    if (!this.ipfs) this.ipfs = await this.#load();
    return this.ipfs.add(entry, options);
  }
  async addPin(
    cid: string | IPFSHTTP.CID,
    options?: AddOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions
  ) {
    this.ipfs?.pin.add(cid, options);
  }
  async listPins(
    options?: (LsOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions) | undefined
  ) {
    if (!this.ipfs) this.ipfs = await this.#load();
    const res = this.ipfs.pin.ls(options);
    let data = [];
    for await (const r of res) {
      data.push(r);
    }
    return data;
  }
  async deletePin(
    ipfsPath: string | IPFSHTTP.CID,
    options?: (RmOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions) | undefined
  ) {
    this.ipfs?.pin.rm(ipfsPath, options);
  }
}
// https://ipfs.io/ipfs/QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN?filename=QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN
