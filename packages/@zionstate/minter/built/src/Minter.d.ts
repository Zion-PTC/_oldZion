export declare abstract class MinterMachine {
    name: string;
    constructor(name: string);
    abstract loadImagetoIpfs(): void;
    abstract loadMetadataToIpfs(): unknown;
    abstract setBlockchain(): unknown;
    abstract setBlockchains(): unknown;
    abstract trySmartContrct(): unknown;
    abstract deploySmartContract(): unknown;
    abstract mintEdition(): unknown;
    abstract sendTokenToMinter(): unknown;
    abstract setPrice(): unknown;
}
