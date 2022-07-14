import { multiaddr } from '../IPFSHTTP.describe.js';

console.log(Object.getOwnPropertyDescriptors(multiaddr));
console.log(Object.getOwnPropertyNames(multiaddr));
console.log(Object.getOwnPropertySymbols(multiaddr));

export let name = multiaddr.name;
export let prototype = multiaddr.prototype;
export let fromNodeAddress = multiaddr.fromNodeAddress;
export let isName = multiaddr.isName;
export let isMultiadd = multiaddr.isMultiaddr;
export let protocols = multiaddr.protocols;
export let resolvers = multiaddr.resolvers;
