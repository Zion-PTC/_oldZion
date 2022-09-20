import { StaticImageData } from "next/image";

export type DataType = {
  [key: string]: string | number | boolean | StaticImageData[];
};

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
