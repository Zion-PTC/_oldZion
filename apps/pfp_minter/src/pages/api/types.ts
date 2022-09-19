import { StaticImageData } from "next/image";

export type DataType = {
  [key: string]: string | number | boolean | StaticImageData[];
};

export type Data<D> = { data: D[] };
export type DataByPath<D> = { data: D };
export type Database<D> = { [key: string]: D };
export type StaticProps = { params: { [key: string]: string } };

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

export type Options = {
  URL: string;
};
