import { StaticImageData } from "next/image";
import { Data } from "../api/types";
import { BasePropsFromApp, LayoutProps } from "../type";

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

export type CollectionPropsFromApp = BasePropsFromApp & {
  parentWidth: number;
  parentHeight: number;
  width: number;
  height: number;
  blockSize: number;
  columns: number;
};

export type CollectionProps = Data<NftData> & CollectionPropsFromApp;
