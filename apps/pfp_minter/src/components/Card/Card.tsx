import { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";
import { Album } from "../Card/Album";
import { NftPfp } from "../Card/NftPfp";
import { CardPfpProps } from "./CardPfp";

export enum CardFormats {
  landscape = "landscape",
  portrait = "portrait",
  square = "square",
  slim = "slim",
  resource = "resource",
}

export type CardFormatsTypes = keyof typeof CardFormats;

export const Area = styled.div<{
  colSpan: number;
  rowSpan: number;
  backgroundColor?: string;
  width: number;
}>`
  background-color: ${(props) => props.backgroundColor};
  grid-column: span ${(props) => props.colSpan};
  grid-row: span ${(props) => props.rowSpan};
  width: ${(props) => props.width};
`;

export enum CardShapesEnum {
  landscape,
  portrait,
  square,
  slim,
}
export type CardShapesTypes = keyof typeof CardShapesEnum;
export type CardProps = {
  datas?: CardPfpProps[];
  type: "nft-pfp" | "album";
  backgroundColor?: string;
  images: StaticImageData[];
};
export default function Card(props: CardProps) {
  let { type, backgroundColor } = props;
  let Element: () => JSX.Element;
  switch (type) {
    case "nft-pfp":
      Element = () => (
        <NftPfp
          image={props.images[0]}
          backgroundColor={backgroundColor}
        ></NftPfp>
      );
      break;
    case "album":
      Element = () => (
        // TODO togliere indice dopo aver inserito CardPfps
        <Album
          image={props.images[0]}
          backgroundColor={backgroundColor}
        ></Album>
      );
    default:
      break;
  }
  return <Element></Element>;
}
