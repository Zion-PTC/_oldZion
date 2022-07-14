import * as IPFSHTTP from 'ipfs-http-client';

console.log(Object.getOwnPropertyDescriptors(IPFSHTTP));
console.log(Object.getOwnPropertyNames(IPFSHTTP));
console.log(Object.getOwnPropertySymbols(IPFSHTTP));

export type BlockCodec = IPFSHTTP.BlockCodec;
export type CID = IPFSHTTP.CID;
export type EndpointConfig = IPFSHTTP.EndpointConfig;
export type IPFSHTTPClient = IPFSHTTP.IPFSHTTPClient;
export type MultibaseCodec = IPFSHTTP.MultibaseCodec;
export type MultihashHasher = IPFSHTTP.MultihashHasher;
export type Options_T = IPFSHTTP.Options;
export type multiaddr = IPFSHTTP.multiaddr;

export let CID = IPFSHTTP.CID;
export let create = IPFSHTTP.create;
export let globSource = IPFSHTTP.globSource;
export let multiaddr = IPFSHTTP.multiaddr;
export let urlSource = IPFSHTTP.urlSource;
//@ts-ignore
export let module = IPFSHTTP[Object.getOwnPropertySymbols(IPFSHTTP)[0]];
