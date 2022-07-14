import { AddOptions, AddResult } from "ipfs-core-types/src/root";
import { ImportCandidate } from "ipfs-core-types/src/utils";
import * as IPFSHTTP from "ipfs-http-client";
import { RmOptions, LsOptions, LsResult } from "ipfs-core-types/types/src/pin";
import * as IPFSHTTP_TYPES from "ipfs-http-client/types/src/types";
declare type HTTPClientExtraOptions = IPFSHTTP_TYPES.HTTPClientExtraOptions;
export interface ZionIpfs {
    temp: Promise<IPFSHTTP.IPFSHTTPClient>;
    id: string;
    ipfs?: IPFSHTTP.IPFSHTTPClient;
    new (id: string, ipfs?: IPFSHTTP.IPFSHTTPClient): ZionIpfs;
    cat(entry: string): Promise<string | undefined>;
    add(entry: ImportCandidate, options?: AddOptions & HTTPClientExtraOptions): Promise<AddResult>;
    addPin(cid: string | IPFSHTTP.CID, options?: AddOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions): Promise<void>;
    listPins(options?: (LsOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions) | undefined): Promise<LsResult[]>;
    deletePin(ipfsPath: string | IPFSHTTP.CID, options?: (RmOptions & IPFSHTTP_TYPES.HTTPClientExtraOptions) | undefined): Promise<void>;
}
export declare class ZionIpfs implements ZionIpfs {
    #private;
    id: string;
    constructor(id?: string);
}
export {};
