export abstract class MinterMachine {
  constructor(public name: string) {}
  //Ipfs
  abstract loadImagetoIpfs(): void;
  abstract loadMetadataToIpfs(): unknown;
  //Blockchain
  abstract setBlockchain(): unknown;
  abstract setBlockchains(): unknown;
  abstract trySmartContrct(): unknown;
  abstract deploySmartContract(): unknown;
  abstract mintEdition(): unknown;
  //Admin
  abstract sendTokenToMinter(): unknown;
  //TokenShop
  abstract setPrice(): unknown;
}
