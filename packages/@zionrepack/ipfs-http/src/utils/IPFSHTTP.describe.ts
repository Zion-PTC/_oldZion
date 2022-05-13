import * as IPFSHTTP from 'ipfs-http-client';

console.log(Object.getOwnPropertyDescriptors(IPFSHTTP));
console.log(Object.getOwnPropertyNames(IPFSHTTP));
console.log(Object.getOwnPropertySymbols(IPFSHTTP));

export let CID = IPFSHTTP.CID;
export let create = IPFSHTTP.create;
export let globSource = IPFSHTTP.globSource;
export let multiaddr = IPFSHTTP.multiaddr;
export let urlSource = IPFSHTTP.urlSource;
export let module = IPFSHTTP[Object.getOwnPropertySymbols(IPFSHTTP)[0]];
