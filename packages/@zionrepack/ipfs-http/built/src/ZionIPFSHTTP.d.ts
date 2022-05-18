import { AddOptions, AddResult } from 'ipfs-core-types/src/root';
import { ImportCandidate } from 'ipfs-core-types/src/utils';
import * as IPFSHTTP from 'ipfs-http-client';
import * as IPFSHTTP_TYPES from 'ipfs-http-client/types/src/types';
declare type HTTPClientExtraOptions = IPFSHTTP_TYPES.HTTPClientExtraOptions;
export declare class ZionIpfs {
    #private;
    id: string;
    ipfs: Promise<IPFSHTTP.IPFSHTTPClient>;
    constructor(id: string, ipfs: Promise<IPFSHTTP.IPFSHTTPClient>);
    getCID(entry: any): Promise<import("ipfs-core-types/src/root").IDResult>;
    add(entry: ImportCandidate, options?: AddOptions & HTTPClientExtraOptions): Promise<AddResult>;
}
export {};
