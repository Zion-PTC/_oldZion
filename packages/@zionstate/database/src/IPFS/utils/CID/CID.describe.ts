import { CID } from '../IPFSHTTP.describe.js';

console.log(Object.getOwnPropertyDescriptors(CID));
console.log(Object.getOwnPropertyNames(CID));
console.log(Object.getOwnPropertySymbols(CID));

export let name = CID.name;
export let protype = CID.prototype;
export let isCID = CID.isCID;
export let asCID = CID.asCID;
export let create = CID.create;
export let createV0 = CID.createV0;
export let createV1 = CID.createV1;
export let decode = CID.decode;
export let decodeFirst = CID.decodeFirst;
export let instectBytes = CID.inspectBytes;
export let parse = CID.parse;
