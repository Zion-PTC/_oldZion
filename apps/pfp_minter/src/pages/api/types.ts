export interface NftsData {
  [key: string]: NftData;
}

export interface NftData {
  id: number;
  name: string;
  slug: string;
  [key: string]: string | number;
}
export type Options = {
  URL: string;
};
export type Data<D> = { data: D[] };
export type DataByPath<D> = { data: D };
export type Database<D> = { [key: string]: D };
export type DataType = { [key: string]: string | number | boolean };
export type StaticProps = { params: { [key: string]: string } };
