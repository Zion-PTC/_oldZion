export interface NftsData {
  [key: string]: NftData;
}

export interface NftData {
  id: number;
  name: string;
  slug: string;
}
