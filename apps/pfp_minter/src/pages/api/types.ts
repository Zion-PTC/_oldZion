import { StaticImageData } from "next/image";

export type OpenSeaMetadata = {
  description: string;
  external_url: string;
  image: string;
  name: string;
  attributes: [
    {
      trait_type: string;
      value: string;
    }
  ];
};

export interface NftsData {
  [key: string]: NftData;
}
export interface NftData {
  id: number;
  name: string;
  slug: string;
  [key: string]: string | number | StaticImageData[];
  src: string;
}
export type Options = {
  URL: string;
};
export type Data<D> = { data: D[] };
export type DataByPath<D> = { data: D };
export type Database<D> = { [key: string]: D };
export type DataType = {
  [key: string]: string | number | boolean | StaticImageData[];
};
export type StaticProps = { params: { [key: string]: string } };
